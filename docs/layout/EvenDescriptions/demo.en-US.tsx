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


const longText = 'This is a long piece of text used to demonstrate that, with fixed columns, content does not squeeze the adjacent empty column but stays within its own column.';


export default () => {
    const [fixed, setFixed] = React.useState<boolean>(true);
    const [proField, setProField] = React.useState<boolean>(true);
    const [layout, setLayout] = React.useState<AxisOrientationType>('vertical');

    const dataSource = { long: longText, empty: '' };
    const columns = [
        { title: 'Long content', dataIndex: 'long' },
        { title: 'Empty content', dataIndex: 'empty' },
    ];
    const items = [
        { label: 'Long content', children: dataSource.long },
        { label: 'Empty content', children: dataSource.empty },
    ];

    return (
        <>
            <ProForm
                name='EvenDescriptions_demo.en-US'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProForm.Group>
                    <ProFormSwitch
                        label='Fixed columns'
                        checkedChildren='Yes'
                        unCheckedChildren='No'
                        fieldProps={{ checked: fixed, onChange: setFixed }}
                    />
                    <ProFormSwitch
                        label='ProField'
                        checkedChildren='Yes'
                        unCheckedChildren='No'
                        fieldProps={{ checked: proField, onChange: setProField }}
                    />
                </ProForm.Group>
                <ProForm.Group>
                    <ProFormRadio.Group
                        label='Layout'
                        radioType='button'
                        fieldProps={{
                            value: layout,
                            buttonStyle: 'solid',
                            onChange: (event: any) => setLayout(event.target?.value),
                        }}
                        options={[
                            { label: 'Horizontal', value: 'horizontal' },
                            { label: 'Vertical', value: 'vertical' },
                        ]}
                    />
                </ProForm.Group>
            </ProForm>
            <Divider />
            <Typography.Paragraph type='secondary'>
                The two rows each take one column. With fixed columns on, both columns share the width evenly and the long content does not squeeze the empty one; turn it off and the long content expands into the empty column.
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
