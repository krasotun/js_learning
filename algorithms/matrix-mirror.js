const getMirrorMatrix = (array) => {
  const result = [];

  const mirrorRow = (row) => {
    const middle = row.length / 2;
    const left = row.slice(0, middle);
    const right = [];

    for (let i = left.length - 1; i >= 0; i--) {
      right.push(left[i]);
    }

    return [...left, ...right];
  };

  for (const column of array) {
    result.push(mirrorRow(column));
  }

  return result;
};

console.log(
  getMirrorMatrix([
    [11, 12, 13, 14],
    [21, 22, 23, 24],
    [31, 32, 33, 34],
    [41, 42, 43, 44],
  ])
);

//  [
//     [11, 12, 12, 11],
//     [21, 22, 22, 21],
//     [31, 32, 32, 31],
//     [41, 42, 42, 41],
//  ]
