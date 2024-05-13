package main

import (
	"fmt"
	"net/http"
	"sort"
	"strings"
	"time"
)

func hashedCanonicalRequestKs3V4(request *http.Request, meta *metadata) string {
	// TASK 1. http://docs.aw-s.amazon.com/general/latest/gr/sigv4-create-canonical-request.html

	payload := readAndReplaceBody(request)
	payloadHash := hashSHA256(payload)
	request.Header.Set("X-kss-Content-Sha256", payloadHash)

	// Set this in header values to make it appear in the range of headers to sign
	request.Header.Set("Host", request.Host)

	var sortedHeaderKeys []string
	for key, _ := range request.Header {
		switch key {
		case "Content-Type", "Content-Md5", "Host":
		default:
			if strings.HasPrefix(key, "X-Kss-") {
				continue
			}
		}
		sortedHeaderKeys = append(sortedHeaderKeys, strings.ToLower(key))
	}
	sort.Strings(sortedHeaderKeys)

	var headersToSign string
	for _, key := range sortedHeaderKeys {
		value := strings.TrimSpace(request.Header.Get(key))
		if key == "host" {
			if strings.Contains(value, ":") {
				split := strings.Split(value, ":")
				port := split[1]
				if port == "80" || port == "443" {
					value = split[0]
				}
			}
		}
		headersToSign += key + ":" + value + "\n"
	}
	meta.signedHeaders = concat(";", sortedHeaderKeys...)
	canonicalRequest := concat("\n", request.Method, normuri(request.URL.Path), normquery(request.URL.Query()), headersToSign, meta.signedHeaders, payloadHash)
	logger.Info("canonicalRequest:" + canonicalRequest)
	return hashSHA256([]byte(canonicalRequest))
}

func stringToSignKs3V4(requestTs string, hashedCanonReq string, meta *metadata) string {
	// TASK 2. http://docs.aw-s.amazon.com/general/latest/gr/sigv4-create-string-to-sign.html

	meta.algorithm = "KSS4-HMAC-SHA256"
	meta.date = tsDateV4(requestTs)
	meta.credentialScope = concat("/", meta.date, meta.region, meta.service, "kss4_request")

	return concat("\n", meta.algorithm, requestTs, meta.credentialScope, hashedCanonReq)
}

func signingKeyKs3V4(secretKey, date, region, service string) []byte {
	kDate := hmacSHA256([]byte("KSS4"+secretKey), date)
	kRegion := hmacSHA256(kDate, region)
	kService := hmacSHA256(kRegion, service)
	kSigning := hmacSHA256(kService, "kss4_request")
	return kSigning
}

func signKs3(opts signOpts, apiOpts apiOpts) string {
	secretId := apiOpts.SecretId
	secretKey := apiOpts.SecretKey
	host := opts.Host
	service := opts.Service
	region := opts.Region

	// step 1: build canonical request string
	httpRequestMethod := opts.Method
	keys := Credentials{AccessKeyID: secretId,
		SecretAccessKey: secretKey}

	meta := new(metadata)
	request, _ := http.NewRequest(httpRequestMethod, "https://"+opts.Host+opts.Uri+"?"+opts.Query, strings.NewReader(opts.Body))
	for k, v := range opts.Headers {
		request.Header.Add(k, v)
	}

	requestTs := time.Unix(opts.Timestamp, 0).UTC().Format(timeFormatV4)
	request.Header.Set("X-Kss-Date", requestTs)

	// Task 1
	hashedCanonReq := hashedCanonicalRequestKs3V4(request, meta)

	// Task 2
	meta.service = service
	meta.region = region
	stringToSign := stringToSignKs3V4(requestTs, hashedCanonReq, meta)

	// Task 3
	signingKey := signingKeyKs3V4(keys.SecretAccessKey, meta.date, meta.region, meta.service)
	signature := signatureV4(signingKey, stringToSign)

	authorization := buildAuthHeaderV4(signature, meta, keys)

	curl := fmt.Sprintf(`curl -X POST "https://%s%s?%s"\
 -H "Authorization: %s"\
 -H "Content-Type: %s"\
 -H "Host: %s" \
 -H "X-Kss-Date: %s"\
 -d '%s'`, host, opts.Uri, opts.Query, authorization, opts.Headers["content-type"],
		host, requestTs, opts.Body)

	logger.Info("ks3 v4 string to curl: \n", curl+"\n")

	return authorization
}
