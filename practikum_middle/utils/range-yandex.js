/*
	* range(4); // => [0, 1, 2, 3] 
	* range(-4); // => [0, -1, -2, -3]
	* range(1, 5); // => [1, 2, 3, 4]
	* range(0, 20, 5); // => [0, 5, 10, 15]
	* range(0, -4, -1); // => [0, -1, -2, -3]
	* range(1, 4, 0); // => [1, 1, 1]
	* range(0); // => []
*/
const baseRange = (start, end, step) => {
	let index = -1;
	let length = Math.max(Math.ceil((end - start) / (step || 1)), 0);
	const result = new Array(length);

	while (length--) {
		result[++index] = start;
		start += step;
	}

	return result;
}

// Проверку на типы данных не добавлял, но студенты должны будут
function rangeRight(start = 0, end, step) {
	if (end === undefined) {
		end = start;
		start = 0;
	}

	step = step === undefined ? (start < end ? 1 : -1) : step;
	return baseRange(start, end, step);
}