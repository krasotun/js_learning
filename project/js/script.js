/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// 1) Удалить все рекламные блоки со страницы(правая часть сайта)

const adv = document.querySelectorAll('.promo__adv img');

adv.forEach(item => { //  сразу у нескольких
    item.remove();
});

// 2. Изменить жанр фильма, поменять "комедия" на "драма"

const genre = document.querySelector('.promo__genre');
genre.textContent = 'драма';

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg".Оно лежит в папке img.
const poster = document.querySelector('.promo__bg');
poster.style.backgroundImage = 'url("img/bg.jpg ")';

// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту
// 5) Добавить нумерацию выведенных фильмов * /

const movieList = document.querySelector('.promo__interactive-list');
movieList.innerHTML = ''; // так можно удалить

movieDB.movies.sort(); // сортируем
movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
            <li class = "promo__interactive-item" > ${i+1} ${film}
                <div class = "delete" > </div> 
                </li>`;
});