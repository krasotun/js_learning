// Last
// Напишите функцию, которая принимает массив и возвращает
//  его последний элемент.Кроме того, функция должна:
// Обработать невалидные значения:
// если аргументом окажется не массив, функция должна вернуть undefined;
// Если функция вышла за границы массива — верните undefined.

const array = [
	1, 2, 3, 4
]

function last(list) {
	if (!Array.isArray(list)) {
		return undefined;
	}
	const last = list.length - 1;
	return list[last];
}

console.log(last(array)); //  4