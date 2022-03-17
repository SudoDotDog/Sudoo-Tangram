/**
 * @author WMXPY
 * @namespace SVG
 * @description Slice
 */

import * as React from 'react';

export type TangramBoxProps = {

    readonly size: number;
};

export const TangramBox: React.FC<TangramBoxProps> = (props: TangramBoxProps) => {

    return (<svg
        width={props.size}
        height={props.size}
        viewBox="0 0 64 64"
        style={{
            overflow: 'visible',
        }}
    >
        <polygon
            points="0,0 0,64 32,32"
            style={{
                fill: 'red'
            }}
        />
        <polygon
            points="0,0 64,0 32,32"
            style={{
                fill: 'purple'
            }}
        />
        <polygon
            points="0,64 16,48 32,64"
            style={{
                fill: 'blue'
            }}
        />
        <polygon
            points="16,48 32,64 48,48 32,32"
            style={{
                fill: 'cyan'
            }}
        />
        <polygon
            points="32,32 48,16 48,48"
            style={{
                fill: 'yellow'
            }}
        />
        <polygon
            points="48,16 64,0 64,32 48,48"
            style={{
                fill: 'green'
            }}
        />
        <polygon
            points="32,64 64,64 64,32"
            style={{
                fill: 'orange'
            }}
        />
    </svg>);
};
