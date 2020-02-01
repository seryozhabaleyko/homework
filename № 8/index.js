const calculator = (() => {
    let number = 0;

    return {
        addition(n) {
            number += n;
        },
        subtraction(n) {
            number -= n;
        },
        multiplication(n) {
            number *= n;
        },
        division(n) {
            number /= n;
        },
        module(n) {
            number %= n;
        },
        sqrt(n) {
            number = Math.sqrt(n);
        },
        tan(n) {
            number = Math.tan(n);
        },
        sin(n) {
            number = Math.sin(n);
        },
        cos(n) {
            number = Math.cos(n);
        },
        cbrt(n) {
            number = Math.cbrt(n);
        },
        pow(x, y) {
            number = Math.pow(x, y);
        },
        clear() {
            number = 0;
        },
        result() {
            return number;
        },
    };
})();


calculator.addition(2);
calculator.addition(4);
console.log(calculator.result()); // result 6
calculator.subtraction(2)
console.log(calculator.result()); // result 4
calculator.clear()
console.log(calculator.result()); // result 0
