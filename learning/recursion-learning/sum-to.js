//  sumTo(n) вычисляет сумму чисел 1 + 2 + ... + n.
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10

// С использованием цикла
const sumTo = (num) => {
  let result = 0;
  for (let i = num; i > 0; --i) {
    result += i;
  }
  return result;
};

console.log(sumTo(4));

// Рекурсия
const reqSumTo = (num) => {
  if (num === 1) {
    return 1;
  }

  return num + reqSumTo(num - 1);
};

console.log(reqSumTo(4));
