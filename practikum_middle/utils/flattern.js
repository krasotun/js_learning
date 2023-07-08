const flatten = (array) => {
  const result = [];

  const iter = (element, acc) => {
    if (Array.isArray(element)) {
      element.forEach((item) => iter(item, result));
    } else {
      acc.push(element);
    }
    return acc;
  };
  return iter(array, result);
};

const list = [1, 2, [3, 5], [[4, 3], 2]];

console.log(flatten(list)); // [1, 2, 3, 5, 4, 3, 2])
