/*
 * Copyright (c) 2024 Jiovan Ltd. All rights reserved.
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
import { ConfigProvider, Form, Button, Space, Input, message as messageApi } from 'antd';
import { type TabPosition } from 'antd/es/tabs';
import { FieldTimeOutlined } from '@ant-design/icons';
import { useIntl } from '@ant-design/pro-components';
import { EditOrReadOnlyContext } from '@ant-design/pro-components/es/form/BaseForm/EditOrReadOnlyContext.js';
import { NanoidUtils, ObjectUtils, StringUtils } from '@jiovan-labs/ts-lang-utils';
import Trigger, { type TriggerProps } from '@rc-component/trigger';
import '@rc-component/trigger/assets/index.less';
import { omit } from '@rc-component/util';
import { useEventListener } from 'ahooks';
import classnames from 'classnames';
import cronValidate, { type CronData } from 'cron-validate';
import { type WithFalse, type BeforeAfterType } from '@/type/declaration';
import { CardTabs, type CardTabsProps } from '@/layout/CardTabs';
import { AddonInput, type AddonInputProps } from '@/form/AddonInput';
import { ConsoleUtils } from '@/util/ConsoleUtils';
import { DesignUtils } from '@/util/DesignUtils';
import { StyleUtils } from '@/util/StyleUtils';
import { TriggerUtils } from '@/util/TriggerUtils';
import { CronInputContext, type CronInputContextProps } from './context';
import { SecondPanel, type SecondPanelProps, type SecondPanelRef } from './component/SecondPanel';
import { MinutePanel, type MinutePanelProps, type MinutePanelRef } from './component/MinutePanel';
import { HourPanel, type HourPanelProps, type HourPanelRef } from './component/HourPanel';
import { DayPanel, type DayPanelProps, type DayPanelRef } from './component/DayPanel';
import { MonthPanel, type MonthPanelProps, type MonthPanelRef } from './component/MonthPanel';
import { WeekPanel, type WeekPanelProps, type WeekPanelRef } from './component/WeekPanel';
import { YearPanel, type YearPanelProps, type YearPanelRef } from './component/YearPanel';
import { intlLocales } from './locales';
import { useFieldStyle } from './styles';


export type CronInputRef = {
    isShowSecond: () => boolean;
    isShowYear: () => boolean;
};


export type CronTabProps = Omit<CardTabsProps, 'addIcon' | 'hideAdd' | 'items' | 'onEdit'> & {
    tabPlacement?: Omit<TabPosition, 'start' | 'end'>;
};


export type IntlLocaleProps = {
    /**
     * @description OK
     * @description.zh-CN 确定
     * @description.zh-TW 確定
     */
    ok?: string;

    /**
     * @description Second
     * @description.zh-CN 秒
     * @description.zh-TW 秒
     */
    second?: string;

    /**
     * @description Minute
     * @description.zh-CN 分
     * @description.zh-TW 分
     */
    minute?: string;

    /**
     * @description Hour
     * @description.zh-CN 时
     * @description.zh-TW 時
     */
    hour?: string;

    /**
     * @description Day
     * @description.zh-CN 天
     * @description.zh-TW 天
     */
    day?: string;

    /**
     * @description Month
     * @description.zh-CN 月
     * @description.zh-TW 月
     */
    month?: string;

    /**
     * @description Week
     * @description.zh-CN 周
     * @description.zh-TW 周
     */
    week?: string;

    /**
     * @description Year
     * @description.zh-CN 年
     * @description.zh-TW 年
     */
    year?: string;

    /**
     * @description Valid Expression
     * @description.zh-CN 表达式有效
     * @description.zh-TW 表達式有效
     */
    validExpress?: string;

    /**
     * @description Invalid Expression
     * @description.zh-CN 表达式无效
     * @description.zh-TW 表達式無效
     */
    invalidExpress?: string;
};


export type CronInputProps = Omit<AddonInputProps, 'clazzPrefix' | 'addonBefore' | 'addonAfter' | 'cursorBefore' | 'cursorAfter' | 'paddingBefore' | 'paddingAfter'> & {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'abp-cron-input'
     */
    clazzPrefix?: string;

    /**
     * @description The DOM of the addon for the entry field
     * @description.zh-CN 默认文本框的附属节点内容
     * @description.zh-TW 默認文本框的標簽節點內容
     * @default <FieldTimeOutlined />
     */
    addon?: React.ReactNode | (() => React.ReactNode | undefined);

    /**
     * @description The position of the addon for the entry field
     * @description.zh-CN 默认文本框的附属节点位置
     * @description.zh-TW 默認文本框的附属節點位置
     * @default 'after'
     */
    addonPos?: WithFalse<BeforeAfterType>;

    /**
     * @description Whether the second field takes part in the expression
     * @description.zh-CN 秒字段是否参与表达式
     * @description.zh-TW 秒字段是否參與表達式
     * @default false
     */
    showSecond?: boolean;

    /**
     * @description Whether the year field takes part in the expression
     * @description.zh-CN 年字段是否参与表达式
     * @description.zh-TW 年字段是否參與表達式
     * @default false
     */
    showYear?: boolean;

    /**
     * @description Whether the blank option (i.e. `?`) takes part in the day and week panels
     * @description.zh-CN 天/周字段是否允许使用「不指定」（即 `?`）
     * @description.zh-TW 天/周字段是否允許使用「不指定」（即 `?`）
     * @default true
     */
    showBlank?: boolean;

    /**
     * @description Whether the dropdown div is default open or not
     * @description.zh-CN 是否默认展开弹出层
     * @description.zh-TW 是否默認展開彈出層
     */
    defaultOpen?: boolean;

    /**
     * @description Whether to echo the validation error to console or not
     * @description.zh-CN 是否回显验证错误到控制台
     * @description.zh-TW 是否回顯驗證錯誤到控制臺
     */
    echoValidateError?: boolean;

    /**
     * @description The properties of the dropdown div
     * @description.zh-CN 弹出层的属性
     * @description.zh-TW 彈出層的屬性
     */
    triggerProps?: Omit<TriggerProps, 'popup' | 'popupVisible' | 'children'>;

    /**
     * @description The properties of the tabs
     * @description.zh-CN 标签页的属性
     * @description.zh-TW 標籤頁的屬性
     */
    tabsProps?: CronTabProps;

    /**
     * @description The properties of the second panel
     * @description.zh-CN 秒标签页的属性
     * @description.zh-TW 秒標籤頁的屬性
     */
    secondPanelProps?: SecondPanelProps;

    /**
     * @description The properties of the minute panel
     * @description.zh-CN 分标签页的属性
     * @description.zh-TW 分標籤頁的屬性
     */
    minutePanelProps?: MinutePanelProps;

    /**
     * @description The properties of the hour panel
     * @description.zh-CN 时标签页的属性
     * @description.zh-TW 時標籤頁的屬性
     */
    hourPanelProps?: HourPanelProps;

    /**
     * @description The properties of the day panel
     * @description.zh-CN 天标签页的属性
     * @description.zh-TW 天標籤頁的屬性
     */
    dayPanelProps?: DayPanelProps;

    /**
     * @description Whether to use the semantic alias (e.g. `JAN`) in the month field
     * @description.zh-CN 月字段是否使用语义别名（如 `JAN`）
     * @description.zh-TW 月字段是否使用語義別名（如 `JAN`）
     * @default false
     */
    monthAlias?: boolean;

    /**
     * @description The properties of the month panel
     * @description.zh-CN 月标签页的属性
     * @description.zh-TW 月標籤頁的屬性
     */
    monthPanelProps?: MonthPanelProps;

    /**
     * @description Whether to use the semantic alias (e.g. `MON`) in the week field
     * @description.zh-CN 周字段是否使用语义别名（如 `MON`）
     * @description.zh-TW 周字段是否使用語義別名（如 `MON`）
     * @default true
     */
    weekAlias?: boolean;

    /**
     * @description The properties of the week panel
     * @description.zh-CN 周标签页的属性
     * @description.zh-TW 周標籤頁的屬性
     */
    weekPanelProps?: WeekPanelProps;

    /**
     * @description The properties of the year panel
     * @description.zh-CN 年标签页的属性
     * @description.zh-TW 年標籤頁的屬性
     */
    yearPanelProps?: YearPanelProps;

    /**
     * @description Whether to validate field with rules
     * @description.zh-CN 是否校验控件
     * @description.zh-TW 是否校驗控件
     * @default true
     */
    validateRule?: boolean;

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

    /**
     * @description The callback function when validation error occurred
     * @description.zh-CN 验证错误时的回调函数
     * @description.zh-TW 驗證錯誤時的回調函數
     */
    onValidateError?: (express?: string, errors?: string[], income?: boolean) => void;
} & Pick<CronInputContextProps, 'allowOkEcho'>;


/**
 * Component for displaying a text input box with a dropdown div that can generate cron expression
 *
 * @author David Hsing
 * @see "http://crontab.org/"
 * @see "https://freeformatter.com/cron-expression-generator-quartz.html"
 */
export const CronInput: React.ForwardRefExoticComponent<CronInputProps & React.RefAttributes<CronInputRef>> = React.forwardRef((props?: CronInputProps, ref?: any) => {
    CronInput.displayName = 'CronInput';

    const configContext = React.useContext(ConfigProvider.ConfigContext);
    const form = Form.useFormInstance();
    const editContext = React.useContext(EditOrReadOnlyContext);
    const clazzPrefix = props?.clazzPrefix ?? 'abp-cron-input';
    const subClazzPrefix = props?.tabsProps?.clazzPrefix ?? 'abp-card-tabs';
    const intlType = useIntl();

    // Initialize the default props
    const {
        addon = <FieldTimeOutlined />,
        addonPos = 'after',
        showSecond = false,
        showYear = false,
        showBlank = true,
        monthAlias = false,
        weekAlias = true,
        allowOkEcho = true,
        validateRule = true,
        proField = true,
        locale = intlType.locale,
    } = props ?? {};

    const [messageInvoker, messageContext] = messageApi.useMessage();
    const [fieldId] = React.useState<string>(NanoidUtils.getPopularId());
    const [triggerOpen, setTriggerOpen] = React.useState<boolean>(props?.defaultOpen ?? false);
    const [triggerOffset, setTriggerOffset] = React.useState<number>(4);
    const closeTimerRef = React.useRef<NodeJS.Timeout | null>(null);
    const fieldStyle = useFieldStyle(clazzPrefix, subClazzPrefix);

    // noinspection JSUnusedGlobalSymbols
    React.useImperativeHandle(ref, () => ({
        isShowSecond: (): boolean => {
            return showSecond;
        },
        isShowYear: (): boolean => {
            return showYear;
        }
    }));

    const secondPanelRef = React.useRef<SecondPanelRef>(null);
    const minutePanelRef = React.useRef<MinutePanelRef>(null);
    const hourPanelRef = React.useRef<HourPanelRef>(null);
    const dayPanelRef = React.useRef<DayPanelRef>(null);
    const monthPanelRef = React.useRef<MonthPanelRef>(null);
    const weekPanelRef = React.useRef<WeekPanelRef>(null);
    const yearPanelRef = React.useRef<YearPanelRef>(null);

    const [secondExpress, setSecondExpress] = React.useState<string>();
    const [minuteExpress, setMinuteExpress] = React.useState<string>();
    const [hourExpress, setHourExpress] = React.useState<string>();
    const [dayExpress, setDayExpress] = React.useState<string>();
    const [monthExpress, setMonthExpress] = React.useState<string>();
    const [weekExpress, setWeekExpress] = React.useState<string>();
    const [yearExpress, setYearExpress] = React.useState<string>();

    // 唯一数据源：绑定表单时以 Form store 为准，否则用内部 state
    const rawName = props?.name ?? props?.fieldProps?.name;
    const [fallbackForm] = Form.useForm();
    const effectiveForm = form ?? fallbackForm;
    const formValue = Form.useWatch(rawName ?? '__abp_cron_unbound__', effectiveForm) as string | undefined;
    const [localValue, setLocalValue] = React.useState<string | undefined>(
        props?.initialValue ?? (props?.fieldProps?.value as string)
    );
    const baseValue = rawName ? formValue : localValue;

    // allowOkEcho 模式下暂存未提交的草稿；它只服务于「确定」按钮，不参与面板派生
    const [draftExpress, setDraftExpress] = React.useState<string | undefined>();

    const outcomeExpresses = [secondExpress, minuteExpress, hourExpress, dayExpress, monthExpress, weekExpress, yearExpress];

    const clearSubExpresses = () => {
        setSecondExpress(undefined);
        setMinuteExpress(undefined);
        setHourExpress(undefined);
        setDayExpress(undefined);
        setMonthExpress(undefined);
        setWeekExpress(undefined);
        setYearExpress(undefined);
    };

    const assignSubExpresses = (express: CronData) => {
        setSecondExpress(express.seconds);
        setMinuteExpress(express.minutes);
        setHourExpress(express.hours);
        setDayExpress(express.daysOfMonth);
        setMonthExpress(express.months);
        setWeekExpress(express.daysOfWeek);
        setYearExpress(express.years);
    };

    const validateOptions = {
        override: {
            useSeconds: showSecond,
            useYears: showYear,
            useAliases: true,
            useBlankDay: showBlank,
            useLastDayOfMonth: true,
            useNearestWeekday: true,
            useLastDayOfWeek: true,
            useNthWeekdayOfMonth: true,
        }
    };

    // 面板派生：始终由已提交的值（baseValue）驱动，草稿不参与
    React.useEffect(() => {
        if (!baseValue) {
            clearSubExpresses();
            return;
        }
        const validate = cronValidate(baseValue, validateOptions);
        if (validate.isError()) {
            ConsoleUtils.warn(!props?.echoValidateError, false, 'CronInput', `Field '${rawName}' validation error: ${validate.error.join('; ')}`);
            clearSubExpresses();
            props?.onValidateError?.(baseValue, validate.error, true);
            return;
        }
        assignSubExpresses(validate.getValue() as CronData);
        setDraftExpress(undefined);
    }, [baseValue]);

    // noinspection DuplicatedCode
    const entryImmutable = editContext.mode === 'read' || props?.proFieldProps?.mode === 'read' || props?.fieldProps?.readOnly || props?.proFieldProps?.readonly || props?.disabled || props?.fieldProps?.disabled;

    // 触发器容器（rc-trigger 用于定位的元素）在 proField 模式下包含了 ProForm 的校验反馈行，
    // 反馈行出现时容器底部会下移，导致弹层被顶开一段高度。这里按反馈行高度反向补偿偏移量。
    const entryElementRef = React.useRef<HTMLDivElement>(null);
    const updateTriggerOffset = React.useCallback(() => {
        const element = entryElementRef.current;
        if (!element) {
            return;
        }
        const prefixCls = configContext?.getPrefixCls('') ?? 'ant';
        const additionalHeight = DesignUtils.getFormAdditionalHeight(element, prefixCls);
        setTriggerOffset(4 - additionalHeight);
    }, []);

    React.useEffect(() => {
        const element = document.querySelector<HTMLDivElement>(`[data-cron-input-entry="${fieldId}"]`);
        if (!element) {
            return;
        }
        entryElementRef.current = element;
        updateTriggerOffset();
        // 反馈行的展开/收起会改变容器尺寸（含动画过程），尺寸变化时重新计算偏移
        const observer = new ResizeObserver(updateTriggerOffset);
        observer.observe(element);
        return () => {
            entryElementRef.current = null;
            observer.disconnect();
        };
    }, [fieldId, entryImmutable]);

    // 统一写回：绑定表单走 setFieldValue，否则写内部 state
    const writeValue = (value?: string) => {
        if (rawName && form) {
            form.setFieldValue(rawName, value);
        } else {
            setLocalValue(value);
        }
        setDraftExpress(undefined);
    };

    // 根据完整表达式重建各子面板值
    const applyValueToSubExpresses = (value?: string) => {
        if (!value) {
            clearSubExpresses();
            return;
        }
        const validate = cronValidate(value, validateOptions);
        if (validate.isError()) {
            clearSubExpresses();
            return;
        }
        assignSubExpresses(validate.getValue() as CronData);
    };

    // 提交子表达式：拼装 → 校验 → 写回
    const commitSubExpresses = () => {
        if (entryImmutable) {
            return;
        }
        const outcome = StringUtils.join(outcomeExpresses, ' ', (item: any) => !!item);
        if (!outcome) {
            return;
        }
        const validate = cronValidate(outcome, validateOptions);
        if (validate.isError()) {
            ConsoleUtils.warn(!props?.echoValidateError, false, 'CronInput', `Field '${rawName}' validation error: ${validate.error.join('; ')}`);
            props?.onValidateError?.(outcome, validate.error, false);
            return;
        }
        writeValue(outcome);
    };

    // 丢弃未提交的草稿，从已提交值重建面板
    const discardDraft = () => {
        setDraftExpress(undefined);
        applyValueToSubExpresses(baseValue);
    };

    // 面板变更：更新子表达式；非确认回显模式下立即提交，确认回显模式下标记草稿待「确定」提交
    const handleSubChange = (setter: React.Dispatch<React.SetStateAction<string | undefined>>, value?: string, callback?: (value?: string) => void) => {
        if (entryImmutable) {
            return;
        }
        setter(value);
        callback?.(value);
        if (allowOkEcho) {
            setDraftExpress(value ?? '__dirty__');
            return;
        }
        // 用最新值替换对应位再提交，避免依赖 state 异步更新
        const nextExpresses = [...outcomeExpresses];
        const setterIndex = [setSecondExpress, setMinuteExpress, setHourExpress, setDayExpress, setMonthExpress, setWeekExpress, setYearExpress].indexOf(setter);
        if (setterIndex >= 0) {
            nextExpresses[setterIndex] = value;
        }
        const outcome = StringUtils.join(nextExpresses, ' ', (item: any) => !!item);
        if (outcome) {
            const validate = cronValidate(outcome, validateOptions);
            if (!validate.isError()) {
                writeValue(outcome);
            } else {
                ConsoleUtils.warn(!props?.echoValidateError, false, 'CronInput', `Field '${rawName}' validation error: ${validate.error.join('; ')}`);
                props?.onValidateError?.(outcome, validate.error, false);
            }
        }
    };

    const addonEntryDom = (typeof addon === 'function') ? addon() : addon;
    const buildEntryAddonDom = (before: boolean) => {
        return ((before && addonPos === 'before') || (!before && addonPos === 'after')) ? addonEntryDom : undefined;
    };

    const buildEntryDom = () => {
        const omitFieldProps = !props?.fieldProps ? {} : omit(props?.fieldProps, ['className', 'addonBefore', 'addonAfter', 'onChange']);
        if (proField) {
            const restProps = !props ? {} : omit(props, [
                'fieldProps', 'proFieldProps', 'rules',
                'clazzPrefix', 'addon', 'addonPos',
                'showSecond', 'showYear', 'monthAlias', 'weekAlias',
                'allowOkEcho',
                'defaultOpen',
                'echoValidateError',
                'triggerProps', 'tabsProps',
                'secondPanelProps', 'minutePanelProps', 'hourPanelProps',
                'dayPanelProps', 'monthPanelProps', 'weekPanelProps', 'yearPanelProps',
                'validateRule', 'proField', 'locale', 'localeProps',
                'onValidateError'
            ]);
            return (
                <div className={clazzPrefix}>
                    <AddonInput
                        addonBefore={buildEntryAddonDom(true)}
                        addonAfter={buildEntryAddonDom(false)}
                        cursorBefore={addonPos === 'before' ? 'pointer' : undefined}
                        cursorAfter={addonPos === 'after' ? 'pointer' : undefined}
                        fieldProps={{
                            className: classnames(`${clazzPrefix}-entry-${fieldId}`, props?.className ?? props?.fieldProps?.className),
                            ...omitFieldProps,
                            onChange: (event: any) => {
                                props?.fieldProps?.onChange?.(event);
                                if (!event.isDefaultPrevented() && !rawName) {
                                    setLocalValue(event.target.value);
                                }
                            },
                            'data-cron-input-id': fieldId,
                        }}
                        proField={proField}
                        rules={[
                            ...(props?.rules ?? []),
                            !validateRule ? {} : {
                                validator: async (_rule: any, value: string) => {
                                    if (!value) {
                                        return undefined;
                                    }
                                    const validate = cronValidate(value, validateOptions);
                                    if (validate.isValid()) {
                                        return Promise.resolve(ObjectUtils.firstNotNil(props?.localeProps?.validExpress, intlLocales.get([locale, 'validExpress']), intlLocales.get(['en_US', 'validExpress'])));
                                    }
                                    return Promise.reject(ObjectUtils.firstNotNil(props?.localeProps?.invalidExpress, intlLocales.get([locale, 'invalidExpress']), intlLocales.get(['en_US', 'invalidExpress'])));
                                }
                            }
                        ]}
                        {...restProps}
                    />
                </div>
            )
        } else {
            const restProps = omit(omitFieldProps, ['placeholder', 'value', 'onChange']);
            return (
                <div className={clazzPrefix}>
                    <Space.Compact className={`${clazzPrefix}-space`} style={{ width: '100%' }}>
                        {addonPos === 'before' && (
                            <Space.Addon className={`${clazzPrefix}-compact-before`} style={{ cursor: 'pointer' }}>
                                {buildEntryAddonDom(true)}
                            </Space.Addon>
                        )}
                        <Input
                            className={classnames(`${clazzPrefix}-entry-${fieldId}`, props?.className ?? props?.fieldProps?.className)}
                            placeholder={StringUtils.join(props?.placeholder) ?? props?.fieldProps?.placeholder}
                            data-cron-input-id={fieldId}
                            value={baseValue ?? ''}
                            {...restProps}
                            onChange={(event: any) => {
                                props?.fieldProps?.onChange?.(event);
                                if (event.isDefaultPrevented()) {
                                    return;
                                }
                                if (validateRule && !!event.target.value) {
                                    const validate = cronValidate(event.target.value, validateOptions);
                                    if (validate.isError()) {
                                        messageInvoker.warning(ObjectUtils.firstNotNil(props?.localeProps?.invalidExpress, intlLocales.get([locale, 'invalidExpress']), intlLocales.get(['en_US', 'invalidExpress']))).then(() => {});
                                    }
                                }
                                if (rawName && form) {
                                    form.setFieldValue(rawName, event.target.value);
                                } else {
                                    setLocalValue(event.target.value);
                                }
                                setDraftExpress(undefined);
                            }}
                        />
                        {addonPos === 'after' && (
                            <Space.Addon className={`${clazzPrefix}-compact-after`} style={{ cursor: 'pointer' }}>
                                {buildEntryAddonDom(false)}
                            </Space.Addon>
                        )}
                    </Space.Compact>
                </div>
            );
        }
    };

    // noinspection DuplicatedCode
    const handleWindowResize = () => {
        const inspect = document.querySelector<HTMLDivElement>(`.${clazzPrefix}-entry-${fieldId}`);
        const sponsor = document.querySelector<HTMLDivElement>(`.${clazzPrefix}-popup-${fieldId}`);
        if (inspect && sponsor) {
            StyleUtils.addStyle(sponsor, 'width', `${inspect.offsetWidth}px`);
            StyleUtils.addStyle(sponsor, 'min-width', `${inspect.offsetWidth}px`);
        }
    };
    useEventListener('resize', handleWindowResize);

    const buildPopupDom = () => {
        const tabItems: CardTabsProps['items'] = [
            {
                key: 'minute',
                label: ObjectUtils.firstNotNil(props?.localeProps?.minute, intlLocales.get([locale, 'minute']), intlLocales.get(['en_US', 'minute'])),
                children: (
                    <MinutePanel
                        ref={minutePanelRef}
                        disabled={entryImmutable}
                        value={minuteExpress}
                        onChange={(value?: string) => handleSubChange(setMinuteExpress, value, props?.minutePanelProps?.onChange)}
                        locale={props?.minutePanelProps?.locale ?? props?.locale}
                        {...(!props?.minutePanelProps ? {} : omit(props.minutePanelProps, ['value', 'onChange', 'locale']))}
                    />
                )
            },
            {
                key: 'hour',
                label: ObjectUtils.firstNotNil(props?.localeProps?.hour, intlLocales.get([locale, 'hour']), intlLocales.get(['en_US', 'hour'])),
                children: (
                    <HourPanel
                        ref={hourPanelRef}
                        disabled={entryImmutable}
                        value={hourExpress}
                        onChange={(value?: string) => handleSubChange(setHourExpress, value, props?.hourPanelProps?.onChange)}
                        locale={props?.hourPanelProps?.locale ?? props?.locale}
                        {...(!props?.hourPanelProps ? {} : omit(props.hourPanelProps, ['value', 'onChange', 'locale']))}
                    />
                )
            },
            {
                key: 'day',
                label: ObjectUtils.firstNotNil(props?.localeProps?.day, intlLocales.get([locale, 'day']), intlLocales.get(['en_US', 'day'])),
                children: (
                    <DayPanel
                        ref={dayPanelRef}
                        disabled={entryImmutable}
                        value={dayExpress}
                        onChange={(value?: string) => handleSubChange(setDayExpress, value, props?.dayPanelProps?.onChange)}
                        locale={props?.dayPanelProps?.locale ?? props?.locale}
                        showBlank={showBlank}
                        {...(!props?.dayPanelProps ? {} : omit(props.dayPanelProps, ['value', 'onChange', 'locale', 'showBlank']))}
                    />
                )
            },
            {
                key: 'month',
                label: ObjectUtils.firstNotNil(props?.localeProps?.month, intlLocales.get([locale, 'month']), intlLocales.get(['en_US', 'month'])),
                children: (
                    <MonthPanel
                        ref={monthPanelRef}
                        disabled={entryImmutable}
                        value={monthExpress}
                        onChange={(value?: string) => handleSubChange(setMonthExpress, value, props?.monthPanelProps?.onChange)}
                        locale={props?.monthPanelProps?.locale ?? props?.locale}
                        alias={monthAlias}
                        {...(!props?.monthPanelProps ? {} : omit(props.monthPanelProps, ['value', 'onChange', 'locale', 'alias']))}
                    />
                )
            },
            {
                key: 'week',
                label: ObjectUtils.firstNotNil(props?.localeProps?.week, intlLocales.get([locale, 'week']), intlLocales.get(['en_US', 'week'])),
                children: (
                    <WeekPanel
                        ref={weekPanelRef}
                        disabled={entryImmutable}
                        value={weekExpress}
                        onChange={(value?: string) => handleSubChange(setWeekExpress, value, props?.weekPanelProps?.onChange)}
                        locale={props?.weekPanelProps?.locale ?? props?.locale}
                        alias={weekAlias}
                        showBlank={showBlank}
                        {...(!props?.weekPanelProps ? {} : omit(props.weekPanelProps, ['value', 'onChange', 'locale', 'alias', 'showBlank']))}
                    />
                )
            }
        ];
        if (showSecond) {
            tabItems.unshift({
                key: 'second',
                label: ObjectUtils.firstNotNil(props?.localeProps?.second, intlLocales.get([locale, 'second']), intlLocales.get(['en_US', 'second'])),
                children: (
                    <SecondPanel
                        ref={secondPanelRef}
                        disabled={entryImmutable}
                        value={secondExpress}
                        onChange={(value?: string) => handleSubChange(setSecondExpress, value, props?.secondPanelProps?.onChange)}
                        locale={props?.secondPanelProps?.locale ?? props?.locale}
                        {...(!props?.secondPanelProps ? {} : omit(props.secondPanelProps, ['value', 'onChange', 'locale']))}
                    />
                ),
            });
        }
        if (showYear) {
            tabItems.push({
                key: 'year',
                label: ObjectUtils.firstNotNil(props?.localeProps?.year, intlLocales.get([locale, 'year']), intlLocales.get(['en_US', 'year'])),
                children: (
                    <YearPanel
                        ref={yearPanelRef}
                        disabled={entryImmutable}
                        value={yearExpress}
                        onChange={(value?: string) => handleSubChange(setYearExpress, value, props?.yearPanelProps?.onChange)}
                        locale={props?.yearPanelProps?.locale ?? props?.locale}
                        {...(!props?.yearPanelProps ? {} : omit(props.yearPanelProps, ['value', 'onChange', 'locale']))}
                    />
                ),
            });
        }
        const omitTabsProps = !props?.tabsProps ? {} : omit(props.tabsProps, ['defaultActiveKey', 'size', 'tabBarExtraContent']);
        return (
            <div
                onMouseEnter={() => {
                    // Cancel close when mouse enters popup
                    if (closeTimerRef.current) {
                        clearTimeout(closeTimerRef.current);
                        closeTimerRef.current = null;
                    }
                }}
                onMouseLeave={() => {
                    // Delay close to allow mouse to move back to trigger
                    if (closeTimerRef.current) {
                        clearTimeout(closeTimerRef.current);
                    }
                    closeTimerRef.current = setTimeout(() => {
                        setTriggerOpen(false);
                        props?.triggerProps?.onOpenChange?.(false);
                    }, 200);
                }}
            >
                <CronInputContext.Provider
                    value={{
                        fieldId: fieldId,
                        allowOkEcho: allowOkEcho,
                        popupOpen: triggerOpen,
                    }}
                >
                    <CardTabs
                        items={tabItems}
                        defaultActiveKey={props?.tabsProps?.defaultActiveKey ?? 'minute'}
                        size={props?.tabsProps?.size ?? 'extra-small'}
                        tabBarExtraContent={(
                            <>
                                {props?.tabsProps?.tabBarExtraContent}
                                {(allowOkEcho && !entryImmutable) && (
                                    <div className={`${clazzPrefix}-tabs-extra`}>
                                        <Space size={'middle'}>
                                            {allowOkEcho && !entryImmutable && (
                                                <Button
                                                    className={`${clazzPrefix}-ok-echo`}
                                                    size='small'
                                                    type='primary'
                                                    onClick={() => {
                                                        commitSubExpresses();
                                                        setTriggerOpen(false);
                                                    }}
                                                >
                                                    {ObjectUtils.firstNotNil(props?.localeProps?.ok, intlLocales.get([locale, 'ok']), intlLocales.get(['en_US', 'ok']))}
                                                </Button>
                                            )}
                                        </Space>
                                    </div>
                                )}
                            </>
                        )}
                        {...omitTabsProps}
                    />
                </CronInputContext.Provider>
            </div>
        );
    };

    const omitTriggerProps = !props?.triggerProps ? {} : omit(props?.triggerProps, ['action', 'builtinPlacements', 'getPopupContainer', 'popupAlign', 'popupClassName', 'stretch', 'onOpenChange']);

    return (
        <>
            {messageContext}
            <Trigger
                action={props?.triggerProps?.action ?? (entryImmutable ? ['hover'] : ['click'])}
                builtinPlacements={props?.triggerProps?.builtinPlacements ?? TriggerUtils.buildPlacements()}
                getPopupContainer={(trigger: HTMLElement) => {
                    return props?.triggerProps?.getPopupContainer?.(trigger) || trigger?.closest('form')?.parentElement || document.body;
                }}
                popup={buildPopupDom()}
                popupAlign={(props?.triggerProps?.popupPlacement || props?.triggerProps?.popupAlign) ? props?.triggerProps?.popupAlign : {
                    points: ['tl', 'bl'],
                    offset: [0, triggerOffset],
                }}
                popupClassName={classnames(`${clazzPrefix}-popup`, fieldStyle.hashId, `${clazzPrefix}-popup-${fieldId}`, (!entryImmutable ? undefined : `${clazzPrefix}-popup-immutable`), props?.triggerProps?.popupClassName)}
                popupVisible={triggerOpen}
                stretch={props?.triggerProps?.stretch ?? 'width'}
                onOpenChange={(open: boolean) => {
                    if (!open && (secondPanelRef.current?.isCompositing() || minutePanelRef.current?.isCompositing() || hourPanelRef.current?.isCompositing() || dayPanelRef.current?.isCompositing() || monthPanelRef.current?.isCompositing() || weekPanelRef.current?.isCompositing() || yearPanelRef.current?.isCompositing())) {
                        return;
                    }
                    if (!open && allowOkEcho && draftExpress) {
                        discardDraft();
                    }
                    setTriggerOpen(open);
                    props?.triggerProps?.onOpenChange?.(open);
                }}
                {...omitTriggerProps}
            >
                <div data-cron-input-entry={fieldId}>
                    {buildEntryDom()}
                </div>
            </Trigger>
        </>
    );
});
