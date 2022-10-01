// Инверсия объекта
// Напишите функцию, которая принимает объект и возвращает новый объект, где:
// ключи — значения исходного объекта,
// 	значения — ключи исходного объекта.
// Поля исходного объекта — строки или числа.
const obj = {
	name: 'Marat',
	age: '40',
	education: 'high'
}
function invert(obj) {
	const arr = Object.entries(obj);
	const newObj = {};
	arr.forEach(
		(item) => {
			newObj[item[1]] = item[0];
		}
	);
	return newObj;
}

console.log(invert(obj))