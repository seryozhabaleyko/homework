const mybind = (func, context, ...args) => (...rest) => func.apply(context, [...args, ...rest]);

const mybindd = (func, context, ...args) => (...rest) => func.call(context, ...args, ...rest);

const mul = (a, b) => a * b;

const foo = mybind(mul, null, 3, 2);
const bar = mybindd(mul, null, 3);

console.log(foo());
console.log(bar(2));
