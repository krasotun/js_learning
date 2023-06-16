export const flatten = (array) => {
  const newArr = [];
  for (const element of array) {
    if (Array.isArray(element)) {
      newArr.push(...element);
    } else {
      newArr.push(element);
    }
  }

  return newArr;
};

console.log(flatten([1, [3, 2], 9]));
console.log(flatten([1, [[2], [3]], [9]]));
