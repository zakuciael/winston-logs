import type { TransformableInfo } from "logform";
import type { MESSAGE, SPLAT } from "triple-beam";
import type { LABEL } from "../lib/constants";

/**
 * @internal
 */
export interface Info extends TransformableInfo {
    [MESSAGE]?: string | Record<string, unknown>;
    [SPLAT]?: unknown[];
    [LABEL]?: string;
    label?: string;
    timestamp?: string;
    stack?: string;
}
