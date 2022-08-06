// 3 в степени 5
// 	- 8 разделить на - 4
// остаток от деления 100 на 3
// сумму трёх предыдущих выражений


console.log(3 ** 5);
console.log(-8 / -4);
console.log(100 % 3);
console.log((3 ** 5) + (-8 / -4) + (100 % 3));

// - Did Joffrey agree ?
// 	- He did.He also said "I love using \n".

console.log('- Did Joffrey agree? \n- He did.He also said "I love using \\n".');
console.log('- Did Joffrey agree?\n- He did. He also said "I love using \\n".');

let who = "dragon's" + 'mother';
console.log(who);

// Напишите программу, которая берет исходное количество евро,
// 	записанное в константу eurosCount, переводит евро в доллары и выводит на экран.
// 	Затем полученное значение переводит в рубли и выводит на новой строчке.

// Пример вывода для 100 евро:

// 125.0
// 7500.0
// Считаем, что:

// 1 евро = 1.25 долларов
// 1 доллар = 60 рублей


const eurosCount = 100;
console.log(eurosCount * 1.25);
console.log(eurosCount * 1.25 * 60);


const foo = 256;
const boo = false
console.log(boo || foo);



// @ts-check
/* eslint-disable no-console */

const one = 'Naharis';
const two = 'Mormont';
const three = 'Sand';

// Третий символ из первой строки
// Второй символ из второй строки
// Четвертый символ из третьей строки
// Пятый символ из второй строки
// Третий символ из второй строки


console.log(`${one[2]}` + `${two[1]}` + `${three[3]}` + `${two[4]}` + `${two[2]}`);


