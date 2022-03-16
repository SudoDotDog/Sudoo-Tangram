import * as React from 'react';

export const Test = (args) => {

    return <div
        onClick={() => args.click(1)}
    >{args.text}</div>;
};