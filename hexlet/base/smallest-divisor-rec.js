const smallestDivisor = (num) => {
  if (num === 1) {
    return 1;
  }
  const iter = (number, divider) => {
    if (number % divider === 0) {
      return divider;
    }
    return iter(number, divider + 1);
  };

  return iter(num, 2);
};

console.log(smallestDivisor(15)); // 3
console.log(smallestDivisor(17)); // 17
