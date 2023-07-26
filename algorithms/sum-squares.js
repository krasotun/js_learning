function squareSum(numbers) {
  return numbers
    .map((element) => element ** 2)
    .reduce((acc, current) => acc + current);
}

console.log(squareSum([1, 2]));

console.log(0 === true);
