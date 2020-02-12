const isObject = (obj) => obj && typeof obj === 'object';

function deepEquals(a, b) {
    
    if (a === b) {
        return true;
    } else if (isObject(a) && isObject(b) && Object.keys(a).length === Object.keys(b).length) {
        for (const key in a) {
            if (!deepEquals(a[key], b[key])) {
                return false;
            }
        }
        return true;
    } 

    return false;
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
