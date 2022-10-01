// Реализуйте тело функции smallestDivisor(), используя итеративный процесс.
// Функция должна находить наименьший делитель заданного числа.
// Число, передаваемое в функцию, больше нуля.
// Доп.условие: делитель должен быть больше единицы,
// за исключением случая, когда аргументом является единица
// (наименьшим делителем которой является также единица).
// Например, наименьший делитель числа 15 это 3.

// Идея алгоритма:

// Попробуйте разделить число на 2.
// Если число делится без остатка, то это наименьший делитель.
// Если нет, то попробуйте следующий делитель.
// Если ничего не делит число без остатка, то переданное число является простым,
// 	так что его наименьший делитель — оно само(не считая 1)
// Подсказки
// Вспомните про оператор % (modulus or остаток от деления) из урока 5.
//  Он вычисляет остаток от деления одного операнда на другой.Например, 11 % 5 это 1, а 10 % 2 это 0.

// Так что если x % y это 0, то y делит x без остатка.

let acc = 2;
const rec = (num) => {
	if (num % acc === 0) {
		return acc
	} else acc += 1;
	return rec(num);
}
console.log(rec(121));

const smallestDivisor = (num) => {
	if (num % 2 === 0) {
		return 2;
	}
	if (num === 1) {
		return 1;
	}
	const iterator = (acc) => {
		if (num % acc === 0) {
			return acc
		} else return iterator(acc + 1);
	}
	return iterator(2);
};


console.log(smallestDivisor(1));
console.log(smallestDivisor(3));
console.log(smallestDivisor(4));
console.log(smallestDivisor(8));
console.log(smallestDivisor(9));
console.log(smallestDivisor(17));
console.log(smallestDivisor(15));
console.log(smallestDivisor(121));

// то же с while

// Попробуйте разделить число на 2.
// Если число делится без остатка, то это наименьший делитель.
// Если нет, то попробуйте следующий делитель.
// Если ничего не делит число без остатка, то переданное число является простым, так что его наименьший делитель — оно само(не считая 1)
// Подсказки

const withWhile = (num) => {
	if (num < 1) {
		return NaN
	}
	if (num % 2 === 0) {
		return 2;
	}
	if (num === 1) {
		return 1;
	}
	let acc = 3;
	while (acc <= num) {
		if (num % acc === 0) {
			return acc;
		} else acc += 1;
	}
	return acc;
};

console.log(withWhile(-3));




const flip = (foo) => (a, b) => foo(b, a);