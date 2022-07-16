// Массивы, алгоритмы, контекст, ООП
// у каждого пользователя есть свойство age — возраст.Посчитайте средний возраст целевой аудитории артиста.
const data =
	[
		{ name: "Саша", age: 19 },
		{ name: "Катя", age: 21 },
		{ name: "Миша", age: 17 },
		{ name: "Федя", age: 23 },
		{ name: "Клава", age: 22 }
	]
function calcAvgAge(array) {
	let ageArray = [];
	array.forEach(element => {
		ageArray.push(element.age);
	});
	return (ageArray.reduce((sum, elem) => sum + elem) / array.length)

}
console.log(calcAvgAge(data));


//  В массиве записаны марсианские года — переведите их в земные, увеличив каждое число вдвое.
const arr = [17, 23, 31, 44, 59];

doubleNumber(arr); // возвращает [34,46,62,88,118];

function doubleNumber(array) {
	return array.map(element => element * 2);
}

console.log(doubleNumber(arr));

// Есть массив, длина которого заранее неизвестна.Допишите функцию, которая вернёт последний элемент переданного массива.

let words = ['Ночь', 'Улица', 'Фонарь', 'Аптека', 'Бессмысленный', 'Тусклый', 'Свет'];

getLastElementOfArray(words); // возвращает Свет;

function getLastElementOfArray(array) {
	return array[array.length - 1];
}

console.log(getLastElementOfArray(words));



// По европейской схеме нумерации дома с нечётными номерами располагаются слева от дороги,
// 	а дома с чётными номерами — справа.Напишите функцию, которая разложит массив
// 	 с целыми числами на чётные и нечётные и вернёт объект вида:

const numbers = [1, 2, 3, 4, 5, 6];
// должен вернуть { even: [2, 4, 6], odd: [1, 3, 5] }

function separateArray(array) {
	const evensArray = array.filter(el => el % 2 == 0)
	const odsArray = array.filter(el => el % 2 !== 0)
	console.log(evensArray);
	console.log(odsArray);
	return {
		even: [...evensArray],
		odd: [...odsArray]
	}
}

console.log(separateArray(numbers)); 