const minMax = (len, counter, array) => {
  const calculateSum = (arr) => {
    return arr.reduce((acc, current) => {
      acc = acc + current;
      return acc;
    }, 0);
  };

  const primalArray = [];

  const maxA = Math.max(...primalArray);
  const minA = Math.min(...primalArray);

  return maxA - minA;
};

console.log(confuse([45, 52, 47, 46]));
