// ТИПЫ ДАННЫХ

let digit = 115; // тип данных число
let person = 'Marat Ibragimov'; // тип данных - строка string (в кавычки - двойные или одинарные)

// объект - это когда много свойств. Формат - ключ:значение.
//const me = {
//  name: "Marat",
//  lastName: "Ibragimov",
// age: '39',
// married: true // булево - boolean (false/true) ложь истина
// };
// console.log(me.name); // обращаемся к значению переменной в объекте через точку

// Массив - это частный случай объекта. Ключ ВСЕГДА фиксирован - это номер объекта.
// let array = ['Ростов', 'Каменск', 'Москва', 6, 'Зерноград'];
// console.log(array[1]); // обращаемся к значению переменной через номер [1].  начинается с 0.

// ВЗАИМОДЕЙСТВИЕ С ПОЛЬЗОВАТЕЛЕМ


// alert('hello'); // всплывающее окно - информер

// confirm('Are you here?'); // всплывающее окно с запросом на подтверждение от пользователя (да/нет).
// const result = confirm('Are you here?'); // Можно сохранять в переменную (boolean)

// prompt("Вы откуда?", 'Дефолтный ответ'); // всплывающее окно с запросом информации от пользователя
// const answer = prompt("Вы откуда?", 'Дефолтный ответ'); // Можно сохранять в переменную или массив

// const answers = []; //создаем пустой массив - туда будем записывать ответы от пользвателей
// answers[0] = prompt("Как вас зовут?", 'Марат');
// answers[1] = prompt("Ваша фамилия?", 'Ибрагимов');
// answers[2] = prompt("Сколько Вам лет?", '39');

// ИНТЕРПОЛЯЦИЯ - вставлять значения прямо в переменную


// const category = "toys";
// console.log('https://someurl.com/' + category); // конкатенция
// console.log(`https://someurl.com/${category}/любой текст`); // интерполяция (проще работать)

// const newName = 'Marat';
// console.log(`Привет, ${newName}!`); // интерполяция (еще)


// ОПЕРАТОРЫ

let incr = 10, // объявляем переменные
    decr = 10; // можно сразу 2 через ,

// постфиксная форма (нелья использовать для вывода)
incr++; // increment (увеличение на 1)
decr--; // decrement (уменьшение на 1)

// префиксная  форма (можно использовать для вывода)
++incr; // increment (увеличение на 1)
++decr; // decrement (уменьшение на 1)

console.log(incr);
console.log(decr);

// остаток от деления двух чисел
// 5%2; // выведет 1

// сравнение == или ===
// 4*2 == 8 // выведет true или false

// || или
// && и 

// const isChecked = true,
//  isClose = true;
// console.log(isChecked && isClose);
// !перед значением  превращает true в false и наоборот




// УСЛОВИЯ



// if (4 == 9) { //задаем условие
//  console.log('Верно!'); // действие, которое выполняется, если условие выполнено
// } else { // что делать, если не выполяется условие
// console.log('Не верно!'); // действие, которое выполняется, если условие НЕ выполнено
// }

//const num = 50;
// if (num < 49) {
//  console.log('Error');
//} else if (num > 100) { // второе условие
//  console.log('Много');
// } else {
//  console.log('OK!');
// }
// другая запись
// (num === 50) ? console.log('ok'): console.log('Error');

//switch - модификация if можно указать сразу несколько значений для условия
// всегда идет на СТРОГОЕ сравнение

//const num = 55;
// switch (num) {
//  case 49: // Первый кейс - если равно 49
//   console.log('Неверно');
// break; // еслм условие выполнилось то скрипт заканчивается - если нет  идет дальше
// case 100: // второй кейс
// console.log('Неверно');
// break;
// case 50:
// console.log('Верно');
// break;
// default:
// console.log('Не в этот раз'); // действие если не один кейс не подошел
//break;
// }



// ЦИКЛЫ




// while (num < 55) { // 1ый тип цикла. пока это условие выполняется мы будем делать это  действие
// console.log(num);
// num++;
// }

// do { // 2ой тип цикла - делай до наступления условия
//  console.log(num);
// num++;
// }
// while (num < 55); // условие в конце


//let num = 50;
// for (let i = 1; i < 10; i++) { //3ий тип цикла (старц цикла, конец цикла, шаг)
//  if (i == 6) { //можно добавлять особые условия
// break; // можно прерывать
//  continue; // или продолжать далее, значение (в данном примере 6) пропустится
// }
// console.log(i);
// }



// ФУНКЦИИ

let numm = 20;

// function declaration - создается ДО начала выполнения скрипта

function showFirstMessage(text) { // в круглые скобки передаются аргументы
    console.log(text); // задаем что делает функция
    numm = 10; // если объявлеяем внутри функции то снаружу она недоступна

}

showFirstMessage('Hello'); //здесь мы вызываем функцию аргумент передается в функцию
console.log(numm);

function calc(a, b) {
    return (a + b); // return - это вернуть. после return НИЧЕГО не задаем
}
console.log(calc(4, 5)); // подставляем аргументы
console.log(calc(3, 5)); // подставляем аргументы

// function declaration - объявление создаетсякогда скрип до нее доходит
const logger = function () {
    console.log('Hello');
};
logger(); // вызываем

// стрелочная функция - не имеет вызова

// const calc(a, b) => a + b;