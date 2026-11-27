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
                name='CronInput_demo.en-US'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProFormRadio.Group
                    label='Tab Position'
                    radioType='button'
                    fieldProps={{
                        value: tabPos,
                        buttonStyle: 'solid',
                        onChange: (event: any) => {
                            setTabPos(event.target?.value);
                        }
                    }}
                    options={[
                        { label: 'Top', value: 'top' },
                        { label: 'Bottom', value: 'bottom' },
                    ]}
                />
                <ProForm.Group>
                    <ProFormSwitch
                        label='Show Second'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: showSecond,
                            onChange: setShowSecond,
                        }}
                    />
                    <ProFormSwitch
                        label='Show Year'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: showYear,
                            onChange: setShowYear,
                        }}
                    />
                    <ProFormSwitch
                        label='Allow Blank'
                        checkedChildren='Yes'
                        unCheckedChildren='No'
                        fieldProps={{
                            checked: showBlank,
                            onChange: setShowBlank,
                        }}
                    />
                </ProForm.Group>

                <ProForm.Group>
                    <ProFormSwitch
                        label='Month Alias'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: monthAlias,
                            onChange: setMonthAlias,
                        }}
                    />
                    <ProFormSwitch
                        label='Week Alias'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: weekAlias,
                            onChange: setWeekAlias,
                        }}
                    />
                </ProForm.Group>

                <ProForm.Group>
                    <ProFormSwitch
                        label='Allow Ok Echo'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: allowOkEcho,
                            onChange: setAllowOkEcho,
                        }}
                    />
                    <ProFormSwitch
                        label='Use ProField'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: proField,
                            onChange: setProField,
                        }}
                    />
                    <ProFormSwitch
                        label='Read-only Mode'
                        checkedChildren='True'
                        unCheckedChildren='False'
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
                        Set Value
                    </Button>
                </ProForm.Group>
            </ProForm>
            <Divider />
            <ProForm
                name='CronInput_demo.en-US.Test'
                layout='vertical'
                autoFocusFirstInput={false}
                readonly={readonly}
                formRef={testFormRef}
                submitter={{
                    searchConfig: {
                        submitText: 'Submit',
                        resetText: 'Reset',
                    }
                }}
                onFinish={async (values) => {
                    ConsoleUtils.logTimestamp(false, false, 'CronInput', values, 'Submitted data');
                    messageInvoker.success(`Yep, you've clicked the submit button`).then(() => {});
                }}
            >
                <CronInput
                    name='foobar'
                    label='Demo field'
                    placeholder='Please input this field'
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
                            message: 'Please input demo field',
                        },
                    ]}
                    locale='en_US'
                    proField={proField}
                />
            </ProForm>
        </>
    );
}
