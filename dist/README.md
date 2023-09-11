# 金山云云监控插件 @ Grafana

> 注意：该插件的最低运行要求为 Grafana 8.0 或更高的版本上。请优先安装 Grafana 环境，详情参考 [Grafana 安装文档](https://grafana.com/grafana/download)。


# 简介

[金山云云监控](https://www.ksyun.com/nv/product/CM.html)是一项针对云资源进行监控的服务，可实时监控金山云云产品资源，提供计算、网络、数据库等云产品监控指标，用户可以通过云监控控制台、云监控 API 等方式获取云产品资源监控数据。金山云云监控应用插件Ksyun Cloud Monitor App，是一款适配开源软件 Grafana 的应用插件，通过调用金山云云监控API的方式获取监控数据，并对数据进行自定义 Dashboard 展示。支持的云产品监控包括计算、网络、数据库等云产品，更多云产品监控指标数据源在陆续完善中。


> 注意：该插件运行要求为 Grafana 8.0 或更高的版本上。运行该插件前请确保安装 Grafana 环境，详情参考[Grafana 安装文档](https://grafana.com/grafana/download)

# 入门指南

# 安装方式


## 1、直接安装云监控grafana数据源
    a. 直接 从release 页面 https://github.com/KscSDK/ksc-cloudmonitor-app/releases 里面下载 ksc-cloudmonitor-app-1.0.1.zip
    b. 下载到 grafan的plugin目录中，解压缩 unzip ksc-cloudmonitor-app-1.0.1.zip
    c. 修改 grafana.ini 允许未签名插件运行
        allow_loading_unsigned_plugins = ksc-cloudmonitor-app,ksc-cloudmonitor-datasource
    d. 重启grafana

## 2、源代码安装
    a. 编译
        进入ksc-cloudmonitor-app目录下,执行bin/build.sh
		生成 ksc-cloudmonitor-app-1.0.1.zip
 	b. 下载到 grafan的plugin目录中，解压缩 unzip ksc-cloudmonitor-app-1.0.1.zip
    c. 修改 grafana.ini 允许未签名插件运行
        allow_loading_unsigned_plugins = ksc-cloudmonitor-app,ksc-cloudmonitor-datasource
    d. 重启grafana


更多安装方式与入门指南请参见[使用指南](https://docs.ksyun.com/products/2)
# 模板变量

支持配置模板变量。可通过配置模板变量 [Variables](https://grafana.com/docs/reference/templating/) 创建便捷易用的 Dashboard。配置模板变量后，无需修改Dashboard 设置，通过调整模板变量即可动态更改Dashboard 。金山云云监控应用目前支持地域、各云产品实例变量。

# 使用指南

说明及示例详见[使用指南](https://docs.ksyun.com/products/2)。

