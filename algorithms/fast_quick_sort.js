function createBigArray(num) {
	let i = 0;
	const array = [];
	while (i <= num) {
		array.push(Math.floor(Math.random() * 100))
		i++;
	}
	return array
}
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

const bigArray = createBigArray(1000000);
const startTime = new Date().getTime();
fastQuickSort(bigArray);
const endTime = new Date().getTime();
console.log('Цикл, мс:', endTime - startTime);

