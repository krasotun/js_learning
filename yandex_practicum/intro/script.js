let words = ['Первая фраза', 'Вторая фраза', 'Третья фраза',
    'Четвертая фраза', 'Пятая фраза', 'Шестая фраза',
    'Седьмая фраза', 'Восьмая фраза', 'Девятая фраза', 'Десятая фраза',
];

let randomButton = document.querySelector('.rnd_btn');
let firstButton = document.querySelector('.first_btn');
let currentButton = document.querySelector('.current_btn');
let nextButton = document.querySelector('.next_btn');
let mainText = document.querySelector('.main_text'); // текст, который будем менять
let currentText = document.querySelector('.current_text'); // текст под кнопками


function getRandomWord(arr) { // для выбора рандомного значения
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function getFirstWord(arr) { // для выбора первого значения
    return arr[0];

}

function getCurrentWord(arr) { // для поиска текущего значения
    let currentElement = mainText.textContent;
    return currentElement;
}

function getNextWord(arr) { // для поиска следующего значения
    let nextElement = arr[arr.indexOf(mainText.textContent) + 1];
    if (arr.indexOf(mainText.textContent) == arr.length - 1) { // условие для последнего значения
        nextElement = arr[0]; // возвращаемся в начало
    }
    return nextElement;

}

getNextWord(words);
randomButton.addEventListener('click', function () {
    mainText.textContent = getRandomWord(words);
});

firstButton.addEventListener('click', function () {
    mainText.textContent = getFirstWord(words);
});

currentButton.addEventListener('click', function () {
    currentText.textContent = getCurrentWord(words);
});

nextButton.addEventListener('click', function () {
    mainText.textContent = getNextWord(words);
})