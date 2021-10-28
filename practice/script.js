const btns = document.querySelectorAll('button'), // выбираем все кнопки
    wrapper = document.querySelector('.btn-block'); // выбираем блок с кнопками


/* console.log(btns[0].classList.length); //количество классов
console.log(btns[0].classList.item(0)); // получаем конкретный класс по списку
console.log(btns[1].classList.add('red')); // Добавляем конкретный класс 
console.log(btns[0].classList.remove('blue')); // Добавляем конкретный класс 
if (btns[1].classList.contains('red')) { // проверяем есть ли класс
    console.log('Red');

};
*/

btns[0].addEventListener('click', () => {
    if (!btns[1].classList.contains('red')) { // если НЕ СОДЕРЖИТ red
        btns[1].classList.add('red'); // то добавляем его
    } else { // если содержит то удаляем
        btns[1].classList.remove('red');
    }


});

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.tagName == 'BUTTON') {
        console.log('Hello');
    }
});

const btn = document.createElement('button'); // создаем кнопку
btn.classList.add('red'); // присваиваем класс
wrapper.append(btn); // добавляем кнопку