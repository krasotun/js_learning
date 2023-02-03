// const date = new Date();
// console.log(date.getMilliseconds());

// Мемоизация №1
// Функция getData ходит за данными и возвращает промис.
// Напишите кеширующую функцию memoize со следующим поведением:
// Если getData ещё не была вызвана, вызывает её и кеширует результат;
// Если вызывалась раньше заданного в функции времени — возвращает сохранённый результат;
// Если вызывалась позже заданного в функции времени, нужно заново сходить за данными.
// Она принимает функцию, сигнатура которой описана в getData, и время жизни кеша.Возвращает мемоизированную функцию.

// Используйте замыкание;
// Чтобы определить, была ли функция вызвана слишком рано или слишком поздно,
// просуммировать последнее время получения данных и время из аргумента, 
// а потом сравните с текущим.Чтобы получить текущее время, вам поможет один из методов у Date.



function getData() {
	return new Promise(resolve => {
		setTimeout(() => resolve(42), 1000)
	})
}

const memoize = (func, timer) => {
	let cache;
	return () => {
		if (cache) {
			console.log('Уже вызывали');
			return Promise.resolve(cache)
		} else {
			console.log('Первый вызов')
			func()
				.then((res) => {
					console.log(res)
					cache = res;
					return Promise.resolve(res);
				})
		}
	}
}
const memoized = memoize(getData);
console.log(memoized())
console.log(memoized())
// console.log(memoized())
// console.log(memoized())
// console.log(memoized())

// const memoized = memoize(getData, 1000);

// memoized()
// 	.then(data1 => console.log(data1)) // получаем долго
// 	.then(memoized)
// 	.then(data2 => console.log(data2)) // получаем быстро, из кеша
// 	.then(memoized)
// 	.then(data3 => console.log(data3)) // получаем быстро, из кеша
// 	.then(() => {
// 		setTimeout(() => {
// 			return memoized().then(data4 => console.log(data4)); // получаем долго, считается заново
// 		}, 5000);
// 	});