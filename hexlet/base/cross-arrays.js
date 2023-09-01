const cross = (firstArray, secondArray) => {
  const newArr = [];
  let i = 0;
  let j = 0;

  while (i < firstArray.length && j < secondArray.length) {
    if (firstArray[i] === secondArray[j]) {
      newArr.push(firstArray[i]);
      i++;
      j++;
    }

    if (firstArray[i] > secondArray[j]) {
      j++;
    }

    if (firstArray[i] < secondArray[j]) {
      i++;
    }
  }

  const set = new Set(newArr);
  return [...set];
};
console.log(cross([1, 1, 1, 2, 2, 2], [1, 1, 2, 2, 3, 3]));
