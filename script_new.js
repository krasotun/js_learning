// Задание 3 часть
'use strict';

// Повторяем за тренером

let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {}, //пустой объект
    actors: {},
    genres: [], // пустой массив
    privat: false
};

function start() {
    // Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
    // отменить ответ.Если это происходит -
    // возвращаем пользователя к вопросам опять
    numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", '');
    // проверяем неправильные использования с помощью цикла
    // проверка на пустую строку || означает или null отмена в окне вопроса IsNaN проверка на число
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        // если проверка не прошла повторяем вопрос
        numberOfFilms = prompt("Сколько фильмов Вы уже посмотрели?", '');
    }
}

//вызываем функцию
start();

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lastViewedFilm = prompt("Один из последних просмотренных фильмов?", '');
        const filmScore = prompt("На сколько оцените его?", '');
        //Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
        // отменить ответ или ввести название фильма длинее, чем 50 символов.Если это происходит -
        // возвращаем пользователя к вопросам опять
        // отмена - это запиcь null,
        // != оператор отрицания, используется если нужно задать провреку на НЕ
        // && оператор И
        // !="" - проверка на пустую строку

        if (lastViewedFilm != null && filmScore != null && lastViewedFilm != '' && filmScore != "" && lastViewedFilm.length < 50) {
            personalMovieDB.movies[lastViewedFilm] = filmScore;
            console.log('Done');
        } else {
            console.log('Error');
            // возвращаемся назад
            i--;
        }
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}
console.log(personalMovieDB.count);
detectPersonalLevel();


// 2. Создать функцию showMyDB, которая будет проверять свойство privat.Если стоит в позиции
// false - выводит в консоль главный объект программы

function showMyDB(hidden) {
    if (!hidden) { // если не скрыта
        console.log(personalMovieDB);

    }
}
showMyDB(personalMovieDB.privat);

// 3. Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
// "Ваш любимый жанр под номером ${номер по порядку}".Каждый ответ записывается в массив данных
// genres

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }

}

writeYourGenres();