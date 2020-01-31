const isObject = (obj) => obj && typeof obj === 'object';
const isArray = (obj) => Array.isArray(obj);

function deepEquals(a, b) {
    let result = false;

    if (isObject(a)) {
        result = isObjEquals(a, b);
    } else {
        if (isArray(a)) {
            result = isArrayEquals(a, b);
        } else {
            result = a === b;
        }
    }

    return result;
}


function isObjEquals(a, b) {
    let result = isObject(a) && isObject(b);

    if (result) {
        result = Object.keys(a).length === Object.keys(b).length;
        if (result) {
            for (const key in a) {
                if (!deepEquals(a[key], b[key])) {
                    result = false;
                    break;
                }
            }
        }
    }

    return result;
}

function isArrayEquals(a, b) {
    let result = isArray(a) && isArray(b);

    if (result) {
        result = a.length === b.length;
        if (result) {
            for (let i = 0; i < a.length; i++) {
                if (!deepEquals(a[i], b[i])) {
                    result = false;
                    break;
                }
            }
        }
    }

    return result;
}


let a = { value: { a: 13 }, b: 'abc' };
let b = { value: { a: 13 }, b: 'abc' };

const deepEqualsOrderMatters = (a, b) => JSON.stringify(a) === JSON.stringify(b);

deepEquals(a, b); // true
deepEqualsOrderMatters(a, b); // true
