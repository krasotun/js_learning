// Бинарный поиск
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
	11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
	21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
	31, 32, 33, 34, 35, 36, 37, 38, 39, 40]

// Возвращает номер значения в массиве
function binarySearch(arr, item) {
	let low = 0;
	let high = arr.length;
	while (low <= high) {
		let mid = Math.floor((low + high) / 2);
		let guess = arr[mid];
		if (guess === item) {
			return mid
		} else if (guess > item) {
			high = mid - 1;
		}
		else if (guess < item) {
			low = mid + 1;
		} else {
			return 'Не найдено'
		}
	}
};
console.log(binarySearch(array, 25)); // 24
console.log(array.indexOf(25)); // 24
console.log(binarySearch(array, 125)); // Не найдено
console.log(array.indexOf(125)); // -1

console.log(Math.log2(128)) // 7
console.log(Math.log2(256)) // 8


