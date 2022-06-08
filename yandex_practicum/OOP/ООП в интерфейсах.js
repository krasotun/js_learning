const items = [{
		image: 'https://code.s3.yandex.net/web-code/oop/card_detail.jpg',
		title: 'BIOLOID',
		description: 'Это популярная серия программируемых робототехнических конструкторов компании Robotis. Серия представлена разнообразными универсальными наборами, которые подойдут как начинающим робототехникам, так и специалистам, работающим над решением актуальных робототехнических задач. Также в наборе есть пульт для управления роботом и набор пластиковых элементов для придания уникального вида собранным моделям.',
		price: '82 000'
	},
	{
		image: 'https://code.s3.yandex.net/web-code/oop/card_detail.jpg',
		title: 'BIOLOID Premium kit',
		description: 'BIOLOID Premium kit – набор для создания различных шагающих роботов на основе моторов Dynamixel и контроллера СМ-530, для образования, игр и соревнований.',
		price: '126 000'
	},
	{
		image: 'https://code.s3.yandex.net/web-code/oop/card_detail2.png',
		title: 'Airwheel',
		description: 'Модель позволяет использовать при движении и педали и электрическую тягу, а также их сочетание. Съемный аккумулятор легко заменяется во время поездки, позволяя тем самым существенно увеличивать ее продолжительность.',
		price: '145 000'
	},
];

const popupElement = document.querySelector('.popup');
const popupImage = document.querySelector('.popup__image');
const popupCloseButton = document.querySelector('.popup__close');

class Card {
	constructor(data, cardSelector) {
		this._title = data.title;
		this._description = data.description;
		this._price = data.price;
		this._image = data.image;
		this._cardSelector = cardSelector;
	}

	_getTemplate() {
		const cardElement = document
			.querySelector(this._cardSelector)
			.content
			.querySelector('.card')
			.cloneNode(true);

		return cardElement;
	}

	generateCard() {
		this._element = this._getTemplate();

		this._element.querySelector('.card__image').style.backgroundImage = `url(${this._image})`;
		this._element.querySelector('.card__title').textContent = this._title;
		this._element.querySelector('.card__info').textContent = this._description;
		this._element.querySelector('.card__price-property').textContent = this._price;

		return this._element;
	}

	_handleOpenPopup() {
		popupImage.src = this._image;
		popupElement.classList.add('popup_is-opened');
	}
	_handleClosePopup() {
		popupImage.src = '';
		popupElement.classList.remove('popup_is-opened');

	}
	_setEventListeners() {
		this._element.addEventListener('click', () => {
			this._handleOpenPopup();
		});
		popupCloseButton.addEventListener('clik', () => {
			this._handleClosePopup();
		});
	}

	/* Теперь создайте метод _setEventListeners, чтобы он добавлял все обработчики в одном месте.Опишите в нём события клика по двум элементам:
		карточке this._element;
	иконке закрытия, которая хранится в переменной popupCloseButton.
	Пусть клик по этим элементам вызывает соответствующие методы из класса Card.Колбэк слушателя событий— стрелочная функция.
	В финале добавьте в тело метода generateCard вызов _setEventListeners.Тогда метод создаст карточки уже с обработчиком. */
}

items.forEach((item) => {
	const card = new Card(item, '.horizontal-card');
	const cardElement = card.generateCard();
	this._setEventListeners();
	// Добавляем в DOM
	document.querySelector('.card-list__items').append(cardElement);
});

/* Поработайте над интернет - магазином.Пусть по клику на карточку товара появляется всплывающее окно, которое уже есть в вашем DOM - дереве.Попап скрывается, если кликнуть на крестик.
	Для этого создайте внутри класса Card два метода обработки событий: _handleOpenPopup— при клике на карточку, _handleClosePopup— при клике на крестик.
	Мы подготовили переменные popupImage и popupElement.В них находятся элементы с изображением в окне попапа и само это окно.
	В методе _handleOpenPopup:
		переменной popupImage переопределите свойство src на this._image,
		переменной popupElement методом classList.add добавьте класс popup_is - opened.
	В методе _handleClosePopup:
		переменной popupImage переопределите свойство src на '',
		переменной popupElement методом classList.remove уберите класс popup_is - opened. */


/* Подготовьте класс к увеличению объёма данных.Научите его принимать список аргументов в виде объекта.Назовите этот параметр data.
Конструктор сделайте универсальным для разных template - элементов.Для этого добавьте в него селектор шаблона.Назовите этот параметр cardSelector.Код внутри метода forEach оставьте без изменений. */


/* Осталось опубликовать карточки.Обойдите массив items и для каждого его элемента:
	создайте экземпляр класса Card,
	подготовьте карточку к публикации и верните результат,
	опубликуйте карточку в card - list__items DOM - дерева.
Все изменения вносите в конце файла index.js. */



/* Мы подготовили массив с данными для карточек интернет - магазина.Создайте метод в классе Card, который вставит данные в разметку и подготовит карточку к публикации.Назовите этот метод generateCard по аналогии с материалом урока. */


/* Теперь научите класс работать с разметкой.В файле index.html мы подготовили template - элемент с описанием разметки карточки.
Чтобы получить нужную разметку, добавьте классу Card метод _getTemplate, который:
	найдёт template - элемент с классом horizontal - card,
	извлечёт его содержимое,
	в содержимом найдёт элемент с классом card,
	клонирует его,
	вернёт клонированный элемент. */