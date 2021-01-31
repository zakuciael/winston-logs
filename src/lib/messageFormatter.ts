import { configs } from "triple-beam";
import chalk, { Chalk } from "chalk";
import { format } from "logform";
import { level } from "winston";

export const messageFormatter = format.printf((info) => {
    const colors: { [key: string]: Chalk } = {
        ...Object.keys(configs.npm.colors).reduce<{ [key: string]: Chalk }>((acc, key) => {
            acc[key] = chalk.keyword(configs.npm.colors[key]);
            return acc;
        }, {}),
        info: chalk.blueBright,
        debug: chalk.yellowBright,
        error: chalk.redBright,
        warn: chalk.grey,
    };

    return chalk`{grey ${info.timestamp}} {bold [}${colors[info.level](
        info.level.toUpperCase()
    )}{bold ]}${info.label ? chalk`{bold [}{greenBright ${info.label}}{bold ]}` : ""} ${
        info.stack && configs.npm.levels[level] > -1 ? info.stack : info.message
    }`;
});
