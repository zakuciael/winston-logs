import type { FormatOptions } from "./types/options";

import { messageFormatter } from "./lib/messageFormatter";
import { prettyPrint } from "./lib/prettyPrint";
import { splat } from "./lib/splat";

import { Format, format } from "logform";

export const elegantFormat = (opts?: FormatOptions): Format => {
    const colorize = opts?.colorize ?? true;

    return format.combine(
        format.timestamp({ format: "MMM D HH:mm:ss" }),
        format.errors({ stack: true }),
        splat({ colorize }),
        prettyPrint({ depth: 3, colorize }),
        messageFormatter({ colors: opts?.colors, colorize })
    );
};

export const logsFormat = elegantFormat();
