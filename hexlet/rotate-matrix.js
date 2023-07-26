const rotateLeft = (array) => {
  const result = [];

  const len = array[0].length;
  for (let i = len - 1; i >= 0; i -= 1) {
    const newRow = [];
    for (const row of array) {
      newRow.push(row[i]);
    }
    result.push(newRow);
  }

  return result;
};
const rotateRight = (array) => {
  const result = [];

  const len = array[0].length;
  for (let i = 0; i < len; i++) {
    const newRow = [];
    for (const row of array) {
      newRow.push(row[i]);
    }
    result.push(newRow.reverse());
  }

  return result;
};

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 0, 1, 2],
];

// console.log(rotateLeft(matrix));
// [
//   [4, 8, 2],
//   [3, 7, 1],
//   [2, 6, 0],
//   [1, 5, 9],
// ]

console.log(rotateRight(matrix));
// [
//   [9, 5, 1],
//   [0, 6, 2],
//   [1, 7, 3],
//   [2, 8, 4],
// ]
