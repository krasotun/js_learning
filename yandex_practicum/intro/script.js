let words = ['Первая фраза', 'Вторая фраза', 'Третья фраза', 'Четвертая фраза', 'Пятая фраза', 'Шестая фраза', 'Седьмая фраза', 'Восьмая фраза', 'Девятая фраза', 'Десятая фраза', ];


function getRandomWord(arr) { // для выбора рандомного значения
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function getFirstWord(arr) { // для выбора первого значения
    return arr[0];

}

let redButton = document.querySelector('.red_btn');
let blueButton = document.querySelector('.blue_btn');

let mainText = document.querySelector('.main_text');
// mainText.textContent = getRandomWord(words);

redButton.addEventListener('click', function () {
    mainText.textContent = getRandomWord(words);
});

blueButton.addEventListener('click', function () {
    mainText.textContent = getFirstWord(words);
});