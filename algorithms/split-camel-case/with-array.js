const splitCamelCase = (string) => {
	const indexArray = [0];
	for (let i = 0; i < string.length; i++) {
		if (string[i] === string[i].toUpperCase()) {
			indexArray.push(i);
		}
	}
	indexArray.push(string.length);
	const wordsArray = [];
	for (let i = 0; i < indexArray.length - 1; i++) {
		const slicedWord = string.slice(indexArray[i], indexArray[i + 1]); // Намеренно выходим за границу массива
		wordsArray.push(slicedWord);
	}
	return wordsArray.join(' ');
}
console.log(splitCamelCase('webDev'));