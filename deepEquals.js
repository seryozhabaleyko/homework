function isEqual(a, b) {
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);
    if (aProps.length != bProps.length) {
        return false;
    }
    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];
        if (a[propName] !== b[propName]) {
            return false;
        }
    }
    return true;
}

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
