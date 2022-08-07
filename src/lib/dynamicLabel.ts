import type { DynamicLabelOptions } from "../types/options";
import type { Info } from "../types/info";

import { format } from "logform";
import { SPLAT } from "triple-beam";
import { LABEL } from "./constants";

/**
 * @internal
 */
export const dynamicLabel = format((info: Info, opts: DynamicLabelOptions) => {
    // Check if the label is set in the options object.
    if (opts.label) info.label = opts.label;

    // Check if the label is set in the info object.
    if (info[LABEL]) info.label = info[LABEL];

    // If the info object has a SPLAT property, look for the last item in the array.
    // If it is an object, then check if it has a LABEL property.
    // If it does, then use it as the label.
    const splat = (info[SPLAT] || info.splat) as unknown[] | undefined;
    if (splat != undefined && typeof splat[splat.length - 1] === "object") {
        const splatData = splat[splat.length - 1] as { [LABEL]?: string };

        if (splatData[LABEL] != undefined) {
            info.label = splatData[LABEL];

            if (Reflect.ownKeys(splatData).length - 1 === 0) {
                // Delete the splat data if it only contains the label.
                splat.pop();

                // If the splat array is now empty, delete the SPLAT property.
                if (splat.length === 0) {
                    delete info[SPLAT];
                    delete info.splat;
                }
            } else {
                // Otherwise, delete the label property.
                delete splatData[LABEL];
            }
        }
    }

    return info;
});
