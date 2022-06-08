function isEqual(firstObj, secondObj) {
	const firstKeys = Object.keys(firstObj);
	const secondKeys = Object.keys(secondObj);
	if (firstKeys.length !== secondKeys.length) {
		return false;
	}
	return firstKeys.every(function (key) {
		return firstObj[key] === secondObj[key];
	});
}
const first = {
	property: 'value',
	anotherProperty: 'another value'
};
const second = {
	property: 'value',
	anotherProperty: 'another value'
};
const third = {
	property: 'value',
	anotherProperty: 'one more value'
};
isEqual(first, second); // true
isEqual(second, third); // false