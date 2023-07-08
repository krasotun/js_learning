const fromPairs = (array) => {
  const result = {};

  for (const [key, value] of array) {
    result[key] = value;
  }
  return result;
};

console.log(
  fromPairs([
    ["cat", 5],
    ["dog", 6],
    ["cat", 11],
  ])
);
// { 'cat': 11, 'dog': 6 }
