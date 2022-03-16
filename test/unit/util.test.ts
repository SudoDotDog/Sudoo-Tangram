/**
 * @author WMXPY
 * @namespace Tangram
 * @description Util
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { isLetter } from "../../src/util";

describe('Given [Util] helper functions', (): void => {

    const chance: Chance.Chance = new Chance('tangram-util');

    it('should be able to detect if its letter', (): void => {

        const key: string = chance.string();

        const result: boolean = isLetter(key);

        expect(result).to.be.true;
    });
});
