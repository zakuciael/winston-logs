import { messageFormatter } from "./lib/messageFormatter";
import { prettyPrint } from "./lib/prettyPrint";
import { splat } from "./lib/splat";
import { format } from "logform";

export const logsFormat = format.combine(
    format.timestamp({ format: "MMM D HH:mm:ss" }),
    format.errors({ stack: true }),
    splat({ colorize: true }),
    prettyPrint({ depth: 3, colorize: true }),
    messageFormatter
);
