import type { PrettyPrintOptions } from "../types/options";
import type { Info } from "../types/info";

import { format } from "logform";
import { inspect } from "util";

/**
 * @internal
 */
export const prettyPrint = format((info: Info, opts: PrettyPrintOptions) => {
    if (typeof info.message === "object") {
        info.message = inspect(info.message, false, opts.depth || null, opts.colorize || false);
    }

    return info;
});
