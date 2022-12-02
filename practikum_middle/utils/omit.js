// omit
// Реализуйте функцию, которая исключает из объекта указанные свойства.

// const omit = (obj, array) => {
// 	let newObj = { ...obj };
// 	array.forEach(element => {
// 		Object.keys(obj).forEach(key => {
// 			if (key === element) {
// 				console.log(element);
// 				delete newObj.e;
// 				console.log(newObj);
// 			}
// 		})
// 	});
// }

const omit = (obj, keys) => {
	if (!keys.length) {
		return obj;
	}
	const { [keys.pop()]: omitted, ...rest } = obj;
	return rest;
}


console.log(omit({ name: 'Benjy', age: 18 }, ['name'])); // => { age: 18 }
