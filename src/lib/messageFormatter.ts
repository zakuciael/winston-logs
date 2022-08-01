import type { MessageFormatterOptions } from "../types/options";
import type { Info } from "../types/info";

import { configs, MESSAGE } from "triple-beam";
import { format } from "logform";
import chalk from "chalk";

export const messageFormatter = format((info: Info, opts: MessageFormatterOptions) => {
    const colors: MessageFormatterOptions["colors"] = {
        ...configs.npm.colors,
        info: "blueBright",
        debug: "yellowBright",
        error: "redBright",
        warn: "grey",
        ...(opts.colors ?? {}),
    };

    if (opts.colorize) {
        info[MESSAGE] =
            chalk`{grey ${info.timestamp}} ` +
            chalk`{bold [}{${colors[info.level]} ${info.level.toUpperCase()}}{bold ]}` +
            (info.label ? chalk`{bold [}{greenBright ${info.label}}{bold ]} ` : " ") +
            (typeof info.stack === "string" ? info.stack : info.message);
    } else {
        info[MESSAGE] =
            `${info.timestamp} ` +
            `[${info.level.toUpperCase()}]` +
            (info.label ? `[${info.label}] ` : " ") +
            (typeof info.stack === "string" ? info.stack : info.message);
    }

    return info;
});
