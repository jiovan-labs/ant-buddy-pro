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
import { Form, type InputProps } from 'antd';
import { ProForm, FormListContext, type ProFormFieldItemProps, useIntl } from '@ant-design/pro-components';
import { EditOrReadOnlyContext } from '@ant-design/pro-components/es/form/BaseForm/EditOrReadOnlyContext.js';
import { NanoidUtils, ObjectUtils, StringUtils } from '@jiovan-labs/ts-lang-utils';
import { omit } from '@rc-component/util';
import classnames from 'classnames';
import 'mathlive';
import 'mathlive/fonts.css';
import { LocaleUtils } from '@/util/LocaleUtils';
import { PropUtils } from '@/util/PropUtils';
import { intlLocales, extraLocales } from './locales';
import { useFieldStyle } from './styles';


// MathLive 的语言包使用小写连字符形式（zh-cn / zh-tw / en），且只能静态全局设置
const MATH_LIVE_LOCALES: Record<string, string> = {
    en_US: 'en',
    zh_CN: 'zh-cn',
    zh_TW: 'zh-tw',
};

const buildMathLiveStrings = (projectLocale: string): Record<string, string> => {
    const result: Record<string, string> = {};
    extraLocales.forEach((value, keys) => {
        if (keys && keys[0] === projectLocale && value !== undefined) {
            result[keys[1]] = value;
        }
    });
    return result;
};

const MATH_LIVE_STRINGS: Record<string, Record<string, string>> = {
    'zh-cn': buildMathLiveStrings('zh_CN'),
    'zh-tw': buildMathLiveStrings('zh_TW'),
};

if (typeof window !== 'undefined' && (window as any).MathfieldElement) {
    (window as any).MathfieldElement.strings = MATH_LIVE_STRINGS;
}


type MathfieldOptions = {
    virtualKeyboardMode?: 'auto' | 'manual' | 'onfocus' | 'off';
    smartMode?: boolean;
    [key: string]: any;
};


export type IntlLocaleProps = {
    /**
     * @description Invalid Formula
     * @description.zh-CN 无效的数学公式
     * @description.zh-TW 無效的數學公式
     */
    invalidFormula?: string;
};


export type MathInputProps = Omit<ProFormFieldItemProps, 'children' | 'fieldRef' | 'fieldProps'> & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'abp-math-input'
     */
    clazzPrefix?: string;

    /**
     * @description The CSS class name of the container div
     * @description.zh-CN 容器 div 的 CSS 类名
     * @description.zh-TW 容器 div 的 CSS 類名
     */
    containerClazz?: string;

    /**
     * @description The CSS style of the container div
     * @description.zh-CN 容器 div 的 CSS 样式
     * @description.zh-TW 容器 div 的 CSS 樣式
     */
    containerStyle?: React.CSSProperties;

    /**
     * @description The options of the math field
     * @description.zh-CN Mathfield 的选项
     * @description.zh-TW Mathfield 的選項
     * @see "https://mathlive.io/mathfield/guides/customizing/#math-display-options"
     */
    mathOptions?: Partial<MathfieldOptions>;

    /**
     * @description Whether to use validate value by rules
     * @description.zh-CN 是否增加公式校验规则
     * @description.zh-TW 是否增加公式校驗規則
     */
    validation?: boolean;

    /**
     * @description The callback function when the value changed
     * @description.zh-CN 值更改后的回调函数
     * @description.zh-TW 值更改後的回調函數
     */
    onChange?: (value?: string) => void;

    /**
     * @description Whether to use ProFormField instead of Antd
     * @description.zh-CN 是否使用 ProFormField 控件
     * @description.zh-TW 是否使用 ProFormField 控件
     */
    proField?: boolean;

    /**
     * @description The locale of the component, e.g. 'en_US'
     * @description.zh-CN 组件的语言, e.g. 'zh_CN'
     * @description.zh-TW 組件的語言, e.g. 'zh_TW'
     */
    locale?: string;

    /**
     * @description The props of locale
     * @description.zh-CN 多语言属性
     * @description.zh-TW 多語言屬性
     */
    localeProps?: IntlLocaleProps;
} & Pick<InputProps, 'value'>;


/**
 * Component for displaying a text input-alike box with math capability
 *
 * @author David Hsing
 * @see "https://mathlive.io/mathfield/guides/customizing/"
 */
export const MathInput: React.FC<MathInputProps> = (props?: MathInputProps) => {
    const form = Form.useFormInstance();
    const formListContext = React.useContext(FormListContext);
    const editContext = React.useContext(EditOrReadOnlyContext);
    const clazzPrefix = props?.clazzPrefix ?? 'abp-math-input';
    const intlType = useIntl();

    // Initialize the default props
    const {
        mathOptions = {
            virtualKeyboardMode: 'auto',
            smartMode: true,
        },
        validation = true,
        proField = true,
        locale = intlType.locale,
    } = props ?? {};
    const languageTag = LocaleUtils.toLanguageTag(locale);

    const [fieldId] = React.useState<string>(NanoidUtils.getPopularId());
    const fieldName = !props?.name ? undefined : [...(formListContext?.listName ?? []), props.name];
    // 注意：useWatch 必须无条件调用（hooks 数量恒定），未绑定表单时使用内部实例与占位字段名，其返回值被忽略
    const [fallbackForm] = Form.useForm();
    const watchedValue = Form.useWatch(fieldName ?? '__abp_watch_placeholder__', form ?? fallbackForm);
    const fieldValue = !props?.name ? props?.value : watchedValue;
    const containerRef = React.useRef<HTMLDivElement>(null);
    const fieldRef = React.useRef<any>(null);
    const fieldStyle = useFieldStyle(clazzPrefix);

    const entryImmutable = editContext.mode === 'read' || props?.proFieldProps?.mode === 'read' || props?.proFieldProps?.readonly;

    const handleInputChange = React.useCallback(() => {
        if (!fieldRef.current) {
            return;
        }
        const value = fieldRef.current.value;
        if (fieldName) {
            form?.setFieldValue(fieldName, value);
        }
        props?.onChange?.(value);
    }, [fieldName, form]);

    // MathLive 的文案语言由静态属性控制，需在 mathfield 创建前设置；locale 变化时已挂载的控件会自动刷新提示文案
    React.useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }
        const mathFieldElement = (window as any).MathfieldElement;
        if (mathFieldElement) {
            mathFieldElement.locale = MATH_LIVE_LOCALES[languageTag] ?? 'en';
        }
    }, [languageTag]);

    React.useEffect(() => {
        if (containerRef.current && !fieldRef.current && (window as any).MathfieldElement) {
            const mathField = new (window as any).MathfieldElement();
            // 中文语言包会把 --ui-font-size 设为 1rem，导致菜单字体偏大；在 host 上覆盖回常规字号
            mathField.style.setProperty('--ui-font-size', '14px');
            mathField.style.setProperty('--ui-line-height', '1.2');
            // 菜单挂在 mathfield 的 shadow DOM 中，且 :lang(zh) 会在菜单项上重新声明上述变量，
            // 因此需要在 shadowRoot 内直接覆盖菜单项的字号与纵向间距
            if (mathField.shadowRoot) {
                const menuStyle = document.createElement('style');
                menuStyle.textContent = `
                    .ui-menu-container {
                        padding-top: 5px;
                        padding-bottom: 5px;
                    }
                    .ui-menu-container > li {
                        font-size: 14px;
                        line-height: 1.3;
                        padding-top: 1px;
                        padding-bottom: 1px;
                    }
                    .ui-menu-container > li + li {
                        margin-top: 2px;
                    }
                    .ui-menu-container > li > .label {
                        padding-top: 0;
                        padding-bottom: 0;
                    }
                    .ui-menu-container > li:has(.heading) {
                        margin-top: 0.35em;
                    }
                    .ui-menu-container > li[role='divider'] {
                        padding-top: 1px;
                        margin-bottom: 1px;
                    }
                `;
                mathField.shadowRoot.appendChild(menuStyle);
            }
            if (mathOptions) {
                Object.entries(mathOptions).forEach(([key, value]) => {
                    if (value !== undefined) {
                        const attrName = key.replace(/([A-Z])/g, '-$1').toLowerCase();
                        mathField.setAttribute(attrName, String(value));
                    }
                });
            }
            mathField.addEventListener('input', handleInputChange);
            if (containerRef.current) {
                while (containerRef.current.firstChild) {
                    containerRef.current.removeChild(containerRef.current.firstChild);
                }
                containerRef.current.appendChild(mathField);
                // @ts-ignore
                fieldRef.current = mathField;
            }
        }
        if (fieldRef.current) {
            try {
                if (fieldValue) {
                    fieldRef.current.value = fieldValue ?? '';
                } else {
                    if (fieldName) {
                        fieldRef.current.value = form?.getFieldValue(fieldName) ?? '';
                    }
                }
                if (props?.placeholder) {
                    fieldRef.current.placeholder = `\\text{${StringUtils.join(props.placeholder) ?? ''}}`;
                }
                fieldRef.current.disabled = props?.disabled || entryImmutable || false;
                fieldRef.current.readOnly = props?.readonly || entryImmutable || false;
            } catch {
            }
        }

        return () => {
            if (fieldRef.current) {
                try {
                    fieldRef.current.removeEventListener('input', handleInputChange);
                    // @ts-ignore
                    fieldRef.current = null;
                } catch {
                }
            }
        };
    }, [fieldId]);

    const fieldDom = React.useMemo(() => {
        return (
            <div
                ref={containerRef}
                className={classnames(clazzPrefix, fieldStyle.hashId, (!entryImmutable ? undefined : `${clazzPrefix}-immutable`), props?.containerClazz)}
                style={props?.containerStyle}
                data-math-input-id={fieldId}
            />
        );
    }, [props]);

    // Adjust the default styles
    document.body.style.setProperty('--keyboard-zindex', '1050');

    const internalRules = !validation ? [] : [
        {
            validator: async (_rule: any, value: string) => {
                if (!value) {
                    return;
                }
                let result = false;
                try {
                    fieldRef.current?.getValue('latex-expanded');
                    result = true;
                } catch {
                }
                if (!result) {
                    return Promise.reject(ObjectUtils.firstNotNil(props?.localeProps?.invalidFormula, intlLocales.get([languageTag, 'invalidFormula']), intlLocales.get(['en_US', 'invalidFormula'])));
                }
            }
        }
    ];

    const omitProps = !props? {} : omit(props, ['name', 'rules', 'clazzPrefix', 'containerClazz', 'containerStyle', 'mathOptions', 'validation', 'onChange', 'proField', 'locale', 'localeProps']);

    if (!proField) {
        const itemProps = !omitProps ? {} : PropUtils.omitProProps(omitProps);
        return (
            <Form.Item
                name={fieldName}
                rules={[
                    ...internalRules,
                    ...(props?.rules ?? [])
                ]}
                {...itemProps}
            >
                {fieldDom}
            </Form.Item>
        );
    }
    return (
        <ProForm.Item
            name={fieldName}
            rules={[
                ...internalRules,
                ...(props?.rules ?? [])
            ]}
            {...omitProps}
        >
            {fieldDom}
        </ProForm.Item>
    );
};
