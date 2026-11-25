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
import { Form, Input, Space, type InputProps, type InputRef } from 'antd';
import { ProForm, FormListContext, type ProFormFieldItemProps } from '@ant-design/pro-components';
import { EditOrReadOnlyContext } from '@ant-design/pro-components/es/form/BaseForm/EditOrReadOnlyContext.js';
import { ObjectUtils, StringUtils } from '@jiovan-labs/ts-lang-utils';
import { omit } from '@rc-component/util';
import classnames from 'classnames';
import { PropUtils } from '@/util/PropUtils';
import { useFieldStyle } from './styles';


export type AddonInputProps = Omit<ProFormFieldItemProps<InputProps, InputRef>, 'children'> & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'abp-addon-input'
     */
    clazzPrefix?: string;

    /**
     * @description The content before the input field
     * @description.zh-CN 输入框前的内容
     * @description.zh-TW 輸入框前的內容
     */
    addonBefore?: React.ReactNode | (() => React.ReactNode | undefined);

    /**
     * @description The content after the input field
     * @description.zh-CN 输入框后的内容
     * @description.zh-TW 輸入框後的內容
     */
    addonAfter?: React.ReactNode | (() => React.ReactNode | undefined);

    /**
     * @description The cursor before the input field
     * @description.zh-CN 输入框前的内容的鼠标指针
     * @description.zh-TW 輸入框前的內容的鼠標指針
     * @default 'default'
     */
    cursorBefore?: string;

    /**
     * @description The cursor after the input field
     * @description.zh-CN 输入框后的内容的鼠标指针
     * @description.zh-TW 輸入框後的內容的鼠標指針
     * @default 'default'
     */
    cursorAfter?: string;

    /**
     * @description The padding of the addon before
     * @description.zh-CN 输入框前的内容间距
     * @description.zh-TW 輸入框前的內容間距
     */
    paddingBefore?: number;

    /**
     * @description The padding of the addon after
     * @description.zh-CN 输入框后的内容间距
     * @description.zh-TW 輸入框後的內容間距
     */
    paddingAfter?: number;

    /**
     * @description Whether to match the width of parent element or not
     * @description.zh-CN 是否匹配父节点的宽度
     * @description.zh-TW 是否匹配父節點的寬度
     */
    widthBlock?: boolean;

    /**
     * @description Whether to use ProFormField instead of Antd
     * @description.zh-CN 是否使用 ProFormField 控件
     * @description.zh-TW 是否使用 ProFormField 控件
     * @default true
     */
    proField?: boolean;
};


/**
 * Component for displaying a text input box with addon before/after which aiming to action like the early version of Input
 *
 * @author David Hsing
 */
export const AddonInput: React.FC<AddonInputProps> = (props?: AddonInputProps) => {
    const form = Form.useFormInstance();
    const formListContext = React.useContext(FormListContext);
    const editContext = React.useContext(EditOrReadOnlyContext);
    const clazzPrefix = props?.clazzPrefix ?? 'abp-addon-input';

    // Initialize the default props
    const {
        cursorBefore = 'default',
        cursorAfter = 'default',
        widthBlock = true,
        proField = true,
    } = props ?? {};

    const fieldStyle = useFieldStyle(clazzPrefix);
    const compositionRef = React.useRef<boolean>(false);
    const [composingValue, setComposingValue] = React.useState<string | undefined>(undefined);
    const webkitBrowser = navigator.userAgent.indexOf('WebKit') !== -1;

    const addonBeforeDom = (typeof props?.addonBefore === 'function') ? props.addonBefore() : props?.addonBefore;
    const addonAfterDom = (typeof props?.addonAfter === 'function') ? props.addonAfter() : props?.addonAfter;
    const addonBeforeStyle = {
        cursor: cursorBefore,
        paddingInline: ObjectUtils.isNil(props?.paddingBefore) ? undefined : props?.paddingBefore,
    };
    const addonAfterStyle = {
        cursor: cursorAfter,
        paddingInline: ObjectUtils.isNil(props?.paddingAfter) ? undefined : props?.paddingAfter,
    };

    const simpleName = props?.name ?? props?.fieldProps?.name;
    const fieldName = !simpleName ? undefined : (formListContext?.listName ? [...formListContext.listName, simpleName] : simpleName);
    // 注意：useWatch 必须无条件调用（hooks 数量恒定），未绑定表单时使用内部实例与占位字段名，其返回值被忽略
    const [fallbackForm] = Form.useForm();
    const watchedValue = Form.useWatch(fieldName ?? '__abp_watch_placeholder__', form ?? fallbackForm);
    const fieldValue = !simpleName ? props?.fieldProps?.value : watchedValue;
    const inputWidth = !widthBlock ? undefined : (PropUtils.calculateWidth(props?.width ?? (typeof props?.fieldProps?.style?.width === 'string' ? props.fieldProps.style.width : undefined)));

    const entryReadMode = editContext.mode === 'read' || props?.proFieldProps?.mode === 'read';
    const entryReadonly = props?.fieldProps?.readOnly || props?.proFieldProps?.readonly;
    const entryDisabled = props?.disabled || props?.fieldProps?.disabled;
    const entryImmutable = entryReadMode || entryReadonly || entryDisabled;
    const proFieldClazz = !proField ? undefined : `${clazzPrefix}-pro-field`;
    const widthBlockClazz = !widthBlock ? undefined : `${clazzPrefix}-width-block`;
    const entryReadModeClazz = !entryReadMode ? undefined : `${clazzPrefix}-read-mode`;
    const entryImmutableClazz = !entryImmutable ? undefined : `${clazzPrefix}-immutable`;
    const omitFieldProps = !props?.fieldProps ? {} : omit(props?.fieldProps, ['className', 'name', 'id', 'placeholder', 'allowClear', 'readOnly', 'disabled', 'value', 'onChange', 'onCompositionStart', 'onCompositionEnd']);

    // IME 组合输入期间不写回表单，避免中文拼音的中间态覆盖输入框导致无法正常上屏
    const setFieldValue = (value: string) => {
        if (simpleName) {
            form?.setFieldValue(simpleName, value);
        }
    };

    const handleChange = (event: any) => {
        if (compositionRef.current) {
            // IME 组合期间用本地 state 承接输入，避免受控 value 回灌覆盖拼音
            setComposingValue(event.target.value);
            return;
        }
        // 无表单绑定时 Input 默认非受控，用本地 state 持续维护值，避免受控/非受控切换重置 DOM
        if (!simpleName) {
            setComposingValue(event.target.value);
        }
        setFieldValue(event.target.value);
        props?.fieldProps?.onChange?.(event);
    };

    const handleCompositionStart = (event: React.CompositionEvent<HTMLInputElement>) => {
        compositionRef.current = true;
        props?.fieldProps?.onCompositionStart?.(event);
    };

    const handleCompositionEnd = (event: React.CompositionEvent<HTMLInputElement>) => {
        compositionRef.current = false;
        props?.fieldProps?.onCompositionEnd?.(event);
        const finalValue = event.currentTarget.value;
        // 有表单绑定时回退到 form 值；无绑定时保留本地值，避免切回非受控导致中文被清空
        setComposingValue(simpleName ? undefined : finalValue);
        // WebKit（Chrome）的 compositionEnd 晚于最后一次 onChange，需补写最终值
        if (webkitBrowser) {
            setFieldValue(finalValue);
        }
    };

    if (proField) {
        const restProps = !props ? {} : omit(props, ['className', 'name', 'allowClear', 'fieldProps', 'proFieldProps', 'clazzPrefix', 'addonBefore', 'addonAfter', 'cursorBefore', 'cursorAfter', 'paddingBefore', 'paddingAfter', 'widthBlock', 'proField']);
        return (
            <div className={classnames(clazzPrefix, fieldStyle.hashId, proFieldClazz, widthBlockClazz, entryReadModeClazz, entryImmutableClazz)}>
                <ProForm.Item name={simpleName} {...restProps}>
                    <Space.Compact className={`${clazzPrefix}-space`} style={{ width: '100%' }}>
                        {!!addonBeforeDom && (
                            <Space.Addon className={`${clazzPrefix}-compact-before`} style={addonBeforeStyle}>
                                {addonBeforeDom}
                            </Space.Addon>
                        )}
                        <Input
                            className={classnames (`${clazzPrefix}-input`, props?.fieldProps?.className)}
                            placeholder={StringUtils.join(props?.placeholder) ?? props?.fieldProps?.placeholder}
                            name={simpleName}
                            value={composingValue ?? (entryReadMode ? (fieldValue || props?.proFieldProps?.emptyText || '-') :fieldValue)}
                            allowClear={!entryImmutable && props?.allowClear !== false && props?.fieldProps?.allowClear !== false}
                            readOnly={entryReadMode || entryReadonly}
                            disabled={entryDisabled}
                            style={!inputWidth ? undefined : { width: inputWidth }}
                            onChange={handleChange}
                            onCompositionStart={handleCompositionStart}
                            onCompositionEnd={handleCompositionEnd}
                            {...omitFieldProps}
                        />
                        {!!addonAfterDom && (
                            <Space.Addon className={`${clazzPrefix}-compact-after`} style={addonAfterStyle}>
                                {addonAfterDom}
                            </Space.Addon>
                        )}
                    </Space.Compact>
                </ProForm.Item>
            </div>
        );
    } else {
        return (
            <div className={classnames(clazzPrefix, fieldStyle.hashId, proFieldClazz, widthBlockClazz, entryReadModeClazz, entryImmutableClazz, props?.className ?? props?.fieldProps?.className)}>
                <Space.Compact className={`${clazzPrefix}-space`} style={{ width: '100%' }}>
                    {!!addonBeforeDom && (
                        <Space.Addon className={`${clazzPrefix}-compact-before`} style={addonBeforeStyle}>
                            {addonBeforeDom}
                        </Space.Addon>
                    )}
                    <Input
                        className={classnames (`${clazzPrefix}-input`, props?.fieldProps?.className)}
                        name={simpleName}
                        placeholder={StringUtils.join(props?.placeholder) ?? props?.fieldProps?.placeholder}
                        value={composingValue ?? (entryReadMode ? (fieldValue || props?.proFieldProps?.emptyText || '-') :fieldValue)}
                        readOnly={entryReadMode || entryReadonly}
                        disabled={entryDisabled}
                        style={!inputWidth ? undefined : { width: inputWidth }}
                        onChange={handleChange}
                        onCompositionStart={handleCompositionStart}
                        onCompositionEnd={handleCompositionEnd}
                        {...omitFieldProps}
                    />
                    {!!addonAfterDom && (
                        <Space.Addon className={`${clazzPrefix}-compact-after`} style={addonAfterStyle}>
                            {addonAfterDom}
                        </Space.Addon>
                    )}
                </Space.Compact>
            </div>
        );
    }
};
