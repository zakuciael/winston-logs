import type { Color } from "chalk";

export interface Colors {
    [key: string]: typeof Color;
}

export interface LabelColors {
    [key: number]: typeof Color;
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
    labelColors?: LabelColors;
}

/**
 * @internal
 */
export interface DynamicLabelOptions {
    label?: string | string[];
}

export interface FormatOptions {
    colorize?: boolean;
    colors?: Colors;
    labelColors?: LabelColors;
    label?: string | string[];
}
