const arr = [5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8]; // sum 50

const sum = function sumArrayElements(array) {
    
    let sum = 0;

    for (let i = 0; i < array.length; i++) { // for, forEach(), reduce()

        const item = array[i];

        if (Array.isArray(item)) {
            sum += sumArrayElements(item);
        } else {
            sum += item;
        }
    }

    return sum;
};

sum(arr); // сумма 50
