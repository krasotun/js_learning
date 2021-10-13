 // ТИПЫ ДАННЫХ

 let digit = 115;
 // тип данных число
 let person = 'Marat Ibragimov';
 // тип данных - строка string(в кавычки - двойные или одинарные)

 //объект - это когда много свойств. Формат - ключ:значение.

 const me = {
   name: "Marat",
   lastName: "Ibragimov",
   age: '39',
   married: true, //булево - boolean(false / true) ложь истина
 };
 console.log(me.name);
 // обращаемся к значению переменной в объекте через точку

 // Объект в {} массив в []

 // Массив - это частный случай объекта. Ключ ВСЕГДА фиксирован - это номер объекта.

 let array = ['Ростов', 'Каменск', 'Москва', 6, 'Зерноград'];
 console.log(array[1]);
 //обращаемся к значению переменной через номер[1].начинается с 0.

 let type = typeof (me);
 // typeof  - показывает тип данных

 // ВЗАИМОДЕЙСТВИЕ С ПОЛЬЗОВАТЕЛЕМ


 alert('hello');
 // всплывающее окно - информер

 confirm('Are you here?');
 // всплывающее окно с запросом на подтверждение от пользователя(да / нет).

 const result = confirm('Are you here?');
 // Можно сохранять в переменную(boolean)

 prompt("Вы откуда?", 'Дефолтный ответ');
 //всплывающее окно с запросом информации от пользователя

 const answer = prompt("Вы откуда?", 'Дефолтный ответ');
 //Можно сохранять в переменную или массив

 const answers = [];
 //создаем пустой массив - туда будем записывать ответы от пользвателей

 answers[0] = prompt("Как вас зовут?", 'Марат');
 answers[1] = prompt("Ваша фамилия?", 'Ибрагимов');
 answers[2] = prompt("Сколько Вам лет?", '39');



 // ИНТЕРПОЛЯЦИЯ - вставлять значения прямо в переменную


 const category = "toys";
 console.log('https//:someurl.com/' + category);
 //конкатенция

 console.log(`https:someurl.com/${category}/любой текст`);
 //интерполяция(проще работать)

 const newName = 'Marat';
 console.log(`Привет, ${newName}!`);
 // интерполяция(еще)


 // ОПЕРАТОРЫ

 let incr = 10,
   // объявляем переменные
   decr = 10;
 // можно сразу 2 через,

 // постфиксная форма(нелья использовать для вывода)
 incr++;
 // increment(увеличение на 1)
 decr--;
 // decrement(уменьшение на 1)

 // префиксная форма(можно использовать для вывода)
 ++incr;
 // increment(увеличение на 1)
 ++decr;
 //decrement(уменьшение на 1)

 console.log(incr);
 console.log(decr);

 // остаток от деления двух чисел выведет 1
 5 % 2;



 // сравнение == или === - три равно это строгое раверносто.
 // 2 равно число и строку с одинаковым значением при сравнении будет считать одним и тем же
 // а 3 равно - точно сравнит
 4 * 2 == 8 // выведет true или false

   || // оператор ИЛИ
   && // оператор И
   ! // оператор ОТРИЦАНИЯ (перед значением превращает true в false и наоборот)

   const isChecked = true,
     isClose = true;
 console.log(isChecked && isClose);




 // УСЛОВИЯ



 if (4 == 4) { // задаем условие

   console.log('Верно!'); // действие, которое выполняется, если условие выполнено

 } else { //что делать, если не выполяется условие

   console.log('Не верно!'); // действие, которое выполняется, если условие НЕ выполнено

 }

 const num = 50;
 if (num < 49) {
   console.log('Error');
 } else if (num > 100) { // второе условие

   console.log('Много');
 } else {
   console.log('OK!');
 }

 (num === 50) ? console.log('ok'): console.log('Error'); // другая запись (ТЕРНАРНЫЙ оператор)

 //switch -модификация
 // if можно указать сразу несколько значений для условия
 // switch всегда проверяет  на СТРОГОЕ сравнение

 const num = 49;
 switch (num) {
   case 49: // Первый кейс - если равно 49
     console.log('Верно');
     break; // еслм условие выполнилось то скрипт заканчивается - если нет идет дальше
   case 100: // второй кейс
     console.log('Неверно');
     break;
   case 50:
     console.log('Верно');
     break;
   default: // действие если не один кейс не подошел
     console.log('Не в этот раз');
     break;
 }


 // ЦИКЛЫ


 //1ый тип
 let num = 50;
 while (num < 55) { //пока это условие выполняется 
   console.log(num); // мы будем делать это действие
   num++;
 }

 //2ой тип 
 do { // делай до наступления условия
   console.log(num);
   num++;
 }
 while (num < 55); // условие в конце


 //3ий тип (самый популярный) 
 for (let i = 1; i < 26; i++) { // старт цикла, конец цикла, шаг
   if (i == 15) { // можно добавлять особые условия
     break; // можно прерывать (в этом случае на 15)
     //continue; //или пропускать значения (в этом случае 15) 
     // break или continue - ВЗАИМОИСКЛЮЧАЕМЫЕ команды
   }
   console.log(i);
 }


 // ФУНКЦИИ


 // Функция создается ДО начала выполнения скрипта
 function showFirstMessage(text) { //в круглые скобки передаются аргументы
   console.log(text); // задаем что делает функция
   numm = 10; // если объявляем внутри функции то снаружи она недоступна
 }

 showFirstMessage('Hello'); // здесь мы вызываем функцию аргумент передается в функцию



 function calc(a, b) {
   return (a + b); // return -это вернуть.после
   // return НИЧЕГО не задаем
 }
 console.log(calc(4, 5)); //подставляем аргументы
 console.log(calc(3, 5)); // подставляем аргументы


 function declaration - объявление создается когда скрип до нее доходит
 const logger = function () {
   console.log('Hello');
 };
 logger();
 вызываем

 стрелочная функция - не имеет вызова

 const calc(a, b) => a + b;


 // МЕТОДЫ СТРОК и ЧИСЕЛ


 строки

 const str = 'test';
 const arr = [1, 2, 3];
 console.log(str.length);
 через точку - свойство
 console.log(str.toUpperCase());
 а это уже метод обязательно круглые скобки в конце

 let fruit = 'Some Fruit';
 console.log(fruit.indexOf('fruit'));
 ищет позицию сиволов

 let logg = "Hello World";
 console.log(logg.slice(6, 11));
 World Вырезать символы - 1 аргумент с какого начинать 2(не включая) на каком заканчивать
 console.log(logg.slice(6));
 если 1 аргумент то обрезается до конца
 console.log(logg.substr(6, 5));
 сколько символов вырезать


 числа

 const numn = 12.2;
 console.log(Math.round(numn));
 округление.для чисел используем библиотеку math - очень много параметров

 const test = '12.2px';
 console.log(parseInt(test));
 переводит число в другую систему исчисления