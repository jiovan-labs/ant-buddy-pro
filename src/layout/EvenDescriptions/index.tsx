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
import { Descriptions, type DescriptionsProps } from 'antd';
import { ProDescriptions, type ProDescriptionsProps } from '@ant-design/pro-components';
import { omit } from '@rc-component/util';
import classnames from 'classnames';
import { useFieldStyle } from './styles';


export type EvenDescriptionsProps = ProDescriptionsProps & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'abp-even-descriptions'
     */
    clazzPrefix?: string;

    /**
     * @description Whether to force the columns to keep their specified widths
     * @description.zh-CN 是否强制列保持指定的宽度
     * @description.zh-TW 是否強制列保持指定的寬度
     * @default true
     */
    fixed?: boolean;

    /**
     * @description Whether to use ProDescriptions instead of Antd Descriptions
     * @description.zh-CN 是否使用 ProDescriptions 控件
     * @description.zh-TW 是否使用 ProDescriptions 控件
     * @default true
     */
    proField?: boolean;

    /**
     * @description The items of the descriptions (used when proField is false)
     * @description.zh-CN 描述项数组（proField 为 false 时使用）
     * @description.zh-TW 描述項陣列（proField 為 false 時使用）
     */
    items?: DescriptionsProps['items'];
};


/**
 * Component for displaying a descriptions with fixed column widths
 *
 * @author David Hsing
 */
export const EvenDescriptions: React.FC<EvenDescriptionsProps> = (props?: EvenDescriptionsProps) => {
    const clazzPrefix = props?.clazzPrefix ?? 'abp-even-descriptions';

    // Initialize the default props
    const {
        fixed = true,
        proField = true,
    } = props ?? {};

    const fieldStyle = useFieldStyle(clazzPrefix);

    // 把自有类名与 hashId 挂到根元素，CSS 再通过 `&& .ant-descriptions-view > table` 覆盖列宽布局
    const entryClazz = classnames(clazzPrefix, fieldStyle.hashId, (!fixed ? undefined : `${clazzPrefix}-fixed`), props?.className);

    const selfProps = ['className', 'clazzPrefix', 'fixed', 'proField'] as const;

    if (proField) {
        const restProps = !props ? {} : omit(props, selfProps);
        return <ProDescriptions {...restProps} className={entryClazz} />;
    }

    // antd 模式下剔除 ProDescriptions 专有属性，避免透传到 DOM
    const proOnlyProps = ['params', 'onRequestError', 'request', 'columns', 'actionRef', 'loading', 'onLoadingChange', 'tooltip', 'formProps', 'editable', 'dataSource', 'onDataSourceChange', 'emptyText'] as const;
    const restProps = !props ? {} : omit(props, [...selfProps, 'styles', ...proOnlyProps]);

    // 与 ProDescriptions 对齐：为 content 注入 minWidth=0，否则固定布局下设定宽度的内容无法收缩
    const styles = props?.styles;
    const mergedStyles = (typeof styles === 'function') ? styles : { ...styles, content: { minWidth: 0, ...styles?.content } };
    return <Descriptions {...restProps} styles={mergedStyles} className={entryClazz} />;
};
