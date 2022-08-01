import type { Color } from "chalk";

export interface Colors {
    [key: string]: typeof Color;
}

/**
 * @internal
 */
export interface SplatterOptions {
    colorize?: boolean;
}

/**
 * @internal
 */
export interface PrettyPrintOptions {
    depth?: number;
    colorize?: boolean;
}

/**
 * @internal
 */
export interface MessageFormatterOptions {
    colorize?: boolean;
    colors?: Colors;
}

/**
 * @internal
 */
export interface DynamicLabelOptions {
    label?: string;
}

export interface FormatOptions {
    colorize?: boolean;
    colors?: Colors;
    label?: string;
}
