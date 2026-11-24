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


const longText = '這是一段很長的內容，用於示範在固定列寬模式下，內容不會擠壓相鄰的空列，而是保持在自己列內。';


export default () => {
    const [fixed, setFixed] = React.useState<boolean>(true);
    const [proField, setProField] = React.useState<boolean>(true);
    const [layout, setLayout] = React.useState<AxisOrientationType>('vertical');

    const dataSource = { long: longText, empty: '' };
    const columns = [
        { title: '長內容', dataIndex: 'long' },
        { title: '空內容', dataIndex: 'empty' },
    ];
    const items = [
        { label: '長內容', children: dataSource.long },
        { label: '空內容', children: dataSource.empty },
    ];

    return (
        <>
            <ProForm
                name='EvenDescriptions_demo.zh-TW'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProForm.Group>
                    <ProFormSwitch
                        label='固定列寬'
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
                        label='佈局'
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
                兩列各佔一列。開啟固定列寬時，兩列均分寬度，長內容不會擠壓空列；關閉後長內容會撐開並擠佔空列。
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
