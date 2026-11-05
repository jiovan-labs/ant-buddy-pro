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


import { unit } from '@ant-design/cssinjs';
import { useStyle, type UseStyleResult, type GenerateStyle } from '@ant-design/pro-components';
import { type ExtraProAliasToken } from '@/type/design-token';
import { PackageConst } from '@/constant/PackageConst';


const buildFieldStyle: GenerateStyle<ExtraProAliasToken> = (token) => {
    // noinspection DuplicatedCode
    return {
        [`${token.componentCls}`]: {
            [`&-ink-bar > ${token.antCls}-tabs-nav > ${token.antCls}-tabs-nav-wrap > ${token.antCls}-tabs-nav-list > ${token.antCls}-tabs-ink-bar`]: {
                backgroundColor: token.colorPrimaryHover,
                visibility: 'visible',
            },

            [`&-extra-small > ${token.antCls}-tabs  > ${token.antCls}-tabs-nav > ${token.antCls}-tabs-nav-wrap > ${token.antCls}-tabs-nav-list > ${token.antCls}-tabs-tab`]: {
                paddingTop: token.paddingXXS,
                paddingBottom: token.paddingXXS,
                fontSize: token.fontSize - 1,
            },

            [`> ${token.antCls}-tabs`]: {
                [`&${token.componentCls}-tab-border-off  > ${token.antCls}-tabs-nav > ${token.antCls}-tabs-nav-wrap > ${token.antCls}-tabs-nav-list > ${token.antCls}-tabs-tab`]: {
                    background: 'transparent',
                    border: 'none',
                },

                [`&${token.antCls}-tabs-top`]: {
                    [`> ${token.antCls}-tabs-nav`]: {
                        marginBottom: 0,
                    },

                    [`&${token.componentCls}-tab-border > ${token.antCls}-tabs-nav > ${token.antCls}-tabs-nav-wrap > ${token.antCls}-tabs-nav-list > ${token.antCls}-tabs-tab-active`]: {
                        borderLeft: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,
                        borderRight: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,
                        borderTop: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,
                    },

                    [`&${token.componentCls}-content-border > ${token.antCls}-tabs-body-holder > ${token.antCls}-tabs-body`]: {
                        border: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,
                        borderRadius: `0 ${token.borderRadiusLG}px ${token.borderRadiusLG}px ${token.borderRadiusLG}px`,
                        marginTop: -1,
                    }
                },

                [`&${token.antCls}-tabs-bottom`]: {
                    [`> ${token.antCls}-tabs-nav`]: {
                        marginTop: 0,
                    },

                    [`&${token.componentCls}-tab-border > ${token.antCls}-tabs-nav > ${token.antCls}-tabs-nav-wrap > ${token.antCls}-tabs-nav-list > ${token.antCls}-tabs-tab-active`]: {
                        borderLeft: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,
                        borderRight: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,
                        borderBottom: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,
                    },

                    [`&${token.componentCls}-content-border > ${token.antCls}-tabs-body-holder > ${token.antCls}-tabs-body`]: {
                        border: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,
                        borderRadius: `${token.borderRadiusLG}px ${token.borderRadiusLG}px ${token.borderRadiusLG}px 0`,
                        marginBottom: -1,
                    }
                },

                [`&${token.antCls}-tabs-left`]: {
                    [`&${token.componentCls}-tab-border > ${token.antCls}-tabs-nav > ${token.antCls}-tabs-nav-wrap > ${token.antCls}-tabs-nav-list > ${token.antCls}-tabs-tab-active`]: {
                        borderLeft: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,
                        borderTop: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,
                        borderBottom: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,
                    },

                    [`&${token.componentCls}-content-border > ${token.antCls}-tabs-body-holder > ${token.antCls}-tabs-body`]: {
                        borderRight: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,
                        borderTop: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,
                        borderBottom: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,
                        borderRadius: `0 ${token.borderRadiusLG}px ${token.borderRadiusLG}px ${token.borderRadiusLG}px`,
                    }
                },

                [`&${token.antCls}-tabs-right`]: {
                    [`&${token.componentCls}-tab-border > ${token.antCls}-tabs-nav > ${token.antCls}-tabs-nav-wrap > ${token.antCls}-tabs-nav-list > ${token.antCls}-tabs-tab-active`]: {
                        borderRight: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,
                        borderTop: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,
                        borderBottom: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,
                    },

                    [`&${token.componentCls}-content-border > ${token.antCls}-tabs-body-holder > ${token.antCls}-tabs-body`]: {
                        borderLeft: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,
                        borderTop: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,
                        borderBottom: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,
                        borderRadius: `${token.borderRadiusLG}px 0 ${token.borderRadiusLG}px ${token.borderRadiusLG}px`,
                    }
                }
            },

            [`&${token.componentCls}-top-end`]: {
                [`> ${token.antCls}-tabs`]: {
                    [`&${token.componentCls}-content-border > ${token.antCls}-tabs-body-holder > ${token.antCls}-tabs-body`]: {
                        borderRadius: `${token.borderRadiusLG}px 0 ${token.borderRadiusLG}px ${token.borderRadiusLG}px`,
                        marginTop: -1,
                    }
                }
            },

            [`&${token.componentCls}-bottom-end`]: {
                [`> ${token.antCls}-tabs`]: {
                    [`&${token.componentCls}-content-border > ${token.antCls}-tabs-body-holder > ${token.antCls}-tabs-body`]: {
                        borderRadius: `${token.borderRadiusLG}px ${token.borderRadiusLG}px 0 ${token.borderRadiusLG}px`,
                        marginBottom: -1,
                    }
                }
            },

            [`&${token.componentCls}-top-end, &${token.componentCls}-bottom-end`]: {
                [`> ${token.antCls}-tabs:not(${token.antCls}-tabs-centered) > ${token.antCls}-tabs-nav > ${token.antCls}-tabs-nav-wrap`]: {
                    justifyContent: 'flex-end',
                }
            },

            [`&${token.componentCls}-top, &${token.componentCls}-top-end, &${token.componentCls}-bottom, &${token.componentCls}-bottom-end`]: {
                [`> ${token.antCls}-tabs > ${token.antCls}-tabs-nav::before`]: {
                    borderBottom: 'none',
                }
            },

            [`${token.componentCls}-pane-padding-0`]: {
                padding: 0,
            },

            [`${token.componentCls}-pane-padding-xxs`]: {
                padding: `${token.paddingXXS}px ${token.paddingXXS}px`,
            },

            [`${token.componentCls}-pane-padding-xs`]: {
                padding: `${token.paddingXS}px ${token.paddingXS}px`,
            },

            [`${token.componentCls}-pane-padding-sm`]: {
                padding: `${token.paddingSM}px ${token.paddingSM}px`,
            },

            [`${token.componentCls}-pane-padding-md`]: {
                padding: `${token.paddingMD}px ${token.paddingMD}px`,
            },

            [`${token.componentCls}-pane-padding-lg`]: {
                padding: `${token.paddingLG}px ${token.paddingLG}px`,
            },
        }
    };
}


export function useFieldStyle(prefixCls: string): UseStyleResult {
    return useStyle(`${PackageConst.PACKAGE_NAME}:CardTabs`, (token) => {
        const mesh: ExtraProAliasToken = {
            ...token,
            prefixCls,
            componentCls: `.${prefixCls}`,
        };
        return [buildFieldStyle(mesh)];
    });
}
