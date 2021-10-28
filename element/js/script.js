'use strict';

const box = document.getElementById('box'); // выбираем квадрат
const btns = document.getElementsByTagName('button'); //  выбираем кнопки (получаем псевдомассив)
const btn2 = document.getElementsByTagName('button')[1]; // обращаемся к конкретной кнопке (2)
const circles = document.getElementsByClassName('circle'); // обращаемся по классу
const hearts = document.querySelectorAll('.heart'); // обращается по CSS селектору (ищем все что угодно)
const oneHeart = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');


// box.style.backgroundColor = 'blue'; // можем менять свойства
// box.style.width = '500px'; // можем менять свойства

box.style.cssText = 'background-color: blue; width:500px' // задаем CSS
btns[1].style.borderRadius = '100%'; // у КОНКРЕТНОЙ  кнопки

// for (let i = 0; i < hearts.length; i++) { // // сразу у нескольких - ЦИКЛОМ 
//  hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => { //  сразу у нескольких
    item.style.backgroundColor = 'blue';
});


const div = document.createElement('div'); //  создаем элемент
// const text = document.createTextNode ('Здесь был Маратик'); // создаем текст

div.classList.add('black'); // добавляем класс

document.body.append(div); // добавляем элемент на страницу

// document.querySelector('.wrapper').append(div); // добавляем сразу, без переменной
wrapper.append(div); // добавлем с переменной

//1ый способ
const btn = document.querySelector('button'); // выбираем кнопку
// btn.onclick = function () { // вешаем функцию на событие
//  alert('Clicked');
// };

// 2ой способ / 1ый аргумент событие, 2ой аргумент - функция
btn.addEventListener('click', () => {
    alert('clickedв');
});

console.log(document.body);
console.log(document.body.childNodes);
console.log(document.querySelector('button'));
console.log(document.querySelector('button').parentNode); // обращаемся к родителю