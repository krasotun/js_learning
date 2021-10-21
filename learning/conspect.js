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

 // 1ый тип - function declaration
 // Функция создается ДО начала выполнения скрипта
 // Можно вызвать перед объявлением

 function showFirstMessage(text) { //в круглые скобки передаются аргументы
   console.log(text); // задаем что делает функция
   numm = 10; // если объявляем внутри функции то снаружи она недоступна
 }

 showFirstMessage('Hello'); // здесь мы вызываем функцию аргумент передается в функцию



 function calc(a, b) {
   return (a + b); // return -это вернуть.после return код в функции НЕ ВЫПОЛНИТСЯ

 }
 console.log(calc(4, 5)); //подставляем аргументы
 console.log(calc(3, 5)); // подставляем аргументы
 console.log(calc(15, 25)); // подставляем аргументы


 // 2ой тип function expression 
 // создается когда скрипт до нее доходит

 const logger = function () { //создается так
   console.log('Hello');
 };

 logger(); // вызывается так

 // 3ий тип - стрелочные функкции
 // не имеет вызова - выполняется сразу

 const calc(a, b) => {
   return a + b
 };



 // МЕТОДЫ СТРОК и ЧИСЕЛ


 // строки

 const str = 'test';
 const arr = [1, 2, 3];

 console.log(str.length); //свойство -  через точку
 console.log(arr.length); //свойство -  через точку


 console.log(str.toUpperCase()); //метод- круглые скобки в конце


 let fruit = 'Some Fruit';
 console.log(fruit.indexOf('fruit')); // ищет позицию сиvволов


 let logg = "Hello World";
 console.log(logg.slice(6, 11)); // вырезает символы (с какого по какой)
 console.log(logg.slice(6)); // если 1 аргумент то обрезается до конца
 console.log(logg.substr(6, 5)); // сколько символов вырезать

 // числа

 const numn = 12.2;
 console.log(Math.round(numn)); // библиотека math - очень много параметров
 // numm округление

 const test = '12.2px';
 console.log(parseInt(test)); // переводит строку в  ЦЕЛОЕ число
 console.log(parseFloat(test)); // переводит строку в число



 // Callback-функции
 // Функция должна быть выполнена после того как
 // другая функция завершила свое выполнение
 // нужно для последовательности функций

 //Смысл такой: вторым аргументом передаётся функция(анонимная или обычная),
 // которая выполняется по завершении действия.

 function learnJS(lang, callback) { //объявляем функцию (второй аргумент callback)
   console.log(`Я учу:${lang}`);
   callback(); // указываем callback
 }

 function done() {
   console.log('Я прошел этот урок');
 }

 learnJS('JavaScript', function () { //передаем АНОНИМНУЮ  функцию для callback
   console.log('Я прошел этот урок');
 });

 learnJS('React', done); // передаем ОБЫЧНУЮ функцию для Callback


 // ОБЪЕКТЫ

 const options = { //  создаем объект
   name: 'test', // формат ключ: значение
   width: 1024,
   heigth: 1024,
   colors: { //вложенный объект
     border: 'black',
     bg: 'red'
   },
   makeTest: function () { // создаем свой метод для объекта
     console.log('Make Test');
   }
 };

 options.makeTest(); // запускаем метод


 // Деструктуризация - выборка значений 
 // из вложенных объектов в объект
 const {
   border,
   bg
 } = options.colors; // "вытаскиваем" из объекта в объекте
 console.log(border);


 delete options.name; //если нужно удалить


 let counter = 0; // счетчик элементов
 for (let key in options) { // перебираем объект циклом
   console.log(`Свойство ${key} имеет значение ${options[key]}`);
   counter++;

 }
 console.log(`${counter} элемента в объекте`); // вывод счетчика элементов 

 console.log(Object.keys(options)); // метод для объекта - показывает все ключи
 console.log(Object.keys(options).length); //  кол-во ключей


 // МАССИВЫ


 const arrayName = [1, 2, 3, 6, 8]; // объявляем массив

 arrayName.pop(); // удаляет последний элемент 

 arrayName.push(10); // добавляет элемент в конце


 arrayName.sort(); // сортировка (по умолчанию сортирует как строки)
 console.log(arrayName);
 arrayName.sort(compareNum); // сортировка с функцией (для чисел)

 function compareNum(a, b) { // функция для сортировки
   return a - b;
 }
 console.log(arrayName);


 for (i = 0; i < arrayName.length; i++) { //1 способ перебрать массив
   console.log(arrayName[i]);
 }

 for (let value of arrayName) { // 2ой способ перебрать массив
   console.log(value);
 }

 arrayName.forEach(function (item, i, arrayName) { // 3ий способ перебрать массив - метод
   console.log(`${i}: ${item} внутри массива ${arrayName}`) // item - значение, 
   // i -номер по порядку. 
   // Нзвания аргументов - любые
 });



 // Spread оператор или передача по ссылке
 // (!!!) важный момент для новичков


 let a = 5,
   b = a;

 b = b + 5;
 console.log(b);
 console.log(a);

 const obj = { // создаем объект 
   a: 5,
   b: 1
 };

 const copy = obj; // создаем копию объекта

 copy.a = 10; // меняем значение в КОПИИ

 console.log(copy); // но меняя копию меняется и САМ объект
 console.log(obj); // тк передача данных идет ССЫЛКОЙ

 function copyObj(mainObj) { // 1ый вариант передачи без ссылки (копирование объекта)
   let objCopy = {}; // создаем пустую копию объекта
   let key;
   for (key in mainObj) { // создаем цикл для перебора
     objCopy[key] = mainObj[key]; // заполняем копию объекта
   }
   return objCopy;
 };

 const numbers = { // новый исходный объект
   a: 5,
   b: 2,
   c: {
     x: 10,
     y: 15
   },

 };

 const newNumbers = copyObj(numbers); // создаем копию, вызываем функцию для заполнения
 newNumbers.a = 18; // меняем значение для проверки
 console.log(numbers); // создается ПОВЕРХНОСТНАЯ копия
 console.log(newNumbers); // вложенные объекты все равно идут ссылкой

 const add = { // 2ый вариант передачи без ссылки (слияние объектов) - делать с пустым
   d: 22,
   e: 25
 };

 console.log(Object.assign(numbers, add)); // метод для слияния объектов

 const oldArray = [1, 2, 3, 4, 8, 6]; // копирование массивов
 const newArray = oldArray.slice(); // делается так, с помощью slice

 console.log(oldArray);
 newArray[2] = 158;
 console.log(newArray);

 const video = ['youtube', 'vimeo', 'rutube'], // Spread оператор
   blogs = ['wordpress', 'livejournal', 'facebook'],
   internet = [...video, ...blogs, 'vk', 'instagram']; // Spread оператор - сюда будм складывать два массива

 console.log(video);
 console.log(blogs);
 console.log(internet);

 function log(a, b, c) {
   console.log(a);
   console.log(b);
   console.log(c);
 }

 const newNum = [5, 7, 8]
 log(...newNum); // передача данных из массива в функцию

 const arraySpread = [15, 25, 13, 5]; // 3ий способ создания копии - Spread оператор
 const copyArraySpread = [...arraySpread]; //  для массива

 const objectSpread = {
   one: 1,
   two: 2
 };
 const copyObjectSpread = { // для объекта
   ...objectSpread
 };


 // ВЗАИМОДЕЙСТВИЕ СО СТРАНИЦЕЙ - ВЫБОР ЭЛЕМЕНТОВ
 // все в папке element

 const box = document.getElementById(); //  вариант выбора - по ID

 const btns = document.getElementsByTagName(); //  вариант выбора - по тегу

 const circles = document.getElementsByClassName(); //  по классу

 const hearts = document.querySelectorAll(); // обращается по CSS селектору (ищем все что угодно)

 const heart = document.querySelector(); // без ALL ищет только первый элемент


 // ВЗАИМОДЕЙСТВИЕ СО СТРАНИЦЕЙ  - ИЗМЕНЕНИЕ ЭЛЕМЕНТОВ

 // box.style.backgroundColor = 'blue'; // можем менять свойство
 // box.style.width = '500px'; // можем менять свойство

 box.style.cssText('background-color:blue;width:500px') // задаем CSS

 btns[1].style.borderRadius = '100%'; // у КОНКРЕТНОЙ  кнопки

 for (let i = 0; i < hearts.length; i++) { // // сразу у нескольких - ЦИКЛОМ 
   hearts[i].style.backgroundColor = 'blue';
 }

 hearts.forEach(item => { //  сразу у нескольких
   item.style.backgroundColor = 'blue';
 });

 // ВЗАИМОДЕЙСТВИЕ СО СТРАНИЦЕЙ  - СОЗДАНИЕ ЭЛЕМЕНТОВ

 const div = document.createElement('div'); //  создаем элемент
 div.classList // работа с классами

 div.classList.add('black'); // добавляем класс

 document.body.append(div); // добавляем элемент на страницу (в конец BODY)
 // append в конец, prepend в начало
 // before - вставка перед
 // after - вставка  назад
 // remove - удалить
 // replaceWith заменить