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


class Card {
	constructor(title, description, price, image) {
		this._title = title;
		this._description = description;
		this._price = price;
		this._image = image;
	}
	_getTemplate() {
		const cardElement = document
			.querySelector('.horizontal-card')
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
}

items.forEach(item => {
	const card = new Card(item.title, item.description, item.price, item.image);
	const cardElement = card.generateCard;
	document.querySelector('.card-list__items').append(cardElement);

});



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