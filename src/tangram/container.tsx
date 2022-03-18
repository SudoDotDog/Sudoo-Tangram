/**
 * @author WMXPY
 * @namespace Tangram
 * @description Container
 */

import * as React from "react";
import { TangramControl, TangramFigure, TangramTransform } from "./declare";
import { TangramSlice } from "./slice";
import { tangramBigLeftInitial, tangramBigTopInitial, tangramMediumInitial, tangramParallelogramInitial, tangramSmallBottomInitial, tangramSmallCenterInitial, tangramSquareInitial } from "./static";

export type TangramContainerProps = {

    readonly transform: TangramTransform;
    readonly figure: TangramFigure;
    readonly control?: TangramControl;

    readonly safePadding?: number;

    readonly className?: string;
    readonly style?: React.CSSProperties;
};

export const TangramContainer: React.FC<TangramContainerProps> = (props: TangramContainerProps) => {

    const fixedControl: TangramControl = {
        ...props.control,
    };

    const viewBox: string[] = typeof props.safePadding === 'number' ? [
        `-${props.safePadding / 2}`,
        `-${props.safePadding / 2}`,
        `${props.safePadding + 64}`,
        `${props.safePadding + 64}`,
    ] : ['0', '0', '64', '64'];

    return (<div
        className={props.className}
        style={props.style}
    >
        <svg
            width="100%"
            height="100%"
            viewBox={viewBox.join(" ")}
        >
            <TangramSlice
                transform={props.transform.bigLeft}
                figure={props.figure.bigLeft}
                control={fixedControl.bigLeft}
                points={tangramBigLeftInitial}
            />
            <TangramSlice
                transform={props.transform.bigTop}
                figure={props.figure.bigTop}
                control={fixedControl.bigTop}
                points={tangramBigTopInitial}
            />
            <TangramSlice
                transform={props.transform.smallBottom}
                figure={props.figure.smallBottom}
                control={fixedControl.smallBottom}
                points={tangramSmallBottomInitial}
            />
            <TangramSlice
                transform={props.transform.square}
                figure={props.figure.square}
                control={fixedControl.square}
                points={tangramSquareInitial}
            />
            <TangramSlice
                transform={props.transform.smallCenter}
                figure={props.figure.smallCenter}
                control={fixedControl.smallCenter}
                points={tangramSmallCenterInitial}
            />
            <TangramSlice
                transform={props.transform.parallelogram}
                figure={props.figure.parallelogram}
                control={fixedControl.parallelogram}
                points={tangramParallelogramInitial}
            />
            <TangramSlice
                transform={props.transform.medium}
                figure={props.figure.medium}
                control={fixedControl.medium}
                points={tangramMediumInitial}
            />
        </svg>
    </div>);
};
