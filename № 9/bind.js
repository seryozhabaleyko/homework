const mybind = (fn, context, ...args) => (...rest) => fn.apply(context, [...args, ...rest]);

const mybindd = (fn, context, ...args) => (...rest) => fn.call(context, ...args, ...rest);

const mul = (a, b) => a * b;

const foo = mybind(mul, null, 3, 2);
const bar = mybindd(mul, null, 3);

console.log(foo());
console.log(bar(2));
