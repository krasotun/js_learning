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

function sortWithTimer(arr) {
	const startTime = new Date().getTime();
	console.time('SortWithTimer');
	function quickSort(arr) {
		if (arr.length < 2) {
			return arr
		} else {
			const pivot = arr[0];
			const less = arr.filter(item => item < pivot);
			const equal = arr.filter(item => item === pivot);
			const greater = arr.filter(item => item > pivot);
			return [...quickSort(less), ...equal, ...quickSort(greater)]
		}
	}
	const sorted = quickSort(arr);
	const endTime = new Date().getTime();
	console.timeEnd('SortWithTimer')
	console.log('Сортировка длилась, мс:', ((endTime - startTime)));
	return sorted;
}


const bigArray = createBigArray(1000000);

sortWithTimer(createBigArray(1000000));
