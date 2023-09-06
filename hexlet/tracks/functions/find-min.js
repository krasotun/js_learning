const findMin = (arr) => {
  return [...arr].reduce((acc, current, idx) => {
    console.log(acc, current);
    if (current < acc) {
      acc = current;
    }

    return acc;
  });
};

console.log(findMin([7, 5, 3, 2]));
