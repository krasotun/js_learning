// FizzBuzz
// Напишите функцию, которая принимает целое число N в качестве аргумента и возвращает числа от 0 до N.При этом функция заменяет некоторые числа:
// вместо чисел, кратных 3, вернёт 'fizz',
// 	кратных 5 — вернёт 'buzz',
// 		кратных и 3, и 5 — вернёт 'fizzbuzz'.

const fizzBuzz = num => {
	const arr = [];
	for (let i = 0; i <= num; i++) {
		arr.push(i);
	}
	const newArr = [];
	arr.forEach((value) => {
		if (value % 3 === 0 && value % 5 === 0) {
			newArr.push('fizzbuzz');
		} else if (value % 3 === 0) {
			newArr.push('fizz')
		} else if (value % 5 === 0) {
			newArr.push('buzz')
		} else newArr.push(value)

	})
	return newArr;
}

console.log(fizzBuzz(6));

