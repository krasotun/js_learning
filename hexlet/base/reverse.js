// Реализуйте функцию reverse(), которая переворачивает строку.Например:

// reverse('hello, world!'); // !dlrow ,olleh
// Подсказки
// Для решения этой задачи можно двигаться с конца строки к её началу
// Длина строки str находится так: str.length
// Не забудьте, что индексы в строке начинаются с 0, но длина — это реальная длина.
// Так что индекс последнего символа на единицу меньше длинны строки

const reverse = (str) => {
	let i = str.length - 1;
	let result = '';
	while (i >= 0) {
		result = `${result}${str[i]}`
		i -= 1;
	}
	return result;
};

console.log(reverse('Marat'));
<<<<<<< HEAD

// С Итерацией

const reverseIter = (str) => {
	const lastIndex = str.length - 1;
	const iter = (num, acc) => {
		if (num > lastIndex) {
			return acc
		} else return iter(num + 1, `${str[num]}${acc}`)
	}
	return iter(0, '');
};
console.log(reverseIter('Marat'));
=======
>>>>>>> 8b6254743894a0c450e7b196b4755865274578ce

// С Итерацией

const reverseIter = (str) => {
	const lastIndex = str.length - 1;
	const iter = (num, acc) => {
		if (num > lastIndex) {
			return acc
		} else return iter(num + 1, `${str[num]}${acc}`)
	}
	return iter(0, '');
};
console.log(reverseIter('Marat'));
