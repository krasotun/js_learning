// classnames
// Напишите утилиту для объединения имён классов.Функция должна обрабатывать:
// объекты,
// строки,
// числа, но не 0,
// массивы любой вложенности.

function classnames(...args) {
	const newArgs = args;
	const returnedArgs = [];
	const workWithArray = (array) => {
		array.forEach(element => {
			if (Array.isArray(element)) {
				workWithArray(element)
			} else returnedArgs.push(element);
		});
	}
	newArgs.forEach((arg) => {
		console.log(arg);
		console.log('Цикл');
		if (typeof (arg) === 'number' || arg > 0) {
			returnedArgs.push(arg)
		}
		if (typeof (arg) === 'string') {
			returnedArgs.push(arg);
		}
		if (Array.isArray(arg)) {
			arg.forEach((element) => {
				workWithArray(element)
			})
		}
		if (typeof (arg) === 'object' || !Array.isArray(arg)) {
			Object.values(arg).forEach((element) => {
				if (element) {
					returnedArgs.push(element)
				}
			})
		}
	})
	return returnedArgs.join(' ');
}
console.log(classnames(1, 555, 'Marta', [1, 2, 3, 4], { marat: 'marat' }))