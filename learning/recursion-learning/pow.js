//  pow(x, n), которая возводит x в натуральную степень n.
//  Иначе говоря, умножает x на само себя n раз.

// Без рекурсии
const pow = (x, n) => {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
};

// С рекурсией
const recPow = (x, n) => {
  if (n === 1) {
    return x;
  }

  return x * recPow(x, n - 1);
};

console.log(pow(2, 4));
