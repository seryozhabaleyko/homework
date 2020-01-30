const array = [1, 1, 2, 0, 2],
      array2 = [1,2,3],
      array3 = [1,1,1,1];


const uniq = (arr) => [...new Set(arr)]; // spread and Array.from

uniq(array); // -> [1,2,0]
uniq(array2); // -> [1,2,3]
uniq(array3); // -> [1]

/*
 * На каждой итерации используется метод Array.indexOf для получения индекса этого элемента.
 * Если возвращаемый индекс больше текущего индекса, тогда добавляем этот элемент в новый массив и возвращаем его.
*/
function unique(arr) {
  return arr.filter((e, i) => arr.indexOf(e) === i);
}

unique(array); // -> [1,2,0]
unique(array2); // -> [1,2,3]
unique(array3); // -> [1]

// Инкапсулируйте условия
function isUnique(arr, i) {
    return arr.indexOf(arr[i]) === i;
}

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
