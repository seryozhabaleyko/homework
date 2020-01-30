const array = [1, 1, 2, 0, 2],
      array2 = [1,2,3],
      array3 = [1,1,1,1];


const uniq = (arr) => [...new Set(arr)]; // spread and Array.from

uniq(array); // -> [1,2,0]
uniq(array2); // -> [1,2,3]
uniq(array3); // -> [1]

/*
 * На каждой итерации мы используем метод Array.indexOf для получения индекса этого элемента.
 * Если возвращаемый индекс больше текущего индекса, мы добавим этот элемент в новый массив и возвращаем его.
*/
function getUnique(arr) {
  return arr.filter((e, i) => arr.indexOf(e) >= i);
}

getUnique(array); // -> [1,2,0]
getUnique(array2); // -> [1,2,3]
getUnique(array3); // -> [1]

