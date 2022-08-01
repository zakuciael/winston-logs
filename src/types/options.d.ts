import type { Color } from "chalk";

export interface SplatterOptions {
    colorize?: boolean;
}

export interface PrettyPrintOptions {
    depth?: number;
    colorize?: boolean;
}

export interface MessageFormatterOptions {
    colorize?: boolean;
    colors?: { [key: string]: typeof Color };
}

export interface FormatOptions {
    colorize?: boolean;
    colors?: MessageFormatterOptions["colors"];
}
