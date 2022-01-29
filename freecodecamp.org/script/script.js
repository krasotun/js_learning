/* let age = prompt('Сколько Вам лет?');
alert(`Вам ${age} лет`); */

/* console.log(5 % 2); // 1, остаток от деления 5 на 2
console.log(8 % 3); // 2, остаток от деления 8 на 3 */

/* console.log(typeof ("" + 1 + 0)); */



/* let officialName = prompt('Какое официальное название у JavaScript?'); */
/* if (officialName == 'ECMAScript') {
	alert('Верно');
} else {
	alert('Не верно');
} */

/* let officialName = (prompt('Какое официальное название у JavaScript?')) == 'ECMAScript' ? alert('Верно') : alert('Неверно'); */

/* let age = 86;
if (age > 40) {
	console.log("Ты старый")
} else {
	console.log('Пойдет');
}
age > 40 ? console.log("Ты старый") : console.log('Пойдет'); */

/* let number = prompt('Введите число', 0);
if (number > 0) {
	console.log(1);
} else if (number < 0) {
	console.log(-1);
} else {
	console.log(0);
}; */

/* let result = 3;
result < 4 ? console.log('Мало') : console.log('Много');

for (let i = 0; i < 3; i++) {
	console.log(`Номер по порядку:${i}`);
}

let sum = (a, b) => a + b;
console.log(sum(85, 17));
 */

/* let a = 5;
let b = 85;
a += b;
console.log(a); // 90
 */

/* const myArray = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[
		[10, 11, 12], 13, 14
	],
];

const myData = myArray[2][1];
console.log(myData);


const calc = (a, b) => {
	return a + b;
};

console.log(calc(15, 10)); */

const calc = function (a, b) {
	return a + b;
};

console.log(calc(15, 10));