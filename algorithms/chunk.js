const chunk = (array, num) => {
  const result = [];

  for (let i = 0; i < array.length; i += num) {
    const sliced = array.slice(i, i + num);
    result.push(sliced);
  }

  return result;
};

// console.log(chunk(["a", "b", "c", "d"], 2));
// // [['a', 'b'], ['c', 'd']]

console.log(chunk(["a", "b", "c", "d"], 3));
[["a", "b", "c"], ["d"]];
