const array = [36542, 12313, 444, 75, 56,
	1886, 17, 1888, 17, 270, 39, 40]

// Поиск наименьшего значения
function findSmallest(arr) {
	let smallest = arr[0]
	for (let i = 1; i <= arr.length; i++) {
		if (arr[i] < smallest) {
			smallest = arr[i];
		}
	}
	return smallest
}


// console.log(findSmallest(array));
// console.log(Math.min(...array));

//Сортировка от меньшего к большему

function sortMinMax(arr) {
	let sortedArr = []
	for (let i = 0; i <= arr.length; i++) {
		let smallest = findSmallest(arr);
		let smallestIndex = arr.indexOf(smallest);
		sortedArr.push(smallest)

	}
	return sortedArr

}
console.log(sortMinMax(array));
