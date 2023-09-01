const sumOfSquareDigits = (num) => {
  const numAsStr = String(num);
  let sum = 0;
  for (let i = 0; i < numAsStr.length; i += 1) {
    const digit = Number(numAsStr[i]);
    sum += digit * digit;
  }

  return sum;
};

const bigFunc = (num) => {
  let result = num;

  for (let i = 1; i < 10; i += 1) {
    result = sumOfSquareDigits(result);
    if (result === 1) {
      return true;
    }
  }
  return false;
};

console.log(bigFunc(1));
console.log(bigFunc(7));
console.log(bigFunc(13));
console.log(bigFunc(0));
console.log(bigFunc(2));
console.log(bigFunc(90));
