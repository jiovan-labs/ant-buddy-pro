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


import { useStyle, type UseStyleResult, type GenerateStyle } from '@ant-design/pro-components';
import { type ExtraProAliasToken } from '@/type/design-token';
import { PackageConst } from '@/constant/PackageConst';


const buildFieldStyle: GenerateStyle<ExtraProAliasToken> = (token) => {
    return {
        [`${token.componentCls}-container`]: {
            width: '100%',

            [`> ${token.subComponentCls}`]: {
                [`${token.antCls}-tabs-tab`]: {
                    paddingLeft: `${token.paddingSM}px !important`,
                    paddingRight: `${token.paddingSM}px !important`,
                },

                // v6 起 rc-tabs 移除了 -tabpane 层，面板元素本身就是 -content，且左右布局的类名是 start / end。
                // 直角只在融合态（`tabBorder` 或 `contentBorder` 开启）下才需要：那时面板与标签共享边框，靠标签那侧必须无缝；
                // 边框全关时面板是独立圆角框，保留圆角更好看（此时 CardTabs 的指示条默认内缩成标签下划线）。
                [`&${token.subComponentCls}-top > ${token.antCls}-tabs:is(${token.subComponentCls}-tab-border, ${token.subComponentCls}-content-border) ${token.antCls}-tabs-content`]: {
                    [`${token.componentCls}, ${token.componentCls}-item`]: {
                        borderTopLeftRadius: 0,
                    }
                },

                [`&${token.subComponentCls}-top-end > ${token.antCls}-tabs:is(${token.subComponentCls}-tab-border, ${token.subComponentCls}-content-border) ${token.antCls}-tabs-content`]: {
                    [`${token.componentCls}, ${token.componentCls}-item`]: {
                        borderTopRightRadius: 0,
                    }
                },

                [`&${token.subComponentCls}-bottom > ${token.antCls}-tabs:is(${token.subComponentCls}-tab-border, ${token.subComponentCls}-content-border) ${token.antCls}-tabs-content`]: {
                    [`${token.componentCls}, ${token.componentCls}-item`]: {
                        borderBottomLeftRadius: 0,
                    }
                },

                [`&${token.subComponentCls}-bottom-end > ${token.antCls}-tabs:is(${token.subComponentCls}-tab-border, ${token.subComponentCls}-content-border) ${token.antCls}-tabs-content`]: {
                    [`${token.componentCls}, ${token.componentCls}-item`]: {
                        borderBottomRightRadius: 0,
                    }
                },

                [`&${token.subComponentCls}-start > ${token.antCls}-tabs:is(${token.subComponentCls}-tab-border, ${token.subComponentCls}-content-border) ${token.antCls}-tabs-content`]: {
                    [`${token.componentCls}, ${token.componentCls}-item`]: {
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                    }
                },

                [`&${token.subComponentCls}-end > ${token.antCls}-tabs:is(${token.subComponentCls}-tab-border, ${token.subComponentCls}-content-border) ${token.antCls}-tabs-content`]: {
                    [`${token.componentCls}, ${token.componentCls}-item`]: {
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 0,
                    }
                }
            }
        }
    };
}


export function useFieldStyle(prefixCls: string, subPrefixCls: string): UseStyleResult {
    return useStyle(`${PackageConst.PACKAGE_NAME}:LocaleTextarea`, (token) => {
        const mesh: ExtraProAliasToken = {
            ...token,
            prefixCls,
            componentCls: `.${prefixCls}`,
            subPrefixCls,
            subComponentCls: `.${subPrefixCls}`,
        };
        return [buildFieldStyle(mesh)];
    });
}
