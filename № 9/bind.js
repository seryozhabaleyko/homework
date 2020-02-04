const mybind = (func, context, ...args) => (...rest) => func.apply(context, [...args, ...rest]);

const sum = (a, b) => a + b;

const foo = mybind(sum, null, 3, 3);

foo(2,3,4,22,2); // 6
