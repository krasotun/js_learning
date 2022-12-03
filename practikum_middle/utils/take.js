// take
// Напишите функцию, которая создаёт часть массива с n элементами, взятыми с начала.
// Необходимо валидировать входные значения.В случае ошибки — выбросьте исключение ValidationError: bad value.
// Сделайте реализацию через класс.Ошибка в консоли должна выглядеть в точности как в примере.

class ValidationError extends Error {

	static validateError(list, num) {
		if (!Array.isArray(list) || !(typeof (num) === 'number')) {
			throw new Error('ValidationError: bad value');
		} else return true;
	}
}

const take = (list, num) => {
	ValidationError.validateError(list, num);
	const newArr = [];
	if (!num) {
		return list[0];
	}
	const length = list.length;
	if (num > length) {
		return list;
	}
	for (let i = 0; i < num; i++) {
		newArr.push(list[i]);
	}
	return newArr;
}

console.log(take([1, 2, 3], 4));