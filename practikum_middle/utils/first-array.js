// First
// Напишите функцию, которая принимает массив и возвращает
//  его первый элемент.Также функция должна:
// Обработать невалидные значения:
// если аргументом оказался не массив, функция возвращает undefined;
// Не выходить за границы массива.

const array = [
	1, 2, 3, 4,
];

function first(list) {
	if (!Array.isArray(list)) {
		return undefined;
	}
	return list[0];
};

console.log(first(array)); // 1

