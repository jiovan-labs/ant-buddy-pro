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


/**
 * Utilities for locale normalization
 *
 * @author David Hsing
 */
// noinspection JSUnusedGlobalSymbols
export abstract class LocaleUtils {
    /**
     * Convert common locale formats to the language tag used by the components.
     *
     * Both underscore and hyphen forms are accepted, for example: en_US, en-US,
     * zh_CN, zh-CN, zh_Hans, zh-Hans, zh_Hant, zh-Hant, zh_TW, zh-TW and zh_HK.
     * They are converted to en_US, zh_CN or zh_TW by default, or to en-US,
     * zh-CN or zh-TW when bcp47 is true.
     *
     * @param locale the locale to convert
     * @param fallback the locale returned for unsupported values, default en_US
     * @param bcp47 whether to use the BCP 47 hyphen-separated form, default false
     *
     * @returns the converted language tag
     */
    public static toLanguageTag(locale?: string, fallback: string = 'en_US', bcp47: boolean = false): string {
        const value = (locale ?? '').toLowerCase().replace(/[_-]/g, '');
        let result: string;
        if (value.startsWith('zh')) {
            result = (value.includes('hant') || value.includes('tw') || value.includes('hk') || value.includes('mo')) ? 'zh_TW' : 'zh_CN';
        } else if (value.startsWith('en')) {
            result = 'en_US';
        } else {
            result = fallback;
        }
        return bcp47 ? result.replace(/_/g, '-') : result.replace(/-/g, '_');
    }
}
