import type { SplatterOptions } from "../types/options";
import type { Info } from "../types/info";

import { Format, TransformableInfo } from "logform";
import { formatWithOptions } from "util";
import { SPLAT } from "triple-beam";

const formatRegExp = /%[scdjifoO%]/g;
const escapedPercent = /%%/g;

class Splatter implements Format {
    options: SplatterOptions;

    constructor(opts: SplatterOptions) {
        this.options = opts;
    }

    public transform(info: Info): TransformableInfo | boolean {
        const splat = info[SPLAT] || info.splat;
        const msg = info.message;

        if (!splat || !splat.length) return info;
        const tokens = msg && msg.match && msg.match(formatRegExp);

        if (!tokens && (splat || splat.length)) {
            const metas = splat.length > 1 ? splat.splice(0) : splat;

            if (metas.length)
                for (let i = 0; i < metas.length; i++) {
                    Object.assign(info, metas[i]);
                }

            return info;
        }

        return tokens ? this._splat(info, tokens) : info;
    }

    private _splat(info: Info, tokens: string[]): TransformableInfo {
        const msg = info.message;
        const splat = info[SPLAT] || info.splat || [];
        const percents = msg.match(escapedPercent);
        const escapes = (percents && percents.length) || 0;

        const expectedSplat = tokens.length - escapes;
        const extraSplat = expectedSplat - splat.length;
        const metas = extraSplat < 0 ? splat.splice(extraSplat, -1 * extraSplat) : [];

        if (metas.length)
            for (let i = 0; i < metas.length; i++) {
                Object.assign(info, metas[i]);
            }

        info.message = formatWithOptions({ colors: this.options.colorize || false }, msg, ...splat);
        return info;
    }
}

export const splat = (opts: SplatterOptions): Splatter => new Splatter(opts);
