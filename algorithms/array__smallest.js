
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

// Пустой массив
const emptyArray = [];
console.log('Пустой  массив', findSmallest(emptyArray));

// Массив из строк
const stringsArray = ['One', 'Two', "Three", "Four", 'Five']
console.log('Массив из строк', findSmallest(stringsArray));

// Массив чисел
const digitsArray = [36542, 12313, 444, 75, 56,
	1886, 17, 1888, 17, 270, 39, 40]
console.log('Массив из чисел', findSmallest(digitsArray));

// Cмешанный массив (строки, цифры)
const mixedArray = [36542, 12313, 444, 75, 56,
	1886, 17, 1888, 17, 270, 39, 40, 'One', 'Two', "Three", "Four", 'Five']
console.log('Смешанный массив', findSmallest(mixedArray));

// Передали массив из массивов
const arrayFromArrays = [[1, 2, 3], [8, 95], [45, 32, 26], [226, 456, 7869], [21112, 1285, 778, 6], [132]]
console.log('Массив из масивов', findSmallest(arrayFromArrays));




