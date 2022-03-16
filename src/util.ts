/**
 * @author WMXPY
 * @namespace Tangram
 * @description Util
 */

export const isLetter = (key: string): boolean => {

    return /^[a-zA-Z0-9]+$/.test(key);
}
