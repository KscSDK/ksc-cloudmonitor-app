package main

import (
	"encoding/json"
	"io"
	"net/http"
	"strings"

	"github.com/grafana/grafana-plugin-sdk-go/backend"
	"github.com/grafana/grafana-plugin-sdk-go/backend/resource/httpadapter"
)

type SignResultV3 struct {
	Authorization string `json:"authorization"`
	Token         string `json:"token"`

	Host     string `json:"host"`
	Intranet bool   `json:"intranet"`
}

type SignResultV2 struct {
	Query map[string]interface{} `json:"querystring"`

	Host     string `json:"host"`
	Path     string `json:"path"`
	Intranet bool   `json:"intranet"`
}

func newResourceHandler(ds *cloudMonitorDatasource) backend.CallResourceHandler {
	mux := http.NewServeMux()

	// register route
	mux.HandleFunc("/sign_v2", ds.SignApi("simple"))
	mux.HandleFunc("/sign_v3", ds.SignApi("aws"))
	mux.HandleFunc("/sign_ks3", ds.SignApi("ks3"))

	return httpadapter.New(mux)
}

type signOpts struct {
	Host      string            `json:"Host"`
	Service   string            `json:"Service"`
	Version   string            `json:"Version"`
	Action    string            `json:"Action"`
	Region    string            `json:"Region"`
	Timestamp int64             `json:"Timestamp"`
	Method    string            `json:"Method"`
	Uri       string            `json:"Uri"`
	Query     string            `json:"Query"`
	Body      string            `json:"Body"`
	Headers   map[string]string `json:"Headers"`
	Token     string            `json:"-"`
}

func (ds *cloudMonitorDatasource) SignApi(sign_type string) func(rw http.ResponseWriter, req *http.Request) {
	return func(rw http.ResponseWriter, req *http.Request) {
		if res, err := ds.getSigned(sign_type, req); err != nil {
			rw.WriteHeader(http.StatusBadRequest)
			_, _ = rw.Write([]byte(err.Error()))
			return
		} else {
			data, err := json.Marshal(res)
			if err != nil {
				rw.WriteHeader(http.StatusInternalServerError)
				_, _ = rw.Write([]byte(err.Error()))
				return
			}
			rw.Header().Add("Content-Type", "application/json")
			rw.WriteHeader(http.StatusOK)
			_, _ = rw.Write(data)
		}

	}
}

func (ds *cloudMonitorDatasource) getSigned(sign_type string, req *http.Request) (interface{}, error) {
	var query signOpts
	body, err := io.ReadAll(req.Body)
	if err != nil {
		return nil, err
	}
	err = json.Unmarshal(body, &query)

	if query.Method == "" {
		query.Method = "GET"
	}
	if query.Host == "" {
		if sign_type == "ks3" {
			query.Host = query.Service + ".ksyuncs.com"
		} else {
			query.Host = query.Service + ".api.ksyun.com"
		}

	}

	if err != nil {
		return nil, err
	}
	datasourceInstanceSettings := httpadapter.PluginConfigFromContext(req.Context()).DataSourceInstanceSettings
	apiOpts := getInsSetting(*datasourceInstanceSettings)
	shouldUseIntranet := apiOpts.Intranet

	if sign_type == "simple" {
		signed := signV2(query, apiOpts)
		return &SignResultV2{
			Query:    signed.Querystring,
			Path:     signed.Path,
			Host:     query.Host,
			Intranet: shouldUseIntranet,
		}, nil
	}

	if sign_type == "ks3" {
		signed := signKs3(query, apiOpts)
		return &SignResultV3{
			Authorization: signed,
			Token:         apiOpts.Token,
			Host:          query.Host,
			Intranet:      shouldUseIntranet,
		}, nil
	}

	//TODO 确认ks3 这部分应该写在哪里
	if apiOpts.Intranet {
		slice := strings.Split(query.Host, "api.ksyun.com")
		query.Host = slice[0] + "internal.api.ksyun.com"
		logger.Debug("using internal host: " + query.Host)
		for k := range query.Headers {
			if strings.ToLower(k) == "host" {
				query.Headers[k] = query.Host
			}
		}
	}

	signed := signV3(query, apiOpts)

	return &SignResultV3{
		Authorization: signed,
		Token:         apiOpts.Token,
		Host:          query.Host,
		Intranet:      shouldUseIntranet,
	}, nil
}
