// Ищем НОД
// Ввод 2 числа
// Вывод  - НОД (число)

const euclidForTwo = (a, b) => {
	while (a !== b) {
		if (a > b) {
			a = a - b;
		} else {
			b = b - a;
		}
	}
	return a;
}

// НОД для массива
const euclid = (array) => {
	let result = array[0];
	for (let i = 1; i <= array.length - 1; i++) {
		result = euclidForTwo(result, array[i]);
		if (result === 1) {
			return 1;
		}
	}
	return result;
}
console.log(euclid([6006, 3738735, 51051]));

const euclidForDel = (a, b) => {
	while (a !== 0 && b !== 0) {
		if (a > b) {
			a = a % b;
		} else b = b % a;
	}
	return a + b;
}
console.log(euclidForDel(18, 30))
console.log(euclidForDel(30, 18))
