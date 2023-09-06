// Реализуйте и экспортируйте по умолчанию функцию,
// которая принимает на вход массив чисел и искомое число.
// Задача функции — найти в массиве ближайшее число к искомому и вернуть его индекс в массиве.

// Если в массиве содержится несколько чисел,
// одновременно являющихся ближайшими к искомому числу,
// то возвращается наименьший из индексов ближайших чисел.

const findIndexOfNearest = (array, num) => {
  if (!array.length) {
    return null;
  }
  const diffs = [...array].map((element) => Math.abs(num - element));

  return diffs.indexOf(Math.min(...diffs));
};

// findIndexOfNearest([], 2);              // null
// findIndexOfNearest([15, 10, 3, 4], 0);  // 2
console.log(findIndexOfNearest([7, 5, 3, 2], 4)); // 1
// findIndexOfNearest([7, 5, 4, 4, 3], 4); // 2
