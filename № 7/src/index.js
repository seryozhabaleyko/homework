const isObject = (obj) => obj && typeof obj === 'object';
const isArray = (obj) => Array.isArray(obj);

function deepEquals(a, b) {
    
    if (a === b) {
        return true;
    }

    let result = isObject(a) && isObject(b) && Object.keys(a).length === Object.keys(b).length;

    if (result) {
        for (const key in a) {
            if (!deepEquals(a[key], b[key])) {
                result = false;
                break;
            }
        }
    } 

    return result;
}


const a = {
    value: { a: 13 },
    b: 'abc',
};

const b = {
    value: { a: 13 },
    b: 'abc',
};

const deepEqualsOrderMatters = (a, b) => JSON.stringify(a) === JSON.stringify(b);

deepEquals(a, b); // true
deepEqualsOrderMatters(a, b); // true
