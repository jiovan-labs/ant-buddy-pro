/*
 * Copyright (c) 2023 Jiovan Ltd. All rights reserved.
 *
 * Licensed under the MIT License.
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
import { Avatar, Badge, Dropdown, Empty, Listy, Tabs, type BadgeProps, type DropdownProps, type ListyProps, type MenuProps, type TabsProps } from 'antd';
import { type TabPlacement } from 'antd/es/tabs';
import { BellOutlined } from '@ant-design/icons';
import { useIntl } from '@ant-design/pro-components';
import { ArrayUtils, BooleanUtils, ObjectUtils } from '@jiovan-labs/ts-lang-utils';
import { type Tab as RcTab } from '@rc-component/tabs/es/interface';
import { omit } from '@rc-component/util';
import classnames from 'classnames';
import { type WithFalse, type ReadonlyTabsType } from '@/type/declaration';
import { intlLocales } from './locales';
import { useFieldStyle } from './styles';


export type NotifyPresetStyle = WithFalse<'notice' | 'task'>;

export type NotifyTabPosition = Exclude<TabPlacement, 'bottom'>;

export type NotifyDataItem = {
    /**
     * @description The ID of the item
     * @description.zh-CN 条目的 ID
     * @description.zh-TW 條目的 ID
     */
    id?: string;

    /**
     * @description The avatar of the item (a string means an image URL, otherwise a custom node)
     * @description.zh-CN 条目的头像（字符串表示图片地址，否则为自定义节点）
     * @description.zh-TW 條目的頭像（字符串表示圖片地址，否則為自定義節點）
     */
    avatar?: React.ReactNode;

    /**
     * @description The title of the item
     * @description.zh-CN 条目的标题
     * @description.zh-TW 條目的標題
     */
    title?: React.ReactNode;

    /**
     * @description The description of the item
     * @description.zh-CN 条目的描述
     * @description.zh-TW 條目的描述
     */
    description?: React.ReactNode;

    /**
     * @description The extra node of the item
     * @description.zh-CN 条目额外的节点内容
     * @description.zh-TW 條目額外的節點内容
     */
    extra?: React.ReactNode;

    /**
     * @description Whether the item has been read
     * @description.zh-CN 条目是否为已读
     * @description.zh-TW 條目是否爲已讀
     */
    read?: boolean;

    /**
     * @description The timestamp of the item
     * @description.zh-CN 条目的时间戳
     * @description.zh-TW 條目的時間戳
     */
    timestamp?: string;
};


export type NotifyListProps = Omit<ListyProps<any>, 'itemRender' | 'rowKey'> & {
    /**
     * @description The data source of the list (alias of `items`, kept for backward compatibility with Ant `List`)
     * @description.zh-CN 列表的数据源（`items` 的别名，兼容 Ant `List`）
     * @description.zh-TW 列表的數據源（`items` 的別名，兼容 Ant `List`）
     */
    dataSource?: any[];

    /**
     * @description The render function of the item (alias of `itemRender`, kept for backward compatibility with Ant `List`)
     * @description.zh-CN 列表项的渲染函数（`itemRender` 的别名，兼容 Ant `List`）
     * @description.zh-TW 列表項的渲染函數（`itemRender` 的別名，兼容 Ant `List`）
     */
    renderItem?: (item: any, index: number) => React.ReactNode;

    /**
     * @description The row key of the list
     * @description.zh-CN 列表行的 key
     * @description.zh-TW 列表行的 key
     */
    rowKey?: ListyProps<any>['rowKey'];

    /**
     * @description The footer of the list
     * @description.zh-CN 列表的页脚
     * @description.zh-TW 列表的頁腳
     */
    footer?: React.ReactNode;
};


export type HyperlinkProps = {
    /**
     * @description The CSS class name of hyperlink
     * @description.zh-CN 超链接的 CSS 类名
     * @description.zh-TW 超鏈接的 CSS 類名
     */
    clazz?: string;

    /**
     * @description The CSS style of hyperlink
     * @description.zh-CN 超链接的 CSS 样式
     * @description.zh-TW 超鏈接的 CSS 樣式
     */
    style?: React.CSSProperties;

    /**
     * @description The href of hyperlink
     * @description.zh-CN 超链接的地址
     * @description.zh-TW 超鏈接的地址
     */
    href?: string;

    /**
     * @description The target of hyperlink
     * @description.zh-CN 超链接的目标窗口
     * @description.zh-TW 超鏈接的目標窗口
     */
    target?: string;

    /**
     * @description The relation of target to current page
     * @description.zh-CN 超链接地址与当前页面的关系
     * @description.zh-TW 超鏈接地址與當前頁面的關系
     */
    rel?: string;
};


export type MixinTabProps = Omit<RcTab, 'children'> & {
    /**
     * @description Whether to show a border around the list
     * @description.zh-CN 是否给列表显示四周边框
     * @description.zh-TW 是否為列表顯示四周边框
     * @default false
     */
    bordered?: boolean;

    /**
     * @description The properties of the label badge
     * @description.zh-CN 标签页徽标的属性
     * @description.zh-TW 標籤頁徽標的屬性
     */
    labelBadgeProps?: Omit<BadgeProps, 'children'>;

    /**
     * @description The properties of the list
     * @description.zh-CN 列表的属性
     * @description.zh-TW 列表的屬性
     */
    listProps?: NotifyListProps;

    /**
     * @description The DOM of placeholder for the list
     * @description.zh-CN 列表的占位符
     * @description.zh-TW 列表的佔位符
     */
    listPlaceholder?: React.ReactNode;

    /**
     * @description Whether to display the clear button
     * @description.zh-CN 是否显示清除按钮
     * @description.zh-TW 是否顯示清除按鈕
     */
    showClear?: boolean | (() => boolean);

    /**
     * @description Whether to display the more button
     * @description.zh-CN 是否显示更多按钮
     * @description.zh-TW 是否顯示更多按鈕
     */
    showMore?: boolean | (() => boolean);

    /**
     * @description The respond function when click the the item
     * @description.zh-CN 条目的点击响应函数
     * @description.zh-TW 條目的點擊響應函數
     */
    onClick?: (event: any, key: string) => void;

    /**
     * @description The respond function when click the clear button
     * @description.zh-CN 清除按钮的响应函数
     * @description.zh-TW 清除按鈕的響應函數
     */
    onClear?: (event: any, key: string) => void;

    /**
     * @description The respond function when click the more button
     * @description.zh-CN 更多按钮的响应函数
     * @description.zh-TW 更多按鈕的響應函數
     */
    onMore?: (event: any, key: string) => void;

    /**
     * @description The preset style of the component
     * @description.zh-CN 预设样式
     * @description.zh-TW 預設樣式
     */
    presetStyle?: NotifyPresetStyle;
};


export type MixinTabsProps = Omit<TabsProps, 'activeKey' | 'addIcon' | 'hideAdd' | 'items' | 'tabPlacement' | 'type' | 'onEdit' | 'children'> & {
    /**
     * @description The contents of the tabs
     * @description.zh-CN 标签页的内容
     * @description.zh-TW 標籤頁的内容
     */
    items?: MixinTabProps[];

    /**
     * @description The type of the tab labels
     * @description.zh-CN 标签页的类型
     * @description.zh-TW 標籤頁的類型
     * @default 'line'
     */
    type?: ReadonlyTabsType;

    /**
     * @description The position of the tab labels
     * @description.zh-CN 标签页的位置
     * @description.zh-TW 標籤頁的位置
     * @default 'top'
     */
    tabPlacement?: NotifyTabPosition;
};


export type IntlLocaleProps = {
    /**
     * @description Clear
     * @description.zh-CN 清空
     * @description.zh-TW 清空
     */
    clear?: React.ReactNode;

    /**
     * @description More
     * @description.zh-CN 更多
     * @description.zh-TW 更多
     */
    more?: React.ReactNode;
};


export type NotifyBadgeProps = {
    /**
     * @description The CSS class prefix of the component
     * @description.zh-CN 组件的 CSS 类名前缀
     * @description.zh-TW 組件的 CSS 類名前綴
     * @default 'abp-notify-badge'
     */
    clazzPrefix?: string;

    /**
     * @description The properties of the hyperlink
     * @description.zh-CN 超链接的属性
     * @description.zh-TW 超鏈接的屬性
     */
    hyperlinkProps?: HyperlinkProps;

    /**
     * @description The content of the badge
     * @description.zh-CN 徽标的内容节点
     * @description.zh-TW 徽標的内容節點
     */
    badgeContent?: React.ReactNode;

    /**
     * @description The properties of the badge
     * @description.zh-CN 徽标的属性
     * @description.zh-TW 徽標的屬性
     */
    badgeProps?: Omit<BadgeProps, 'children'>;

    /**
     * @description Whether to enable the dropdown div
     * @description.zh-CN 是否允许下拉弹出层
     * @description.zh-TW 是否允許下拉彈出層
     * @default true
     */
    dropdownEnabled?: boolean;

    /**
     * @description The properties of the dropdown div
     * @description.zh-CN 下拉弹出层的属性
     * @description.zh-TW 下拉彈出層的屬性
     */
    dropdownProps?: Omit<DropdownProps, 'popupRender' | 'menu' | 'children'>;

    /**
     * @description The properties of the tabs
     * @description.zh-CN 标签页的属性
     * @description.zh-TW 標簽頁的屬性
     */
    tabsProps?: MixinTabsProps;

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
};


/**
 * Component for displaying a badge with notify list
 *
 * @author David Hsing
 */
export const NotifyBadge: React.FC<NotifyBadgeProps> = (props?: NotifyBadgeProps) => {
    const clazzPrefix = props?.clazzPrefix ?? 'abp-notify-badge';
    const intlType = useIntl();

    // Initialize the default props
    const {
        badgeContent = <BellOutlined style={{ cursor: 'pointer' }} />,
        dropdownEnabled = true,
        locale = intlType.locale,
    } = props ?? {};

    const fieldStyle = useFieldStyle(clazzPrefix);

    const badgeDom = (
        <Badge className={`${clazzPrefix}-entry-badge`} {...props?.badgeProps}>
            {badgeContent}
        </Badge>
    );

    const hyperlinkDom = !props?.hyperlinkProps ? badgeDom : (
        <a
            className={classnames(`${clazzPrefix}-entry-link`, props.hyperlinkProps.clazz)}
            {...omit(props?.hyperlinkProps, ['clazz'])}
        >
            {badgeDom}
        </a>
    );

    const renderTabLabel = (tab: MixinTabProps): React.ReactNode => {
        const unreadCount = tab.labelBadgeProps?.count ?? ArrayUtils.count(tab.listProps?.dataSource, (item: any) => BooleanUtils.isNotTrue(item.read));
        const omitProps = !tab.labelBadgeProps ? {} : omit(tab.labelBadgeProps, ['count']);
        if (tab.label) {
            return !tab.labelBadgeProps ? tab.label : (
                <Badge count={unreadCount} {...omitProps}>
                    {tab.label}
                </Badge>
            );
        }
        if (tab.presetStyle !== 'notice' && tab.presetStyle !== 'task') {
            return undefined;
        }
        const label = intlLocales.get([locale, tab.presetStyle]) ?? intlLocales.get(['en_US', tab.presetStyle]);
        return !tab.labelBadgeProps ? label : (
            <Badge count={unreadCount} {...omitProps}>
                {label}
            </Badge>
        );
    };

    const renderPresetList = (item: any, index: number, tab: MixinTabProps): React.ReactNode => {
        const avatar = !item.avatar ? undefined : (
            (typeof item.avatar === 'string')
                ? <Avatar className={`${clazzPrefix}-list-item-avatar`} src={item.avatar} />
                : <span className={`${clazzPrefix}-list-item-icon`}>{item.avatar}</span>
        );
        return (
            <div
                className={classnames(`${clazzPrefix}-list-item`, `${clazzPrefix}-list-item-${item.read ? 'read' : 'unread'}`)}
                onClick={event => tab.onClick?.(event, item.key || item.id || index)}
            >
                {!!avatar && (
                    <div className={`${clazzPrefix}-list-item-avatar-wrapper`}>
                        {avatar}
                    </div>
                )}
                <div className={`${clazzPrefix}-list-item-meta`}>
                    <div className={`${clazzPrefix}-list-item-title`}>
                        {item.title}
                        {!!item.extra && (
                            <div className={`${clazzPrefix}-list-item-extra`}>
                                {item.extra}
                            </div>
                        )}
                    </div>
                    {!!item.description && (
                        <div className={`${clazzPrefix}-list-item-description`}>
                            {item.description}
                        </div>
                    )}
                    {!!item.timestamp && (
                        <div className={`${clazzPrefix}-list-item-timestamp`}>
                            {item.timestamp}
                        </div>
                    )}
                </div>
            </div>
        );
    };

    const renderListFooter = (tab: MixinTabProps): React.ReactNode => {
        const showClear = BooleanUtils.isTrue(tab.showClear);
        const showMore = BooleanUtils.isTrue(tab.showMore);
        if (!showClear && !showMore) {
            return tab.listProps?.footer;
        }
        return (
            <>
                {tab.listProps?.footer}
                <div className={classnames(`${clazzPrefix}-builtin-footer`, (tab.bordered ? undefined : `${clazzPrefix}-builtin-footer-bordered`))}>
                    {showClear && (
                        <div
                            className={`${clazzPrefix}-action-button`}
                            onClick={event => tab.onClear?.(event, tab.key ?? tab.presetStyle)}
                        >
                            {ObjectUtils.firstNotNil(props?.localeProps?.clear, intlLocales.get([locale, 'clear']), intlLocales.get(['en_US', 'clear']))}
                        </div>
                    )}
                    {showMore && (
                        <div
                            className={`${clazzPrefix}-action-button`}
                            onClick={event => tab.onMore?.(event, tab.key ?? tab.presetStyle)}
                        >
                            {ObjectUtils.firstNotNil(props?.localeProps?.more, intlLocales.get([locale, 'more']), intlLocales.get(['en_US', 'more']))}
                        </div>
                    )}
                </div>
            </>
        );
    };

    const buildTabDom = () => {
        if (!props?.tabsProps?.items) {
            return undefined;
        }
        return props.tabsProps.items.map((tab: MixinTabProps) => {
            const listItems = tab.listProps?.items ?? tab.listProps?.dataSource;
            const empty = !listItems || (Array.isArray(listItems) && !listItems.length);
            const placeholder = tab.listPlaceholder ?? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
            const content = empty ? placeholder : (
                <div className={`${clazzPrefix}-tab-list-wrapper`}>
                    <Listy
                        className={classnames(`${clazzPrefix}-tab-list`, (tab.bordered ? `${clazzPrefix}-tab-list-bordered` : undefined), tab.listProps?.className)}
                        items={listItems}
                        rowKey={tab.listProps?.rowKey ?? ((item: any) => item?.key ?? item?.id)}
                        classNames={{ item: `${clazzPrefix}-listy-item` }}
                        {...(!tab?.listProps ? {} : omit(tab.listProps, ['className', 'footer', 'renderItem', 'dataSource', 'items', 'rowKey', 'classNames']))}
                        itemRender={(item: any, index: number) => {
                            if (tab.listProps?.renderItem) {
                                return tab.listProps.renderItem(item, index);
                            }
                            return (tab.presetStyle === 'notice' || tab.presetStyle === 'task') ? renderPresetList(item, index, tab) : undefined;
                        }}
                    />
                    {renderListFooter(tab)}
                </div>
            );
            return {
                key: tab.key ?? tab.presetStyle,
                label: renderTabLabel(tab),
                ...omit(tab, ['key', 'label', 'labelBadgeProps', 'listProps', 'showClear', 'showMore', 'onClick', 'onClear', 'onMore', 'presetStyle']),
                children: content,
            };
        });
    };

    const menuItems: MenuProps['items'] = [{
        key: 'tabs',
        label: (
            <Tabs
                className={classnames(`${clazzPrefix}-tabs`, props?.tabsProps?.className)}
                items={buildTabDom()}
                {...(!props?.tabsProps ? {} : omit(props.tabsProps, ['className', 'items']))}
            />
        )
    }];

    return !dropdownEnabled ? hyperlinkDom : (
        <Dropdown
            menu={{ items: menuItems }}
            classNames={{
                // @ts-ignore
                root: classnames(`${clazzPrefix}-trigger`, `${clazzPrefix}-popup`, fieldStyle.hashId, props?.dropdownProps?.classNames?.root)
            }}
            {...(!props?.dropdownProps ? {} : omit(props?.dropdownProps, ['className', 'classNames']))}
        >
            {hyperlinkDom}
        </Dropdown>
    );
};
