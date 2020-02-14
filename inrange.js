const inRange = (min, max) => item => item >= min && item <= max;

const arr = [0, 1, 2, 1.5, 3, 4, 5, 66, 7, 8, 17, 0.5, 9, 0, 2];

arr.filter(inRange(1, 10)); // [1, 2, 1.5, 3, 4, 5, 7, 8, 9, 2]

// function inRange(min, max) {
//     return function (item) {
//         return item >= min && item <= max;
//     };
// }
