/**
 * @author WMXPY
 * @namespace Playground
 * @description Playground
 */

import * as React from "react";
import { tangramInitialFigurePreset, tangramInitialTransformPreset } from "../preset/initial";
import { TangramContainer } from "../tangram/container";
import { PolygonControl, TangramTransform } from "../tangram/declare";

export type TangramPlaygroundProps = {

    readonly initialTransform: TangramTransform;

    readonly safePadding?: number;

    readonly className?: string;
    readonly style?: React.CSSProperties;
};

export const TangramPlayground: React.FC<TangramPlaygroundProps> = (props: TangramPlaygroundProps) => {

    const [transform, setTransform] = React.useState<TangramTransform>({
        ...tangramInitialTransformPreset,
        ...props.initialTransform,
    });

    const transformCopy = React.useRef<TangramTransform>(transform);
    const editing = React.useRef<null | keyof TangramTransform>(null);

    React.useEffect(() => {

        const handleScroll = (event: WheelEvent) => {

            if (editing.current === null) {
                return;
            }

            transformCopy.current = {
                ...transformCopy.current,
                [editing.current]: {
                    ...transformCopy.current[editing.current],
                    rotation: transformCopy.current[editing.current].rotation + (event.deltaY > 0 ? -4 : 4),
                },
            };

            setTransform(transformCopy.current);
        };

        window.addEventListener('wheel', handleScroll);

        return () => {
            window.removeEventListener('wheel', handleScroll);
        }
    }, []);

    const createControl = (key: keyof TangramTransform): PolygonControl => {

        return {
            onMouseDown: (event) => {
                editing.current = key;
            },
            onMouseUp: (event) => {
                if (editing.current !== key) {
                    return;
                }
                editing.current = null;
            },
            onMouseLeave: (event) => {
                if (editing.current !== key) {
                    return;
                }
                editing.current = null;
            },
            onMouseMove: (event) => {

                if (editing.current !== key) {
                    return;
                }

                transformCopy.current = {
                    ...transform,
                    [key]: {
                        ...transform[key],
                        xOffset: transform[key].xOffset + (event.movementX / 4),
                        yOffset: transform[key].yOffset + (event.movementY / 4),
                    }
                };
                setTransform(transformCopy.current);
            },
        };
    };

    return (<TangramContainer

        transform={transform}
        figure={tangramInitialFigurePreset}
        control={{
            bigLeft: createControl('bigLeft'),
            bigTop: createControl('bigTop'),
            smallBottom: createControl('smallBottom'),
            square: createControl('square'),
            smallCenter: createControl('smallCenter'),
            parallelogram: createControl('parallelogram'),
            medium: createControl('medium'),
        }}

        safePadding={props.safePadding}
        className={props.className}
        style={props.style}
    />)
};
