// Сумма всех элементов в массиве
const arr = [1, 2, 3, 4, 8, 56, 25];
const summ = arr.reduce((sum, current) => sum + current);
console.log(summ);

// Массив в строку
const words = ['Марат', 'Лена', 'Даша'];
const result = words.reduce((sum, current) => `${sum}, ${current}`);
console.log(words);
console.log(result);
console.log(typeof (result));