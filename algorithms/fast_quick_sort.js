const array = [15, 74, 61, 476, 1, 5, 16, 84, 168, 1, 58, 22]
function fastQuickSort(arr) {
	const pivot = arr[0];
	const less = [];
	const equal = [];
	const greater = [];
	if (arr.length <= 1) {
		return arr
	} else {
		let i = 0;
		while (i <= arr.length) {
			if (arr[i] < pivot)
				less.push(arr[i])
			else if (arr[i] == pivot)
				equal.push(arr[i]);
			else if (arr[i] > pivot)
				greater.push(arr[i]);
			i++;
		}
		return [...fastQuickSort(less), ...equal, ...fastQuickSort(greater)]
	}
}
console.log(fastQuickSort(array));

