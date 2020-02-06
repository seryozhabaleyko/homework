const mybind = (func, context, ...args) => (...rest) => func.apply(context, [...args, ...rest]);

const sum = (a, b) => a + b;

const foo = mybind(sum, null, 3, 3);

foo(2,3,4,22,2); // 6


var mybind = function mybind(func, context) {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
    }

    return function () {
        for (var _len2 = arguments.length, rest = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            rest[_key2] = arguments[_key2];
        }

        return func.apply(context, [].concat(args, rest));
    };
};
