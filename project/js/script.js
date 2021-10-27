/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';


document.addEventListener('DOMContentLoaded', () => {
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

    movieDB.movies.sort(); // сортируем

    function createMovieList(films, parent) {
        parent.innerHTML = ''; // так можно удалить



        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class = "promo__interactive-item" > ${i+1} ${film}
                <div class = "delete" > </div> 
                </li>`;
        });
    }

    createMovieList(movieDB.movies, movieList);

    /* 
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
новый фильм добавляется в список.Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S.Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
 2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
"Добавляем любимый фильм"
5) Фильмы должны быть отсортированы по алфавиту 
*/


    const addForm = document.querySelector('form.add'); // для формы
    const addInput = addForm.querySelector('.adding__input'); // для ввода формы
    const checkbox = addForm.querySelector('[type="checkbox"]'); // 4ое задание

    addForm.addEventListener('submit', (event) => { //обработчик для формы 
        event.preventDefault(); // отключаем обновление страницы при добавлении

        let newFilm = addInput.value; // Значение - что ввел пользователь
        const favorite = checkbox.Checked; // чекбокс Любимый фильм (4ое задание)
        if (newFilm) { // не даем ввести пустую строку
            if (newFilm.length > 21) { // 2ое задание
                newFilm = `${newFilm.substring(0, 22)}...`;

            }

            movieDB.movies.push(newFilm); // добавлем фильм в Массив
            movieDB.movies.sort(); // 5ое задание (сортируем)
            createMovieList(movieDB.movies, movieList);
        }

        addForm.reset(); // сбрасываем форму


    });






    /* 3) При клике на мусорную корзину - элемент будет удаляться из списка(сложно)


    
    */






});