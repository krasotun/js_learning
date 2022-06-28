//Быстрая сортировка
function createBigArray(num) {
	let i = 0;
	const array = [];
	while (i <= num) {
		array.push(Math.floor(Math.random() * 100))
		i++;
	}
	return array
}
function quickSort(arr) {
	if (arr.length < 2) return arr
	else {
		const pivot = arr[0];
		const less = arr.filter(item => item < pivot);
		const equal = arr.filter(item => item === pivot);
		const greater = arr.filter(item => item > pivot);
		return [...quickSort(less), ...equal, ...quickSort(greater)]
	}
}

const bigArray = createBigArray(1000000);
const startTime = new Date().getTime();
quickSort(bigArray);
const endTime = new Date().getTime();
console.log('Фильтры, мс:', endTime - startTime);

