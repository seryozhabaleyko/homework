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

const unique = (arr) => arr.filter((el, i) => arr.indexOf(el) === i);

// Объекты Set позволяют сохранять уникальные значения любого типа, как примитивы, так и другие типы объектов.
const uniq = (arr) => [...new Set(arr)]; // spread and Array.from

// TypeScript
const uniques = Array.from(new Set([1, 2, 3, 1, 1]));
