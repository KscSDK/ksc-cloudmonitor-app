import { getBackendSrv } from '@grafana/runtime';
import { ServiceMap } from '../type_monitors';
import { GenerateKs3BusketOptions, replaceRealValue } from './common';
import _ from 'lodash';

const moment = require('moment');
const __backendSrv: any = getBackendSrv();
// 根据sign_v3接口返回签名生成拼接url
export const generateSignUrl = (authorization: string) => {
  const signSplice = authorization.split(',');
  let dealUrl = '';
  signSplice.forEach((item: any, index: number) => {
    if (index === 0) {
      item = item.split(' ');
      dealUrl += '&X-Amz-Algorithm=' + item[0];
      item = item[1];
    }
    const spliceItem = item.split('=');
    dealUrl += '&X-Amz-' + spliceItem[0].trim() + '=' + encodeURIComponent(spliceItem[1]);
  });
  return dealUrl;
};

/**获取签名请求*
 * pluginId: 当前插件ID instanceSetting中可获取
 * ServiceConfig: 各个请求对应的获取签名请求配置
 * reqParams: 具体请求接口
 * timestamp: 时间戳，与请求接口header时间获取一致
 */
export const getSign = async (
  pluginId: number,
  proxyKey: string,
  { action = '', version = '', extenQuery = '', region = 'cn-beijing-6', method = 'GET', postParams = {} },
  timestamp: number
) => {
  const proxyConfig: any = ServiceMap.get(proxyKey);
  const { host, servicename } = proxyConfig || {};
  const signResult = await __backendSrv.datasourceRequest({
    url: `/api/datasources/${pluginId}/resources/sign_v3`,
    method: 'post',
    data: {
      Action: action,
      Version: version,
      Body: method === 'POST' ? JSON.stringify(postParams) : '',
      Query: `Action=${action}&Version=${version}${extenQuery ? `&${extenQuery}` : ''}`,
      Region: region ? replaceRealValue(region) : 'cn-beijing-6',
      Service: `${servicename}`,
      Timestamp: timestamp,
      Uri: '/',
      Host: host,
      Method: method,
      Headers: {
        'content-type': 'application/json',
        // host: host,
      },
    },
  });
  return signResult || undefined;
};

/**
 * 请求接口
 * url: 请求接口url Action & Version
 * pluginId: 插件ID， 从instance Setting获取
 * namespace: 当前services 签名接口需要相关配置
 */
export const request = async (instanceSetting: any, proxyKey: string, queryParams: any) => {
  const { id: pluginId, url } = instanceSetting;
  const { action, version, extenQuery, region, method = 'GET', postParams = undefined } = queryParams;
  const utcTime = moment().utc();
  const timestamp = utcTime.unix();
  // 获取签名
  const sign = await getSign(
    pluginId,
    proxyKey,
    { action, version, region, extenQuery, method, postParams },
    timestamp
  );
  let serviceKey = proxyKey;
  if (sign.data.intranet) {
    serviceKey += 'internal-' + serviceKey;
  }
  // https://api*****/proxy/30/kec/path/?Action****
  const dealUrl = `${url}/${serviceKey}?Action=${action}&Version=${version}${extenQuery ? `${extenQuery}` : ''}`;
  console.log('test dealUrl', dealUrl);
  const time = utcTime.format();
  const dealTime = time.replaceAll(':', '').replaceAll('-', '');
  const reqOptions = {
    url: dealUrl,
    method,
    headers: {
      'Content-Type': 'application/json',
      'X-Amz-Date': dealTime,
      Authorization: sign.data.authorization,
      Accept: 'application/json',
    },
  };
  if (postParams) {
    _.set(reqOptions, 'data', postParams);
  }
  return new Promise((resolve, reject) => {
    __backendSrv
      .datasourceRequest(reqOptions)
      .then((res: any) => resolve(res))
      .catch((err: any) => {
        resolve(err);
      });
  });
};

export const getSignKs3 = async (pluginId: number, proxyKey: string, { extenQuery = '' }, timestamp: number) => {
  const signResult = await __backendSrv.datasourceRequest({
    url: `/api/datasources/${pluginId}/resources/sign_ks3`,
    method: 'post',
    data: {
      Action: '',
      Version: '',
      Region: 'BEIJING',
      Host: `ks3-cn-beijing.ksyuncs.com`,
      Method: 'GET',
      Query: extenQuery ? extenQuery : '',
      Headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      Timestamp: timestamp,
      Service: 'ks3',
      Uri: '/',
    },
  });
  return signResult || undefined;
};

export const requestKs3 = async (instanceSetting: any, proxyKey: string, queryParams: any) => {
  const { id: pluginId, url } = instanceSetting;
  const { extenQuery, region } = queryParams;
  const utcTime = moment().utc();
  const time = utcTime.format();
  const dealTime = time.replaceAll(':', '').replaceAll('-', '');
  // 获取签名
  const sign = await getSignKs3(pluginId, proxyKey, { extenQuery }, utcTime.unix());
  let serviceKey = 'ks3/cn-beijing';
  if (sign.data.intranet) {
    serviceKey += '-internal';
  }
  const dealUrl = `${url}/${serviceKey}?${extenQuery ? `${extenQuery}` : ''}`;
  const reqOptions = {
    url: dealUrl,
    method: 'GET',
    headers: {
      'X-Kss-Date': dealTime,
      Authorization: sign.data.authorization,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  return new Promise((resolve, reject) => {
    __backendSrv
      .datasourceRequest(reqOptions)
      .then((res: any) => {
        const ks3Res = GenerateKs3BusketOptions(res?.data, region);
        resolve(ks3Res);
      })
      .catch((err: any) => {
        resolve(err);
      });
  });
};
