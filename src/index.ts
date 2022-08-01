import type { FormatOptions } from "./types/options";

import { messageFormatter } from "./lib/messageFormatter";
import { dynamicLabel } from "./lib/dynamicLabel";
import { prettyPrint } from "./lib/prettyPrint";
import { splat } from "./lib/splat";

import { Format, format } from "logform";

export type { FormatOptions, Colors } from "./types/options";
export { LABEL } from "./lib/constants";

export const elegantFormat = (opts?: FormatOptions): Format => {
    const colorize = opts?.colorize ?? true;

    return format.combine(
        format.timestamp({ format: "MMM D HH:mm:ss" }),
        format.errors({ stack: true }),
        dynamicLabel({ label: opts?.label }),
        splat({ colorize }),
        prettyPrint({ depth: 3, colorize }),
        messageFormatter({ colors: opts?.colors, colorize })
    );
};

export const logsFormat = elegantFormat();
