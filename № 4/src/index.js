// maxVal :: [Number] -> Number
const maxVal = (arr) => {
    let len = arr.length, // получаем длину массива
        max = arr[0]; // берем первый элемент из массива или -Infinity или любое другое значение от которого должени начинатся максимум и сравниваем его со всеми остальными элементами массива

    while (len--) {
        if (arr[len] > max) { // если элемент больше, чем в переменной max,
            max = arr[len]; // то присваиваем его значение переменной max
        }
    }

    return max; // возвращаем максимальное значение
};

// max :: [Number] -> Number
const max = (...args) => {
    let len = args.length, // получаем длину массива
        max = args[0]; // берем первый элемент из массива или -Infinity или любое другое значение от которого должени начинатся максимум и сравниваем его со всеми остальными элементами массива

    for (let i = 1; i < len; i++) {
        if (args[i] > max) { // если элемент больше, чем в переменной max,
            max = args[i]; // то присваиваем его значение переменной max
        }
    }

    return max; // возвращаем максимальное значение
};

const array = [2, -3, 4, 8, 5, -23, 54, 23, -12, 2, 3, 45, 45, 68, 26, -85, 45, 67];

console.log(maxVal(array)); // 68
console.log(max(-23, 2, 23, ...array)); // 68
