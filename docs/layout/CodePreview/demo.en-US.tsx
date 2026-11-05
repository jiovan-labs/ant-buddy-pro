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
import { Divider } from 'antd';
import { ProForm, ProFormSelect, ProFormSwitch } from '@ant-design/pro-components';
import { CodePreview, type PaddingSpaceType } from '@jiovan-labs/ant-buddy-pro';


export default () => {
    const [boundBorder, setBoundBorder] = React.useState<boolean>(true);
    const [boundShadow, setBoundShadow] = React.useState<boolean>(false);
    const [presetStyle, setPresetStyle] = React.useState<PaddingSpaceType | false>('padding-md');

    // noinspection DuplicatedCode
    return (
        <>
            <ProForm
                name='CodePreview_demo.en-US'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProForm.Group>
                    <ProFormSwitch
                        label='Bound Border'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: boundBorder,
                            onChange: setBoundBorder,
                        }}
                    />
                    <ProFormSwitch
                        label='Bound Shadow'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: boundShadow,
                            onChange: setBoundShadow,
                        }}
                    />
                </ProForm.Group>
                <ProFormSelect
                    label='Preset Style'
                    placeholder='Preset Style'
                    width='md'
                    fieldProps={{
                        allowClear: true,
                        value: presetStyle,
                        options: [
                            { label: 'padding-0', value: 'padding-0' },
                            { label: 'padding-xxs', value: 'padding-xxs' },
                            { label: 'padding-xs', value: 'padding-xs' },
                            { label: 'padding-sm', value: 'padding-sm' },
                            { label: 'padding-md', value: 'padding-md' },
                            { label: 'padding-lg', value: 'padding-lg' },
                            { label: 'False', value: undefined },
                        ],
                        onChange: (value) => {
                            setPresetStyle(value);
                        }
                    }}
                />
            </ProForm>
            <Divider />
            <CodePreview
                titleContent='How to install this package?'
                textContent='npm install @jiovan-labs/ant-buddy-pro -S'
                titleProps={{
                    level: 5,
                }}
                textProps={{
                    copyable: true,
                }}
                boundBorder={boundBorder}
                boundShadow={boundShadow}
                presetStyle={presetStyle}
            />
        </>
    );
}
