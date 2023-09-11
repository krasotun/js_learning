// Реализуйте и экспортируйте функцию по умолчанию,
// которая принимает на вход два множества и возвращает множество,
//  составленное из таких элементов, которые есть в первом множестве, но нет во втором.

const difference = (firstSet, secondSet) => {
  const newSet = new Set([]);
  firstSet.forEach((key) => {
    if (!secondSet.has(key)) {
      newSet.add(key);
    }
  });
  return newSet;
};

console.log(difference(new Set([2, 1]), new Set([2, 3])));
// → [1]
