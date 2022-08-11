const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function checkSortArray(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] > arr[i + 1]) {
			return false;
		}
	}
	return true
}
console.log(checkSortArray(array));



