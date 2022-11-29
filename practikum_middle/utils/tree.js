const expected =
	'   *   \n' +
	'  ***  \n' +
	' ***** \n' +
	'*******\n' +
	'   |   \n';

console.log(expected);

const tree = (lvl) => {
	if (lvl < 3) {
		return null;
	}
	if (typeof lvl !== 'number' && typeof lvl !== 'string') {
		throw new TypeError(lvl);
	}
	let star = '';
	let space = ' ';
	const array = [];
	let i = 0;
	let j = 0;
	while (i < lvl) {
		space = '';
		star = '';
		for (j = 0; j < lvl - i; j++) space += " ";
		for (j = 0; j < 2 * i + 1; j++) star += "*";
		array.push(space + star)
		i++;
	}
	let lastString = '';
	const length = array[lvl - 1].length;
	for (let i = 1; i <= length / 2; i++) {
		lastString += ' ';
	}
	array.push(lastString + '|' + lastString)
	console.log(array);
}
tree(5);

