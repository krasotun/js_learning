function compare(firstObj, secondObj) {
	let result
	firstObj === secondObj ? result = true : result = false;
	/* if (firstObj === secondObj) {
		result = true;
	} else {
		result = false;
	} */
	return result
}
const first = {
	property: 'value'
};
const second = {
	property: 'value'
};
const third = second;
console.log(compare(first, second)); // false
console.log(compare(second, third)); // true