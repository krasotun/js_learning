function compareObjects(obj1, obj2) {
	const keys1 = Object.getOwnPropertyNames(obj1);
	const keys2 = Object.getOwnPropertyNames(obj2);
	if (keys1.length !== keys2.length) {
		return false
	}
	for (key in obj2) {
		if (typeof (obj1[key]) === 'object') {
			compareObjects(obj1[key], obj2[key])
		}
		if (obj1[key] !== obj2[key]) {
			return false
		}
	}
	return true
}
const firstObject = { a: 10, b: 15, c: 20 }
const secondObject = { a: 10, b: 15, c: 20 }
const thirdObject = { a: 11, b: 15, c: 20 }
const fourthObject = { d: 11, b: 15, c: 20 }
const fifthObject = { b: 15, d: 11, c: 20 }
const sixthObject = { b: 15, d: 11, c: 20, x: undefined }
const Object7 = { b: 15, d: 11, c: 20, x: { a: 5 } }
const Object8 = { b: 15, d: 11, c: 20, x: { a: 5 } }

console.log(compareObjects(firstObject, secondObject)); // true
console.log(compareObjects(secondObject, thirdObject)); // false
console.log(compareObjects(thirdObject, fourthObject)); // false
console.log(compareObjects(fifthObject, fourthObject)); // true
console.log(compareObjects(fifthObject, fourthObject)); // true
console.log(compareObjects(Object7, Object8)); // true

