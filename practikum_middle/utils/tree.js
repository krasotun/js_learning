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
	console.log('Продолжаем');
}


// if (typeof lvl !== 'number' || typeof lvl !== 'string') {
// 	console.log('Попали');
// 	throw new TypeError('Ошибка')
// } else {
// 	console.log('Go');
// }


tree('5');
tree({});