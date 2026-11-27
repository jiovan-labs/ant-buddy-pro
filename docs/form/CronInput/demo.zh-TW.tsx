/*
 * Copyright (c) 2023 Jiovan Ltd. All rights reserved.
 *
 * Licensed under the MIT License (the "License")
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 */


import React from 'react';
import { Button, Divider, message as messageApi } from 'antd';
import { ProForm, ProFormRadio, ProFormRef, ProFormSwitch } from '@ant-design/pro-components';
import { CronInput, ConsoleUtils } from '@jiovan-labs/ant-buddy-pro';


export default () => {
    // noinspection DuplicatedCode
    const [messageInvoker, messageContext] = messageApi.useMessage();
    const [tabPos, setTabPos] = React.useState<'top' | 'bottom'>('top');
    const [showSecond, setShowSecond] = React.useState(false);
    const [showYear, setShowYear] = React.useState(false);
    const [showBlank, setShowBlank] = React.useState(true);
    const [monthAlias, setMonthAlias] = React.useState(false);
    const [weekAlias, setWeekAlias] = React.useState(true);
    const [allowOkEcho, setAllowOkEcho] = React.useState(true);
    const [proField, setProField] = React.useState<boolean>(true);
    const [readonly, setReadonly] = React.useState<boolean>(false);
    const testFormRef = React.useRef<ProFormRef<any> | undefined>(undefined);

    return (
        <>
            {messageContext}
            <ProForm
                name='CronInput_demo.zh-TW'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProFormRadio.Group
                    label='Tab 位置'
                    radioType='button'
                    fieldProps={{
                        value: tabPos,
                        buttonStyle: 'solid',
                        onChange: (event: any) => {
                            setTabPos(event.target?.value);
                        }
                    }}
                    options={[
                        { label: '上', value: 'top' },
                        { label: '下', value: 'bottom' },
                    ]}
                />
                <ProForm.Group>
                    <ProFormSwitch
                        label='顯示秒'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: showSecond,
                            onChange: setShowSecond,
                        }}
                    />
                    <ProFormSwitch
                        label='顯示年'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: showYear,
                            onChange: setShowYear,
                        }}
                    />
                    <ProFormSwitch
                        label='允許不指定'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: showBlank,
                            onChange: setShowBlank,
                        }}
                    />
                </ProForm.Group>

                <ProForm.Group>
                    <ProFormSwitch
                        label='月別名'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: monthAlias,
                            onChange: setMonthAlias,
                        }}
                    />
                    <ProFormSwitch
                        label='周別名'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: weekAlias,
                            onChange: setWeekAlias,
                        }}
                    />
                </ProForm.Group>

                <ProForm.Group>
                    <ProFormSwitch
                        label='允許確認回顯'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: allowOkEcho,
                            onChange: setAllowOkEcho,
                        }}
                    />
                    <ProFormSwitch
                        label='使用 ProField'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: proField,
                            onChange: setProField,
                        }}
                    />
                    <ProFormSwitch
                        label='只讀模式'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: readonly,
                            onChange: setReadonly,
                        }}
                    />
                </ProForm.Group>
                <ProForm.Group>
                    <Button
                        style={{ marginTop: 6 }}
                        onClick={() => {
                            testFormRef.current?.setFieldsValue({
                                foobar: '10,20 2-4 8,20 3-5/2 1-5',
                            });
                        }}
                    >
                        手動設值
                    </Button>
                </ProForm.Group>
            </ProForm>
            <Divider />
            <ProForm
                name='CronInput_demo.zh-TW.Test'
                layout='vertical'
                autoFocusFirstInput={false}
                readonly={readonly}
                formRef={testFormRef}
                submitter={{
                    searchConfig: {
                        submitText: '提交',
                        resetText: '重置',
                    }
                }}
                onFinish={async (values) => {
                    ConsoleUtils.logTimestamp(false, false, 'CronInput', values, '提交的數據');
                    messageInvoker.success('您點擊了提交按鈕').then(() => {});
                }}
            >
                <CronInput
                    name='foobar'
                    label='示例字段'
                    placeholder='請輸入此項'
                    showSecond={showSecond}
                    showYear={showYear}
                    showBlank={showBlank}
                    monthAlias={monthAlias}
                    weekAlias={weekAlias}
                    allowOkEcho={allowOkEcho}
                    tabsProps={{
                        tabPlacement: tabPos,
                    }}
                    rules={[
                        {
                            required: true,
                            message: '請輸入示例字段',
                        },
                    ]}
                    locale='zh_TW'
                    proField={proField}
                />
            </ProForm>
        </>
    );
}
