const str = 'AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB';
function rle(str) {
	const regEx = /^[A-Z]*$/
	if (str) { }
	if (!regEx.test(str)) {
		throw new Error('Неверно передан аргумент')
	}

	let result = '';
	let count = 1;

	for (let i = 0; i < str.length; i++) {
		let j = i + 1;
		while (str[i] === str[j]) {
			count++;
			j++;
		}
		result = result.concat(`${str[i]}${count}`);
		count = 1;
		i = j - 1;
	}
	console.log(result);
	return result;
}

rle('AGHGJ')
