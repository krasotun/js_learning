const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout));

const promises = [
	delay(65).then(() => 10),
	delay(100).then(() => { throw 'my error'; })
];

// function allSettled(promises) {
// 	const returnedArr = [];
// 	promises.forEach((promise) => {
// 		promise
// 			.then((res) => {
// 				returnedArr.push({
// 					status: 'resolved',
// 					value: res
// 				})
// 			}
// 			)
// 	})
// 	Promise.all(promises)
// 		.catch((error) => {
// 			returnedArr.push({
// 				status: 'rejected',
// 				reason: error
// 			})
// 		})
// 	return Promise.resolve(returnedArr)
// }
function allSettled(promises) {
	const wrapper = (promise) => (
		promise
			.then((value) => ({ status: 'resolved', value }))
			.catch((reason) => ({ status: 'rejected', reason }))
	);
	return Promise.all(promises.map(wrapper));
}

allSettled(promises).then((res) => {
	console.log(res);
})
// Реализуйте функцию allSettled, которая дождётся выполнения всех промисов и вернёт их результаты при любом исходе,
// — даже если один из промисов выбросил исключение.
// Функция должна всегда возвращать промис, который резолвит преобразованный массив промисов в массив объектов, каждый объект обладает следующими свойствами:
// если промис выполнился успешно — свойство status: 'resolved' и свойство value с результатом,
// 	если промис выполнился с ошибкой — свойство status: 'rejected' и свойство reason с текстом ошибки.
// В задаче нельзя использовать метод allSettled.

// В функции необходимо работать с каждым промисом по отдельности;
// Не забудьте, что ошибки обрабатывают в catch;
// В решении вам поможет Promise.all().
