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
    return {
        [`${token.componentCls}`]: {
            [`&-popup`]: {
                minWidth: 320,

                [`> ${token.antCls}-dropdown-menu > ${token.antCls}-dropdown-menu-item`]: {
                    paddingLeft: `${token.paddingXS}px !important`,
                    paddingRight: `${token.paddingXS}px !important`,

                    [`&:hover`]: {
                        backgroundColor: 'unset !important',
                        cursor: 'unset !important',
                    }
                },

                [`${token.componentCls}-tabs`]: {
                    [`${token.antCls}-tabs-content-top ${token.antCls}-tabs-tab`]: {
                        paddingTop: 2,
                    },

                    [`${token.antCls}-tabs-content-left ${token.antCls}-tabs-tabpane`]: {
                        paddingLeft: token.paddingXS,
                    },

                    [`${token.antCls}-tabs-content-right ${token.antCls}-tabs-tabpane`]: {
                        paddingRight: token.paddingXS,
                    },

                    [`${token.componentCls}-tab-list-wrapper`]: {
                        maxHeight: 400,
                        overflow: 'auto',

                        [`&::-webkit-scrollbar`]: {
                            display: 'none',
                        },
                    },

                    [`${token.componentCls}-tab-list`]: {
                        [`&${token.componentCls}-tab-list-bordered`]: {
                            border: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,
                            borderRadius: token.borderRadius,
                        },

                        // Listy 默认已为每项写入 borderBottom（文档「基础用法」效果），这里只去掉最后一项的底线
                        [`${token.antCls}-listy-item:last-child`]: {
                            borderBottom: 'none',
                        },
                    },

                    [`${token.componentCls}-listy-item`]: {
                        cursor: 'pointer',
                        transition: 'all 0.3s',

                        [`&:hover`]: {
                            backgroundColor: token.controlItemBgActive,
                        },
                    },

                    [`${token.componentCls}-list-item`]: {
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: token.paddingXS,
                        overflow: 'hidden',

                        [`&&-read`]: {
                            opacity: 0.4,
                        },

                        [`&-avatar-wrapper`]: {
                            flex: 'none',
                        },

                        [`&-avatar`]: {
                            backgroundColor: token.colorBgContainer,
                            marginTop: token.marginXXS,
                        },

                        [`&-icon`]: {
                            fontSize: 32,
                        },

                        [`&-meta`]: {
                            width: '100%',
                        },

                        [`&-title`]: {
                            marginBottom: token.marginXS,
                            fontWeight: 'normal',
                        },

                        [`&-description`]: {
                            fontSize: token.fontSize - 1,
                        },

                        [`&-timestamp`]: {
                            marginTop: token.marginXXS,
                            fontSize: token.fontSizeSM,
                            color: token.colorTextTertiary,
                        },

                        [`&-extra`]: {
                            float: 'right',
                            marginTop: -1.5,
                            marginRight: 0,
                            color: token.colorTextSecondary,
                            fontWeight: 'normal',
                        },
                    },

                    [`${token.componentCls}-builtin-footer`]: {
                        height: 38,
                        color: token.colorPrimaryText,
                        display: 'flex',
                        alignItems: 'start',
                        textAlign: 'center',
                        transition: 'all 0.3s',

                        [`&${token.componentCls}-builtin-footer-bordered`]: {
                            borderTop: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,
                            borderRadius: `0 0 ${token.borderRadius}px ${token.borderRadius}px`,
                        },

                        [`${token.componentCls}-action-button`]: {
                            display: 'flex',
                            flex: 1,
                            cursor: 'pointer',
                            height: '100%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s',
                            userSelect: 'none',

                            [`&:hover`]: {
                                backgroundColor: token.controlItemBgHover,
                                color: token.colorPrimaryHover,
                            },

                            [`&:only-child:hover`]: {
                                borderBottomLeftRadius: token.borderRadius,
                                borderBottomRightRadius: token.borderRadius,
                            },

                            [`&:not(:only-child):first-child`]: {
                                [`&:hover`]: {
                                    borderBottomLeftRadius: token.borderRadius,
                                }
                            },

                            [`&:not(:only-child):last-child`]: {
                                borderLeft: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,

                                [`&:hover`]: {
                                    borderBottomRightRadius: token.borderRadius,
                                }
                            }
                        }
                    }
                }
            }
        }
    };
}


export function useFieldStyle(prefixCls: string): UseStyleResult {
    return useStyle(`${PackageConst.PACKAGE_NAME}:NotifyBadge`, (token) => {
        const mesh: ExtraProAliasToken = {
            ...token,
            prefixCls,
            componentCls: `.${prefixCls}`,
        };
        return [buildFieldStyle(mesh)];
    });
}
