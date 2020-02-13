const calculator = (() => {
    
    let number = 0;

    return {
        add(n) {
            number += n;
        },
        sub(n) {
            number -= n;
        },
        mult(n) {
            number *= n;
        },
        div(n) {
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