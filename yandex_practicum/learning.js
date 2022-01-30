// Задания из тренажера

// 

let year = 2019;

if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
	console.log(year + ' год - високосный');
} else {
	console.log(year + ' год - невисокосный')
}

//

let morningList = [
	'Встать с кровати',
	'Почистить зубы',
	'Сделать зарядку',
	'Позавтракать',
	'Помыть посуду'
];

for (let i = 0; i <= morningList.length - 1; i++) {
	console.log(morningList[i]);
}


//

let morningList = [
	'Встать с кровати',
	'Почистить зубы',
	'Сделать зарядку',
	'Позавтракать',
	'Помыть посуду'
];

// for (инициализация; условие; финальное выражение)
for (let i = 0; i <= morningList.length - 1; i++) {
	console.log(morningList[i]);
}

let i = 0;
while (i < morningList.length) {
	console.log(morningList[i]);
	i++;
}

//

let employee = {
	firstName: 'Василий',
	lastName: 'Тёркин',
	age: 28
} //допишите код здесь


function getFullName() {
	console.log(`${employee.firstName} ${employee.lastName}`)
}

getFullName(employee);


//