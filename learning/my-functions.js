// Определяем четное или нет число
function oddOrEven(a) {
	if (a % 2 == 0) {
		console.log('Четное');
	} else {
		console.log('Нечетное');
	}
}
oddOrEven(46);

// проверяем символ в строке

function absentVowel(x) {
	if (x.indexOf('a') == -1) { // -1 это если НЕ содержит
		console.log('Нет А');
	} else {
		console.log('Есть А');
	}
}
absentVowel('Lenusik');

// преобразуем строку в массив

let highAndLow = ("1 2 3 4 5"); // строка
let arrayHighAndLow = highAndLow.split(' '); // создаем массив из строки


console.log(Math.max.apply(null, arrayHighAndLow)); // наибольшее значение в массиве
console.log(Math.min.apply(null, arrayHighAndLow)); // наименьшее значение в массиве

// Спавнение значений

function isLess(a, b) {
	return a === b;

}
let d = isLess(14, 15);
console.log(d);