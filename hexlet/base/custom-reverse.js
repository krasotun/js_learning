// функцию reverse(), которая принимает на вход массив и располагает элементы исходного массива в обратном порядке.
// Функция должна мутировать переданный в нее массив. Новый массив из нее возвращать не надо.

const names = ["john", "smith", "karl"];

const reverse = (array) => {
  let i = 0;
  let j = array.length - 1;

  while (i <= j) {
    swap(i, j);
    i++;
    j--;
  }

  function swap(first, last) {
    let tmp;
    tmp = array[first];
    array[first] = array[last];
    array[last] = tmp;
  }
};
reverse(names);
