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
 * Utilities for size resolution
 *
 * @author David Hsing
 */
// noinspection JSUnusedGlobalSymbols
export abstract class SizeUtils {
    private static readonly DEFAULT_BREAKPOINTS = ['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs'];

    /**
     * Resolve a size definition to a single number based on the active screens.
     *
     * A number is returned as-is. A string is looked up in options.semantic.
     * An object is treated as breakpoint -> size and is resolved from the
     * largest active breakpoint to the smallest. The smallest breakpoint is
     * used when no screen information is available (for example during SSR).
     *
     * @param size the size definition to resolve
     * @param screens the active breakpoint map, e.g. the result of Grid.useBreakpoint()
     * @param options breakpoints, semantic size names and fallback value
     *
     * @returns the resolved size
     */
    public static resolveResponsiveSize(
        size?: number | string | Record<string, number | undefined>,
        screens?: Record<string, boolean | undefined>,
        options?: {
            breakpoints?: string[];
            semantic?: Record<string, number | undefined>;
            fallback?: number;
        }
    ): number {
        const breakpoints = options?.breakpoints ?? SizeUtils.DEFAULT_BREAKPOINTS;
        const fallback = options?.fallback ?? 0;

        if (typeof size === 'number') {
            return size;
        }
        if (typeof size === 'string') {
            return options?.semantic?.[size] ?? fallback;
        }
        if (!size) {
            return fallback;
        }

        for (const breakpoint of breakpoints) {
            if (screens?.[breakpoint] && size[breakpoint] !== undefined) {
                return size[breakpoint] as number;
            }
        }
        const smallest = breakpoints[breakpoints.length - 1];
        return size[smallest] ?? fallback;
    }
}
