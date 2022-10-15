// Range
// Реализовать функцию, которая генерирует числовые последовательности с заданным шагом.
// Функция должна принимать три аргумента:
// start — число, с которого начнётся последовательность.Это необязательный аргумент: по умолчанию функция должна начинать с 0.
// end — число, конец последовательности.Функция должна остановиться, не доходя до этого значения.
// 	step — число, шаг между элементами в последовательности.Это необязательный аргумент: значение по умолчанию — 1.
// В результате функция должна вернуть массив чисел заданной последовательности.

function rangeRight(start = 0, end, step) {
	console.log({ start, end, step });
	const arr = [];
	if (end === undefined) {
		end = start;
		start = 0;
	}
	if (step === undefined) {
		step = 1;
	}
	if (start < 0) {

	}
	if (step === 0) {
		for (let i = start; i < end; i++) {
			arr.push(start);
		}
		return arr;
	}


	for (let i = start; i < end; i += step) {
		console.log('попали');
		arr.push(i);
	} return arr;
}


// console.log(range(4)); // => [0, 1, 2, 3] 
console.log(rangeRight(-4)); // => [0, -1, -2, -3]
// console.log(range(1, 5)); // => [1, 2, 3, 4]
// console.log(range(0, 20, 5)); // => [0, 5, 10, 15]
// console.log(range(0, -4, -1)); // => [0, -1, -2, -3]
// console.log(range(1, 4, 0)); // => [1, 1, 1]
// console.log(range(0)); // => []
