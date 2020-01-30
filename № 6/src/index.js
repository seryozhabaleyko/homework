const uniq = arr => [...new Set(arr)]; // spread and Array.from

const array = [1, 1, 2, 0, 2];

uniq(array); // -> [1,2,0]
