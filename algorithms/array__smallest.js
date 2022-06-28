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


console.log('Массив из чисел', findSmallest(array));

// Передали пустой массив
const emptyArray = [];
console.log('Пустой  массив', findSmallest(emptyArray));

// Передали массив из строк


// Передали смешанный массив (строки, цифры)
// Передали массив из массивов



