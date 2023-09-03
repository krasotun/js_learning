// sameParityFilter.js
// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив и возвращает новый,
// состоящий из элементов,
// у которых такая же чётность,
// как и у первого элемента входного массива.

const sameParity = (arr) => {
  const firstParity = () => arr[0] % 2 === 0;

  return [...arr].filter((element) => (element % 2 === 0) === firstParity());
};

console.log(sameParity([-1, 0, 1, -3, 10, -2])); // [-1, 1, -3]
console.log(sameParity([2, 0, 1, -3, 10, -2])); // [2, 0, 10, -2]
console.log(sameParity([])); // []
