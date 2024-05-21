package main

import (
	"bytes"
	"crypto/hmac"
	"crypto/sha256"
	"encoding/hex"
	"fmt"
	"io/ioutil"
	"net/http"
	"net/url"
	"sort"
	"strings"
	"time"
)

// Credentials stores the information necessary to authorize with AWS and it
// is from this information that requests are signed.
type Credentials struct {
	AccessKeyID     string
	SecretAccessKey string
	SecurityToken   string `json:"Token"`
	Expiration      time.Time
}

type metadata struct {
	algorithm       string
	credentialScope string
	signedHeaders   string
	date            string
	region          string
	service         string
}

func hmacSHA256(key []byte, content string) []byte {
	mac := hmac.New(sha256.New, key)
	mac.Write([]byte(content))
	return mac.Sum(nil)
}

func hashSHA256(content []byte) string {
	h := sha256.New()
	h.Write(content)
	return fmt.Sprintf("%x", h.Sum(nil))
}

func readAndReplaceBody(request *http.Request) []byte {
	if request.Body == nil {
		return []byte{}
	}
	payload, _ := ioutil.ReadAll(request.Body)
	request.Body = ioutil.NopCloser(bytes.NewReader(payload))
	return payload
}

func concat(delim string, str ...string) string {
	return strings.Join(str, delim)
}

func normuri(uri string) string {
	parts := strings.Split(uri, "/")
	for i := range parts {
		parts[i] = encodePathFrag(parts[i])
	}
	return strings.Join(parts, "/")
}

func encodePathFrag(s string) string {
	hexCount := 0
	for i := 0; i < len(s); i++ {
		c := s[i]
		if shouldEscape(c) {
			hexCount++
		}
	}
	t := make([]byte, len(s)+2*hexCount)
	j := 0
	for i := 0; i < len(s); i++ {
		c := s[i]
		if shouldEscape(c) {
			t[j] = '%'
			t[j+1] = "0123456789ABCDEF"[c>>4]
			t[j+2] = "0123456789ABCDEF"[c&15]
			j += 3
		} else {
			t[j] = c
			j++
		}
	}
	return string(t)
}

func shouldEscape(c byte) bool {
	if 'a' <= c && c <= 'z' || 'A' <= c && c <= 'Z' {
		return false
	}
	if '0' <= c && c <= '9' {
		return false
	}
	if c == '-' || c == '_' || c == '.' || c == '~' {
		return false
	}
	return true
}

func normquery(v url.Values) string {
	queryString := v.Encode()

	// Go encodes a space as '+' but Amazon requires '%20'. Luckily any '+' in the
	// original query string has been percent escaped so all '+' chars that are left
	// were originally spaces.

	return strings.Replace(queryString, "+", "%20", -1)
}

func hashedCanonicalRequestV4(request *http.Request, meta *metadata) string {
	// TASK 1. http://docs.aws.amazon.com/general/latest/gr/sigv4-create-canonical-request.html

	payload := readAndReplaceBody(request)
	payloadHash := hashSHA256(payload)
	request.Header.Set("X-Amz-Content-Sha256", payloadHash)

	// Set this in header values to make it appear in the range of headers to sign
	request.Header.Set("Host", request.Host)

	var sortedHeaderKeys []string
	for key, _ := range request.Header {
		switch key {
		case "Content-Type", "Content-Md5", "Host":
		default:
			if strings.HasPrefix(key, "X-Amz-") {
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
			//AWS does not include port in signing request.
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

func stringToSignV4(requestTs string, hashedCanonReq string, meta *metadata) string {
	// TASK 2. http://docs.aws.amazon.com/general/latest/gr/sigv4-create-string-to-sign.html

	meta.algorithm = "AWS4-HMAC-SHA256"
	meta.date = tsDateV4(requestTs)
	meta.credentialScope = concat("/", meta.date, meta.region, meta.service, "aws4_request")

	return concat("\n", meta.algorithm, requestTs, meta.credentialScope, hashedCanonReq)
}

func signatureV4(signingKey []byte, stringToSign string) string {
	// TASK 3. http://docs.aws.amazon.com/general/latest/gr/sigv4-calculate-signature.html

	return hex.EncodeToString(hmacSHA256(signingKey, stringToSign))
}

func signingKeyV4(secretKey, date, region, service string) []byte {
	kDate := hmacSHA256([]byte("AWS4"+secretKey), date)
	kRegion := hmacSHA256(kDate, region)
	kService := hmacSHA256(kRegion, service)
	kSigning := hmacSHA256(kService, "aws4_request")
	return kSigning
}

func buildAuthHeaderV4(signature string, meta *metadata, keys Credentials) string {
	credential := keys.AccessKeyID + "/" + meta.credentialScope

	return meta.algorithm +
		" Credential=" + credential +
		", SignedHeaders=" + meta.signedHeaders +
		", Signature=" + signature
}

func tsDateV4(timestamp string) string {
	return timestamp[:8]
}

const timeFormatV4 = "20060102T150405Z"

func signV3(opts signOpts, apiOpts apiOpts) string {
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
	request.Header.Set("X-Amz-Date", requestTs)

	// Task 1
	hashedCanonReq := hashedCanonicalRequestV4(request, meta)

	// Task 2
	meta.service = service
	meta.region = region
	stringToSign := stringToSignV4(requestTs, hashedCanonReq, meta)

	// Task 3
	signingKey := signingKeyV4(keys.SecretAccessKey, meta.date, meta.region, meta.service)
	signature := signatureV4(signingKey, stringToSign)

	authorization := buildAuthHeaderV4(signature, meta, keys)

	curl := fmt.Sprintf(`curl -X %s "https://%s%s?%s"\
 -H "Authorization: %s"\
 -H "Host: %s" \
 -H "X-Amz-Date: %s"`, opts.Method, host, opts.Uri, opts.Query, authorization,
		host, requestTs)

	for k, v := range opts.Headers {
		curl += " \\\n" + fmt.Sprintf(` -H "%s: %s"`, k, v)
	}
	if opts.Body != "" {
		curl += " \\\n" + fmt.Sprintf(`-d '%s'`, opts.Body)
	}

	logger.Info("v3 string to curl: \n", curl+"\n")

	return authorization
}
