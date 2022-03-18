/**
 * @author WMXPY
 * @namespace Tangram
 * @description Declare
 */

import * as React from "react";

export type PolygonPoint = {

    readonly x: number;
    readonly y: number;
};

export type PolygonTransform = {

    readonly xOffset: number;
    readonly yOffset: number;

    readonly rotation: number;
};

export type PolygonFigure = {

    readonly color: string;
    readonly strokeColor?: string;
};

export type PolygonControl = {

    readonly onClick?: React.MouseEventHandler<SVGPolygonElement>;
    readonly onDrag?: React.MouseEventHandler<SVGPolygonElement>;

    readonly onMouseEnter?: React.MouseEventHandler<SVGPolygonElement>;
    readonly onMouseLeave?: React.MouseEventHandler<SVGPolygonElement>;

    readonly onMouseDown?: React.MouseEventHandler<SVGPolygonElement>;
    readonly onMouseUp?: React.MouseEventHandler<SVGPolygonElement>;
    readonly onMouseMove?: React.
    MouseEventHandler<SVGPolygonElement>;

    readonly onScroll?: React.WheelEventHandler<SVGPolygonElement>;
};

export type TangramTransform = {

    readonly bigLeft: PolygonTransform;
    readonly bigTop: PolygonTransform;
    readonly smallBottom: PolygonTransform;
    readonly square: PolygonTransform;
    readonly smallCenter: PolygonTransform;
    readonly parallelogram: PolygonTransform;
    readonly medium: PolygonTransform;
};

export type TangramFigure = {

    readonly bigLeft: PolygonFigure;
    readonly bigTop: PolygonFigure;
    readonly smallBottom: PolygonFigure;
    readonly square: PolygonFigure;
    readonly smallCenter: PolygonFigure;
    readonly parallelogram: PolygonFigure;
    readonly medium: PolygonFigure;
};

export type TangramControl = {

    readonly bigLeft?: PolygonControl;
    readonly bigTop?: PolygonControl;
    readonly smallBottom?: PolygonControl;
    readonly square?: PolygonControl;
    readonly smallCenter?: PolygonControl;
    readonly parallelogram?: PolygonControl;
    readonly medium?: PolygonControl;
};
