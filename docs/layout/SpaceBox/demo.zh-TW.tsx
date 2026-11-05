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
import { ProForm, ProFormRadio, ProFormSwitch } from '@ant-design/pro-components';
import { SpaceBox, type AxisOrientationType } from '@jiovan-labs/ant-buddy-pro';


export default () => {
    const [boundBorder, setBoundBorder] = React.useState<boolean>(true);
    const [widthBlock, setWidthBlock] = React.useState<boolean>(true);
    const [layout, setLayout] = React.useState<AxisOrientationType>('horizontal');

    return (
        <>
            <ProForm
                name='SpaceBox_demo.zh-TW'
                layout='horizontal'
                autoFocusFirstInput={false}
                submitter={false}
            >
                <ProForm.Group>
                    <ProFormSwitch
                        label='外邊框'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: boundBorder,
                            onChange: setBoundBorder,
                        }}
                    />
                    <ProFormSwitch
                        label='匹配寬度'
                        checkedChildren='是'
                        unCheckedChildren='否'
                        fieldProps={{
                            checked: widthBlock,
                            onChange: setWidthBlock,
                        }}
                    />
                </ProForm.Group>
                <ProFormRadio.Group
                    label='方向'
                    radioType='button'
                    fieldProps={{
                        value: layout,
                        buttonStyle: 'solid',
                        onChange: (event: any) => {
                            setLayout(event.target?.value);
                        }
                    }}
                    options={[
                        { label: '水平', value: 'horizontal' },
                        { label: '垂直', value: 'vertical' },
                    ]}
                />
            </ProForm>
            <Divider />
            <SpaceBox
                size='middle'
                orientation={layout}
                boundBorder={boundBorder}
                widthBlock={widthBlock}
            >
                <span>這是第一個子節點。</span>
                <span>這是第二個子節點。</span>
            </SpaceBox>
        </>
    );
}
