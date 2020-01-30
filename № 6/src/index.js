const array = [1, 1, 2, 0, 2],
      array2 = [1,2,3],
      array3 = [1,1,1,1];

// Объекты Set позволяют сохранять уникальные значения любого типа, как примитивы, так и другие типы объектов.
const uniq = (arr) => [...new Set(arr)]; // spread and Array.from

uniq(array); // -> [1,2,0]
uniq(array2); // -> [1,2,3]
uniq(array3); // -> [1]

const unique = (arr) => arr.filter((el, i) => arr.indexOf(el) === i);

unique(array); // -> [1,2,0]
unique(array2); // -> [1,2,3]
unique(array3); // -> [1]

// Инкапсуляция условия
const isUnique = (arr, i) => arr.indexOf(arr[i]) === i;

function getUnique(arr) {
    let result = [];
      
    for (let i = 0; i < arr.length; i++) { // for and Array.forEach() and Array.filter()
        if (isUnique(arr, i)) {
            result.push(arr[i]);
        }        
    }

    return result;
}

getUnique(array); // -> [1,2,0]
getUnique(array2); // -> [1,2,3]
getUnique(array3); // -> [1]
