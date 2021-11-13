let words = ['Первая фраза', 'Вторая фраза', 'Третья фраза', 'Четвертая фраза', 'Пятая фраза', 'Шестая фраза', 'Седьмая фраза', 'Восьмая фраза', 'Девятая фраза', 'Десятая фраза', ];


function getRandomWord() {
    let randomIndex = Math.floor(Math.random() * words.length);
    let randomWord = words[randomIndex];
    return randomWord;
}

let redButton = document.querySelector('.btn');
let mainText = document.querySelector('.main_text');


redButton.addEventListener('click', function () {
    mainText.textContent = getRandomWord();
});