/*
 * Copyright (c) 2025 Jiovan Ltd. All rights reserved.
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
import { Divider, Typography } from 'antd';
import { ProForm, ProFormRadio, ProFormSwitch } from '@ant-design/pro-components';
import { EvenDescriptions, type AxisOrientationType } from '@jiovan-labs/ant-buddy-pro';


const longText = '这是一段很长的内容，用于演示在固定列宽模式下，内容不会挤压相邻的空列，而是保持在自己列内。';


export default () => {
    const [fixed, setFixed] = React.useState<boolean>(true);
    const [proField, setProField] = React.useState<boolean>(true);
    const [layout, setLayout] = React.useState<AxisOrientationType>('vertical');

    const dataSource = { long: longText, empty: '' };
    const columns = [
        { title: '长内容', dataIndex: 'long' },
        { title: '空内容', dataIndex: 'empty' },
    ];
    const items = [
        { label: '长内容', children: dataSource.long },
        { label: '空内容', children: dataSource.empty },
    ];

    return (
        <>
            <ProForm
                name='EvenDescriptions_demo.zh-CN'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProForm.Group>
                    <ProFormSwitch
                        label='固定列宽'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{ checked: fixed, onChange: setFixed }}
                    />
                    <ProFormSwitch
                        label='ProField'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{ checked: proField, onChange: setProField }}
                    />
                </ProForm.Group>
                <ProForm.Group>
                    <ProFormRadio.Group
                        label='布局'
                        radioType='button'
                        fieldProps={{
                            value: layout,
                            buttonStyle: 'solid',
                            onChange: (event: any) => setLayout(event.target?.value),
                        }}
                        options={[
                            { label: '水平', value: 'horizontal' },
                            { label: '垂直', value: 'vertical' },
                        ]}
                    />
                </ProForm.Group>
            </ProForm>
            <Divider />
            <Typography.Paragraph type='secondary'>
                两行各占一列。开启固定列宽时，两列均分宽度，长内容不会挤压空列；关闭后长内容会撑开并挤占空列。
            </Typography.Paragraph>
            <EvenDescriptions
                fixed={fixed}
                proField={proField}
                layout={layout}
                bordered={true}
                column={2}
                dataSource={dataSource}
                columns={columns}
                items={items}
            />
        </>
    );
}
