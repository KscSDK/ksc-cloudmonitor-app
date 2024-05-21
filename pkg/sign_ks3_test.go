package main

import (
	"testing"
	"time"
)

func TestKs3Sign(t *testing.T) {
	r := signKs3(signOpts{
		Host:      "ks3-cn-beijing.ksyuncs.com",
		Service:   "ks3",
		Region:    "BEIJING",
		Version:   "",
		Action:    "",
		Timestamp: time.Now().Unix(),
		Method:    "GET",
		Uri:       "/",
		Query:     "projectIds=0",
		Body:      "",
		Headers: map[string]string{
			"Accept": "application/json",
		},
		Token: "",
	}, apiOpts{
		SecretId:  "",
		SecretKey: "",
	})
	t.Log(r)
}
