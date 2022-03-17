/**
 * @author WMXPY
 * @namespace Tangram
 * @description Container
 */

import * as React from "react";
import { PolygonPoint } from "./declare";
import { TangramSlice } from "./slice";
import { tangramBigLeftInitial, tangramBigTopInitial, tangramMediumInitial, tangramParallelogramInitial, tangramSmallBottomInitial, tangramSmallCenterInitial, tangramSquareInitial } from "./static";

const slices: PolygonPoint[][] = [

    tangramBigLeftInitial,
    tangramBigTopInitial,
    tangramSmallBottomInitial,
    tangramSquareInitial,
    tangramSmallCenterInitial,
    tangramParallelogramInitial,
    tangramMediumInitial,
];

export type TangramContainerProps = {

    readonly className?: string;
    readonly style?: React.CSSProperties;
};

export const TangramContainer: React.FC<TangramContainerProps> = (props: TangramContainerProps) => {

    return (<div
        className={props.className}
        style={props.style}
    >
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 64 64"
            style={{
                overflow: "visible",
            }}
        >
            {slices.map((slice: PolygonPoint[], index: number) => {
                return (<TangramSlice

                    key={index}
                    color={`hsl(${index * 360 / slices.length}, 100%, 50%)`}
                    points={slice}
                />);
            })}
        </svg>
    </div>);
};
