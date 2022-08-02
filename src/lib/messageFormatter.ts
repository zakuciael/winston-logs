import type { MessageFormatterOptions } from "../types/options";
import type { Info } from "../types/info";

import { configs, MESSAGE, SPLAT } from "triple-beam";
import { format } from "logform";
import chalk from "chalk";

/**
 * @internal
 */
export const messageFormatter = format((info: Info, opts: MessageFormatterOptions) => {
    const colors: MessageFormatterOptions["colors"] = {
        ...configs.npm.colors,
        info: "blueBright",
        debug: "yellowBright",
        error: "redBright",
        warn: "grey",
        ...(opts.colors ?? {}),
    };

    const labelColors: MessageFormatterOptions["labelColors"] = {
        0: "greenBright",
        ...(opts.labelColors ?? {}),
    };

    const labelString =
        info.label != undefined
            ? (Array.isArray(info.label) ? info.label : [info.label])
                  .map((label, index) =>
                      opts.colorize
                          ? chalk`{bold [}{${labelColors[index] ?? "greenBright"} ${label}}{bold ]}`
                          : `[${label}]`
                  )
                  .join("")
            : "";

    const messageString =
        info.stack != undefined
            ? info[SPLAT] != undefined &&
              info[SPLAT].length !== 0 &&
              info[SPLAT][0] instanceof Error
                ? `${info.message.split(info[SPLAT][0].message)[0]}\n${info.stack}`
                : info.stack
            : info.message;

    if (opts.colorize) {
        info[MESSAGE] =
            chalk`{grey ${info.timestamp}} ` +
            chalk`{bold [}{${colors[info.level]} ${info.level.toUpperCase()}}{bold ]}` +
            `${labelString} ${messageString}`;
    } else {
        info[MESSAGE] =
            `${info.timestamp} ` +
            `[${info.level.toUpperCase()}]` +
            `${labelString} ${messageString}`;
    }

    return info;
});
