// const regex = /тара-тина/gi; // добавьте флаги

const mayakovsky = `
  Нет на прорву карантина —
  мандолинят из-под стен:
  Тара-тина, тара-тина,
  т-эн-н...
  Неважная честь,
  чтоб из этаких роз
  мои изваяния высились
`;

console.log(mayakovsky.match(regex));


const iceHockeyPrizes = `
  1983. СССР, Чехословакия, Канада
  1985. Чехословакия, Канада, СССР
  1986. СССР, Швеция, Канада
  1987. Швеция, СССР, Чехословакия
  1989. СССР, Канада, Чехословакия
  1990. СССР, Швеция, Чехословакия
  1991. Швеция, Канада, СССР
  1992. Швеция, Финляндия, Чехословакия
  1993. Россия, Швеция, Чехия
  1994. Канада, Финляндия, Швеция
  1995. Финляндия, Швеция, Канада
  1996. Чехия, Канада, США
  1997. Канада, Швеция, Чехия
  1998. Швеция, Финляндия, Чехия
  1999. Чехия, Финляндия, Швеция
  2000. Чехия, Финляндия, Швеция
  2002. Словакия, Россия, Швеция
  2003. Канада, Швеция, Словакия
`;

// const regex = /словакия/gi;
const slovak = iceHockeyPrizes.match(regex);

console.log(slovak.length);


const model = 'ВАЗ2110, Land Rover Discovery 4, Toyota Corolla, ВАЗ2121';
// const regex = /ВАЗ\d\d\d\d/g;

console.log(model.match(regex));


// const cardholder = 'VАSSILIY_PUPK1N';
const letterRegExp = /\W/g;
const digitRegExp = /\d/g;

console.log(cardholder.match(letterRegExp)); // [ "А" ]
console.log(cardholder.match(digitRegExp)); // [ "1" ]


// const regex = /[^при]/g;
// const str = 'не прислоняться';

console.log(str.match(regex));

const cardholder = 'VASSiliy_PUPK1N';
const forbidden = /[^A-Z\_]/g;

console.log(cardholder.match(forbidden));


// const regExp = /\d{2} \W{7}/g; // напишите регулярное выражение, которое ищет число и месяц

// const aelita = '"Инженер М.С. Лось приглашает желающих лететь с ним 18 августа на планету Марс явиться для личных переговоров от 6 до 8 вечера. Ждановская набережная, дом 11, во дворе".';

console.log(aelita.match(regExp)); //["18 августа"]



// const regExp = /\d{1,2}\s[а-я]{1,}/g; // измените шаблон регулярного выражения, чтобы оно находило любое сочетание "одна-две цифры + слово"
// const aelita = '"Инженер М.С. Лось приглашает желающих лететь с ним 1 сентября на планету Марс явиться для личных переговоров от 6 до 8 вечера. Ждановская набережная, дом 11, во дворе".';

console.log(aelita.match(regExp));


// const regExp = /\d{1,2}\s[a-я]{3,8}/g; // измените шаблон регулярного выражения, чтобы оно не находило "6 до"
const aelita = '"Инженер М.С. Лось приглашает желающих лететь с ним 1 сентября на планету Марс явиться для личных переговоров от 6 до 8 вечера. Ждановская набережная, дом 11, во дворе".';

console.log(aelita.match(regExp)); // ["1 сентября", "6 до", "8 вечера"]


const regExp = /https?:\/\/[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/g; // Допишите шаблон регулярного выражения, чтобы оно находило только IP адреса
const ipList = 'https://yandex.ru, https://praktikum.yandex.ru, https://77.88.21.35, http://77.88.55.50, https://173.194.73.94, https://73.725, https://178.250.100';

console.log(ipList.match(regExp)); // ["https://77.88.21.35", "http://77.88.55.50", "https://173.194.73.94"]

// const regex = /[а-яё]+\S*$/mig; // напишите здесь регулярное выражение с шаблоном и флагами
// const str = `То отголосок юных дней
// В душе проснулся, замирая,
// И в блеске утренних лучей,
// Казалось, ночь была немая.
// То сон предутренний сошёл,
// И дух, на грани пробужденья,
// Воспрянул, вскрикнул и обрёл
// Давно мелькнувшее виденье.
// То был безжалостный порыв
// Бессмертных мыслей вне сомнений.
// И он умчался, пробудив
// Толпы забытых откровений.
// То бесконечность пронесла
// Над падшим духом ураганы.
// То Вечно-Юная прошла
// В неозаренные туманы.`;

console.log(str.match(regex));  // ["дней", "замирая,", "лучей,", "немая.", ...]


const dumas = `Рошфор взял д'Артаньяна за пуговицу, отвёл его в сторону и шёпотом спросил:
— Вы видели его?
— Кого?
— Его.
— Кого?
— Дюма.
— Отца?
— Да.
— Какой человек!
— Ещё бы!
— Какой пыл!
— Нет слов!
— А какая плодовитость!
— Чёрт побери!`;

/* напишите регулярное выражение для отбора строк,
начинающихся с тире "—" */
// const regex = /^\—+/mg;

console.log(dumas.match(regex).length);


const str = 'Я за вами, Мстислав Сергеевич, - крикнул он весело, - пожалуйте в машину, едем.';

const regex = /\s\-{1,}\s/; // должен выхватывать дефисы с пустотами вокруг них

const newStr = str.split(regex);

console.log(newStr);