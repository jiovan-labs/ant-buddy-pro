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


import { ReadonlyMultiKeyMap } from '@jiovan-labs/ts-multi-map';


export const intlLocales = ReadonlyMultiKeyMap.of([
    [['en_US', 'invalidFormula'], 'Invalid Formula'],

    [['zh_CN', 'invalidFormula'], '无效的数学公式'],

    [['zh_TW', 'invalidFormula'], '無效的數學公式'],
]);


/**
 * 补齐 MathLive 中文语言包中缺失的话术，key 使用 MathLive 原始标识。
 * 英文语言包已完整，无需在此重复。
 */
export const extraLocales = ReadonlyMultiKeyMap.of([
    [['zh_CN', 'tooltip.cut to clipboard'], '剪切到剪贴板'],
    [['zh_CN', 'tooltip.paste from clipboard'], '从剪贴板粘贴'],
    [['zh_CN', 'tooltip.menu'], '菜单'],
    [['zh_CN', 'menu.insert'], '插入'],
    [['zh_CN', 'menu.insert.abs'], '绝对值'],
    [['zh_CN', 'menu.insert.nth-root'], 'n 次根'],
    [['zh_CN', 'menu.insert.log-base'], '以 a 为底的对数'],
    [['zh_CN', 'menu.insert.heading-calculus'], '微积分'],
    [['zh_CN', 'menu.insert.derivative'], '导数'],
    [['zh_CN', 'menu.insert.nth-derivative'], 'n 阶导数'],
    [['zh_CN', 'menu.insert.integral'], '积分'],
    [['zh_CN', 'menu.insert.sum'], '求和'],
    [['zh_CN', 'menu.insert.product'], '求积'],
    [['zh_CN', 'menu.insert.heading-complex-numbers'], '复数'],
    [['zh_CN', 'menu.insert.modulus'], '模'],
    [['zh_CN', 'menu.insert.argument'], '辐角'],
    [['zh_CN', 'menu.insert.real-part'], '实部'],
    [['zh_CN', 'menu.insert.imaginary-part'], '虚部'],
    [['zh_CN', 'menu.insert.conjugate'], '共轭'],
    [['zh_CN', 'menu.copy-as-typst'], '复制为 Typst'],

    [['zh_TW', 'tooltip.cut to clipboard'], '剪切到剪貼簿'],
    [['zh_TW', 'tooltip.paste from clipboard'], '從剪貼簿貼上'],
    [['zh_TW', 'tooltip.menu'], '選單'],
    [['zh_TW', 'menu.insert'], '插入'],
    [['zh_TW', 'menu.insert.abs'], '絕對值'],
    [['zh_TW', 'menu.insert.nth-root'], 'n 次根'],
    [['zh_TW', 'menu.insert.log-base'], '以 a 為底的對數'],
    [['zh_TW', 'menu.insert.heading-calculus'], '微積分'],
    [['zh_TW', 'menu.insert.derivative'], '導數'],
    [['zh_TW', 'menu.insert.nth-derivative'], 'n 階導數'],
    [['zh_TW', 'menu.insert.integral'], '積分'],
    [['zh_TW', 'menu.insert.sum'], '求和'],
    [['zh_TW', 'menu.insert.product'], '求積'],
    [['zh_TW', 'menu.insert.heading-complex-numbers'], '複數'],
    [['zh_TW', 'menu.insert.modulus'], '模'],
    [['zh_TW', 'menu.insert.argument'], '輻角'],
    [['zh_TW', 'menu.insert.real-part'], '實部'],
    [['zh_TW', 'menu.insert.imaginary-part'], '虛部'],
    [['zh_TW', 'menu.insert.conjugate'], '共軛'],
    [['zh_TW', 'menu.copy-as-typst'], '複製為 Typst'],
]);
