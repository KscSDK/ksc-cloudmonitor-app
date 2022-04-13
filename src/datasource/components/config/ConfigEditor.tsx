import React, { ChangeEvent, useState, FC } from 'react';
import { LegacyForms, InlineSwitch, InlineField } from '@grafana/ui';
import { DataSourcePluginOptionsEditorProps } from '@grafana/data';
import { MyDataSourceOptions, MySecureJsonData } from '../../types';
import { MonitorServices } from '../../type_monitors';
import { cloneDeep, debounce } from 'lodash';

const { SecretFormField, FormField } = LegacyForms;

interface Props extends DataSourcePluginOptionsEditorProps<MyDataSourceOptions, MySecureJsonData> {}

const ConfigEditor: FC<Props> = ({ onOptionsChange, options }) => {
  const { jsonData, secureJsonFields, secureJsonData } = options;
  const [filterList, setFilterList] = useState(MonitorServices);

  const onAccessKeyChange = (event: ChangeEvent<HTMLInputElement>) => {
    const jsonData = {
      ...options.jsonData,
      AccessKey: event.target.value,
    };
    onOptionsChange({ ...options, jsonData });
  };

  // Secure field (only sent to the backend)
  const onAPIKeyChange = (event: ChangeEvent<HTMLInputElement>) => {
    onOptionsChange({
      ...options,
      secureJsonData: {
        ...options.secureJsonData,
        secretKey: event.target.value,
      },
    });
  };

  // 是否私网方式 internal取值方式
  const onIntranetChange = (event: ChangeEvent<HTMLInputElement>) => {
    const jsonData = {
      ...options.jsonData,
      intranet: event.target.checked,
    };
    onOptionsChange({ ...options, jsonData });
  };

  const onResetAPIKey = () => {
    onOptionsChange({
      ...options,
      secureJsonFields: {
        ...options.secureJsonFields,
        secretKey: false,
      },
      secureJsonData: {
        ...options.secureJsonData,
        secretKey: '',
      },
    });
  };

  const filterServiceList = (event: ChangeEvent<HTMLInputElement>) => {
    const filterName = event.target.value;
    const filterResult = MonitorServices.filter((i) => i.label.includes(filterName));
    setFilterList(filterResult);
  };
  // 全选 & 反选
  const allCheckedChange = (checked: boolean) => {
    // 存储选中项
    const filterServices = new Map(Object.entries(options.jsonData?.service || {}));
    if (checked) {
      MonitorServices.forEach((item) => {
        filterServices.set(item.namespace, checked);
      });
    } else {
      filterServices.clear();
    }
    const result = cloneDeep(filterServices);
    const filterObj = Object.fromEntries(result.entries());
    const jsonData = {
      ...options.jsonData,
      service: filterObj,
      allChecked: checked,
    };
    onOptionsChange({ ...options, jsonData });
  };

  // 单个services选中状态修改
  const onServiceCheckedChange = (service: string, checked: boolean) => {
    let filterServices = new Map(Object.entries(options.jsonData?.service || {}));
    if (!filterServices || !filterServices?.size) {
      filterServices = new Map();
    }
    if (checked) {
      filterServices.set(service, true);
    } else {
      filterServices.delete(service);
    }
    const result = cloneDeep(filterServices);
    const filterObj = Object.fromEntries(result.entries());
    const jsonData = {
      ...options.jsonData,
      service: filterObj,
      allChecked: filterServices.size === MonitorServices.length ? true : false,
    };
    onOptionsChange({ ...options, jsonData });
  };

  return (
    <div className="gf-form-group">
      <div className="gf-form">
        <FormField
          label="AccessKey"
          labelWidth={8}
          inputWidth={20}
          onChange={onAccessKeyChange}
          value={jsonData.AccessKey || ''}
          placeholder="json field returned to frontend"
        />
      </div>

      <div className="gf-form-inline">
        <div className="gf-form">
          <SecretFormField
            isConfigured={(secureJsonFields && secureJsonFields.secretKey) as boolean}
            value={secureJsonData?.secretKey || ''}
            label="SecretAccessKey"
            placeholder="secure json field (backend only)"
            labelWidth={8}
            inputWidth={20}
            onReset={onResetAPIKey}
            onChange={onAPIKeyChange}
          />
        </div>
      </div>
      <InlineField label="开启内网API模式" labelWidth={20}>
        <InlineSwitch value={jsonData.intranet} onChange={onIntranetChange} />
      </InlineField>
      <h3 style={{ marginTop: '32px' }} className="page-heading">
        Monitor Services
      </h3>
      <div className="gf-form">
        <input
          className="gf-form-input width-20"
          type="search"
          onChange={debounce(filterServiceList, 1000)}
          placeholder="Input keyword to filter..."
        />
        <label className="gf-form-label query-keyword">Select All</label>
        <InlineSwitch
          value={jsonData?.allChecked}
          onChange={(v: { target: any }) => allCheckedChange(v.target.checked)}
        />
      </div>
      {Array.isArray(filterList) &&
        filterList.map((item, index) => (
          <div className="gf-form" key={index + item.namespace}>
            <span className="gf-form-label width-20">
              <a target="_blank" href={item.href} rel="noreferrer">
                <span>{item?.label}</span>
              </a>
            </span>
            <InlineSwitch
              value={jsonData?.service && jsonData?.service[item.namespace] ? true : false}
              onChange={(v: { target: any }) => onServiceCheckedChange(item.namespace, v.target.checked)}
            />
          </div>
        ))}
    </div>
  );
};

export default ConfigEditor;
