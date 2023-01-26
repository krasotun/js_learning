function canGetCount(num) {
	let counter = 0;
	return function () {
		counter += 1;
		if (counter <= num) { return 'yes' } else {
			return 'no'
		}
	}
}

const getOne = canGetCount(2);


getOne()  // yes
getOne()  // yes
getOne()  // no

// Напишите функцию canGetCount.Она принимает число N и возвращает функцию, которая:
// первые N вызовов возвращает строку “yes”,
// каждый следующий вызов возвращает строку “no”.



