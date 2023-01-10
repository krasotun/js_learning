function filterAnagrams(word, array) {
	let returnedArr = []
	array.forEach(element => {
		if (isAnagram(word, element)) {
			returnedArr.push(element);
		}
	});
	return returnedArr;
}

function isAnagram(a, b) {
	if (a.length !== b.length) {
		return false;
	}
	const str1 = a.split('').sort().join('')
	const str2 = b.split('').sort().join('')
	return str1 === str2;
}
