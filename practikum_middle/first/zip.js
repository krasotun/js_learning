// Zip
// Напишите функцию zip.Она принимает любое число объектов, а возвращает единственный объект,
// который содержит все поля исходных объектов.
// Если один и тот же ключ встречается в нескольких объектах,
// следует оставить то значение, что встретилось первым.

// Пример работы
const objects = [
	{ foo: 5, bar: 6 },
	{ foo: 13, baz: -1 }, // foo - повторяющийся ключ
	{ foo: 25, }, // foo - повторяющийся ключ
	{ baz: 15 },
];

function zip() {
	const newObj = {};
	objects.forEach(
		(item) => {
			const element = Object.entries(item);
			element.forEach(
				(item) => {
					if (Object.keys(newObj).indexOf(item[0]) >= 0) {
						return newObj;
					}
					newObj[item[0]] = item[1];
				}
			);
		}
	)
	return newObj;
}
console.log(zip(...objects)); // { foo: 5, bar: 6, baz: -1 }

// беглое решение из банка, но проверку хорошо бы другую точно
const isObject = (checkValue) => {
	return String(checkValue) === '[object Object]';
};
const zip = (...args) => {
	return args.reduce((accumulator, object) => {
		if (isObject(object)) {
			for (const [key, value] of Object.entries(object)) {
				if (!accumulator.hasOwnProperty(key)) {
					accumulator[key] = value;
				}
			}
		}
		return accumulator;
	}, {});
};