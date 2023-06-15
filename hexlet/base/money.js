// функцию, которая принимает на вход в виде массива кошелек с деньгами и название валюты
//  и возвращает сумму денег указанной валюты.

// Параметры функции:

// Массив, содержащий купюры разных валют с различными номиналами
// Наименование валюты

const money = ["eur 10", "usd 1", "usd 10", "rub 50", "usd 5"];

const arrays = (array, currency) => {
  const currentCurrency = currency.slice(0, 3);
  const newArr = [];

  for (const element of array) {
    if (element.slice(0, 3) === currentCurrency) {
      newArr.push(Number(element.slice(4)));
    }
  }

  let sum = 0;

  for (const element of newArr) {
    sum += element;
  }

  return sum;
};

console.log(arrays(money, "usd"));
