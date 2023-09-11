// Реализуйте и экспортируйте по умолчанию функцию,
// которая принимает на вход массив и возвращает новый массив,
// полученный из исходного удалением повторяющихся элементов.

const uniq = (array) => {
  return [...array].reduce((acc, current) => {
    if (!acc.includes(current)) {
      acc.push(current);
    }
    return acc;
  }, []);
};

console.log(uniq([2, 1, 2, 3])); // [2, 1, 3]
