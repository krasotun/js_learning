function checkSortArray(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] > arr[i + 1]) {
			return false;
		}
	}
	return true
}

const array = [8, 9, 7, 6, 1, 2, 4, 8, 5, 3, 10]
const sortedArray = array.sort((a, b) => a - b);
console.log(sortedArray);
console.log(checkSortArray(array));
console.log(checkSortArray(sortedArray));


