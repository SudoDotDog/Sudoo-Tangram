/**
 * @author WMXPY
 * @namespace Tangram
 * @description Slice
 */

import * as React from "react";
import { PolygonControl, PolygonFigure, PolygonPoint, PolygonTransform } from "./declare";

export type TangramSliceProps = {

    readonly transform: PolygonTransform;
    readonly figure: PolygonFigure;
    readonly control?: PolygonControl;

    readonly points: PolygonPoint[];
};

export const TangramSlice: React.FC<TangramSliceProps> = (props: TangramSliceProps) => {

    const pointsString: string = props.points
        .map((point: PolygonPoint) => {
            return `${point.x},${point.y}`;
        })
        .join(" ");

    const transformList: string[] = [];

    if (typeof props.transform.xOffset === 'number') {
        transformList.push(`translateX(${props.transform.xOffset}px)`);
    }

    if (typeof props.transform.yOffset === 'number') {
        transformList.push(`translateY(${props.transform.yOffset}px)`);
    }

    if (typeof props.transform.rotation === 'number') {
        transformList.push(`rotate(${props.transform.rotation}deg)`);
    }

    const style: React.CSSProperties = {

        fill: props.figure.color,
        transform: transformList.join(" "),
    };

    if (props.figure.strokeColor) {

        style.stroke = props.figure.strokeColor;
        style.strokeWidth = "0.5";
    }

    const fixedControl: PolygonControl = {
        ...props.control,
    };

    return (<polygon
        points={pointsString}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={style}

        onMouseEnter={fixedControl.onMouseEnter}
        onMouseLeave={fixedControl.onMouseLeave}

        onClick={fixedControl.onClick}
        onDrag={fixedControl.onDrag}

        onMouseDown={fixedControl.onMouseDown}
        onMouseUp={fixedControl.onMouseUp}
        onMouseMove={fixedControl.onMouseMove}

        onScroll={fixedControl.onScroll}
    />);
};
