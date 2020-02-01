const calculator = (() => {
    let data = {
        number: 0,
    };

    return {
        addition(n) {
            data.number += n;
        },
        subtraction(n) {
            data.number -= n;
        },
        multiplication(n) {
            data.number *= n;
        },
        division(n) {
            data.number /= n;
        },
        module(n) {
            data.number %= n;
        },
        sqrt(n) {
            data.number = Math.sqrt(n);
        },
        tan(n) {
            data.number = Math.tan(n);
        },
        sin(n) {
            data.number = Math.sin(n);
        },
        cos(n) {
            data.number = Math.cos(n);
        },
        cbrt(n) {
            data.number = Math.cbrt(n);
        },
        pow(x, y) {
            data.number = Math.pow(x, y);
        },
        result() {
            return data.number;
        },
        clear() {
            data.number = 0;
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
