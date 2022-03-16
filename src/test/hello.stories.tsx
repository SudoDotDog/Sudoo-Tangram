/**
 * @author WMXPY
 * @namespace Tangram
 * @description Hello
 * @override Story
 */

import * as React from 'react';
import { Test } from '../example';

export default {
    title: 'Hello',
    component: Test,
};

export const Hello: React.FC = () => {

    return (<div>
        Hello
        <Test />
    </div>);
};
