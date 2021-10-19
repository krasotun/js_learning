'use strict';

const box = document.getElementById('box'); // выбираем квадрат

console.log(box);

const btns = document.getElementsByTagName('button'); //  выбираем кнопки (получаем псевдомассив)

console.log(btns);

const btn2 = document.getElementsByTagName('button')[1]; // обращаемся к конкретной кнопке (2)

console.log(btn2);