// Бинарный поиск
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
	11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
	21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
	31, 32, 33, 34, 35, 36, 37, 38, 39, 40]

// Возвращает номер значения в массиве
function binarySearch(list, element) {
	let low = 0;
	let high = list.length;
	while (low <= high) {
		let mid = Math.floor((low + high) / 2);
		let guess = list[mid];
		if (guess === element) {
			return mid
		} else if (guess > element) {
			high = mid - 1;
		}
		else if (guess < element) {
			low = mid + 1;
		} else {
			return -1;
		}
	}
};

console.log(binarySearch(array, 15)); // 24