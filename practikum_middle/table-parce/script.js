// Разметка
// Напишите функцию highlight, которая для каждой строки tr таблицы пользователей чатов:
// Проставит класс regular или admin,
// 	в зависимости от значения атрибута data - role у ячейки Role.
// 	Если такого атрибута нет, функция должна добавить атрибут hidden;
// Проставит класс male или female в зависимости от содержимого ячейки Gender;
// Установит inline - стиль style = "text-decoration: line-through", если значение ячейки Age меньше 18.
// Условие должны выполнятся даже если у элемента стоит атрибут hidden.
// В результате у вас должно получиться так:

function highlight(table) {
	const strings = table.querySelectorAll('tr');
	strings.forEach(element => {
		const cells = element.querySelectorAll('td');
		cells.forEach((element) => {
			console.log(element.getAttribute('data-role'))
		})
	});
}