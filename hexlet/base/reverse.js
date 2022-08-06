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


let a = 4;
console.log(a -= 8 - a);