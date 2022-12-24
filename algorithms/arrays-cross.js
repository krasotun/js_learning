// const a = [1, 2, 4, 7, 11, 19];
// const b = [2, 7, 19, 28, 31];

function findEqualElements(arr1, arr2) {
	const arr4 = arr2.filter(item => arr1.includes(item))
	console.log(arr4);
}

// Примеры
findEqualElements([1, 2, 3], [2]) // => [2]
findEqualElements([2], [1, 2, 3]) // => [2]
findEqualElements([1, 2, 2, 3], [2, 2, 2, 2]) // => [2, 2]
findEqualElements([2, 2, 2, 2], [1, 2, 2, 3]) // => [2, 2]


// Пересечение двух отсортированных массивов
// Даны два отсортированных числовых массива.
// Напишите функцию, которая находит пересечение двух массивов и возвращает его.
// Пересечение — массив из элементов, которые встречаются в обоих массивах.

// Let arr1, arr2 be the two sorted arrays of length La and Lb.
// Let i be index into the array arr1.
// Let j be index into the array arr2.
// Initialize i and j to 0.

// while (i < La and j < Lb) do

// 	if (arr1[i] == arr2[j]) { // found a common element.
//         print arr[i] // print it.
//         increment i // move on.
//         increment j
// 	}
// 	else if (arr1[i] > arr2[j])
//         increment j // don't change i, move j.
//     else
//         increment i // don't change j, move i.
// end while