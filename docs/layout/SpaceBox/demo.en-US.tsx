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
                name='SpaceBox_demo.en-US'
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
                        label='Width Block'
                        checkedChildren='True'
                        unCheckedChildren='False'
                        fieldProps={{
                            checked: widthBlock,
                            onChange: setWidthBlock,
                        }}
                    />
                </ProForm.Group>
                <ProFormRadio.Group
                    label='Orientation'
                    radioType='button'
                    fieldProps={{
                        value: layout,
                        buttonStyle: 'solid',
                        onChange: (event: any) => {
                            setLayout(event.target?.value);
                        }
                    }}
                    options={[
                        { label: 'Horizontal', value: 'horizontal' },
                        { label: 'Vertical', value: 'vertical' },
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
                <span>Here is the first child content.</span>
                <span>Here is the second child content.</span>
            </SpaceBox>
        </>
    );
}
