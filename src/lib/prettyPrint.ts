import { format } from "logform";
import { inspect } from "util";

export const prettyPrint = format((info, opts: { depth?: number; colorize?: boolean }) => {
    if (typeof info.message === "object") {
        info.message = inspect(info.message, false, opts.depth || null, opts.colorize || false);
    }

    return info;
});
