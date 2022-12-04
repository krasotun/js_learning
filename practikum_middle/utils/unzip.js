// unzip
// Реализуйте функцию, которая группирует значения из массивов по индексам.
// Если хоть один аргумент не массив — нужно выбросить ошибку ${ arg } is not array.

// * unzip([1, 2, 3], [4], [5, 6]); // => [[1, 4, 5], [2, undefined, 6], [3, undefined, undefined]]

const unzip = (...args) => {
	const array = args;
	const lengths = [];
	const finalArray = [];
	let maxLength;
	array.forEach((element) => {
		if (!Array.isArray(element)) {
			throw new Error(`${element} is not array`)
		}
		lengths.push(element.length);
		maxLength = Math.max.apply(null, lengths);
		for (let i = 0; i < maxLength; i++) {
			let littleArray = [];
			littleArray.push(element[i]);
			finalArray.push(littleArray)
		}
	})
	return finalArray;
}
console.log(unzip([1, 2, 3], [4], [5, 6]));
