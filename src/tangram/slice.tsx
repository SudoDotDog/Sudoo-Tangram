/**
 * @author WMXPY
 * @namespace Tangram
 * @description Slice
 */

import * as React from "react";
import { PolygonPoint } from "./declare";

export type TangramSliceProps = {

    readonly color: string;
    readonly points: PolygonPoint[];

    readonly strokeColor?: string;
};

export const TangramSlice: React.FC<TangramSliceProps> = (props: TangramSliceProps) => {

    const pointsString: string = props.points.map((point: PolygonPoint) => {
        return `${point.x},${point.y}`;
    }).join(" ");

    const style: React.CSSProperties = {
        fill: props.color,
    };

    if (props.strokeColor) {
        style.stroke = props.strokeColor;
        style.strokeWidth = "0.5";
    }

    return (<polygon
        points={pointsString}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={style}
    />);
};
