const isCont = (array) => {
  if (array.length <= 1) {
    return false;
  }
  let i = 0;
  let j = 1;

  while (i < array.length - 2 && j < array.length - 1) {
    if (array[j] - array[i] !== 1) {
      return false;
    }
    i += 1;
    j += 1;
  }

  return true;
};

console.log(isCont([10, 11, 12, 13]));
