/*
isEmpty(null); // => true 
isEmpty(true); // => true
isEmpty(1); // => true
isEmpty([1, 2, 3]); // => false
isEmpty({ 'a': 1 }); // => false
isEmpty('123'); // => false
isEmpty(123); // => true
isEmpty(''); // => true
isEmpty(0); // => true
*/
function isEmpty(value) {
	const type = typeof (value);
	switch (type) {
		case 'number':
			return true;
		case 'string':
			if (value.length === 0) {
				return true;
			} else if (value.length > 0) {
				return false;
			}
			return true;
		case 'boolean':
			return true;
		case 'undefined':
			return true;
		case 'object':
			if (value === null) {
				return true;
			}
			if (Array.isArray(value)) {
				if (value.length === 0) {
					return true;
				} else if (value.length > 0) {
					return false;
				}
			}
			if (JSON.stringify(value) === '{}') {
				return true;
			} else if (JSON.stringify(value) !== '{}') {
				return false;
			}
	}

}
console.log(isEmpty(new Map()));





// isEmpty
// Создайте функцию, которая проверяет, является ли переданный аргумент пустым.
// Аргументами могут быть:
// Object,
// 	Array,
// 	Map,
// 	Set,
// 	примитивы.
// 	Значения 0 и другие Number, null, true, false, "", undefined, [], {} должны возвращать true.
