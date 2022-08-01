import type { TransformableInfo } from "logform";
import type { MESSAGE, SPLAT } from "triple-beam";

export interface Info extends TransformableInfo {
    [MESSAGE]?: keyof TransformableInfo;
    [SPLAT]?: keyof TransformableInfo;
    label?: keyof TransformableInfo;
    timestamp?: keyof TransformableInfo;
    stack?: keyof TransformableInfo;
}
