const form = document.querySelector('.search__form');
const formInput = form.querySelector('.search__textfield');
const resultsContainer = document.querySelector('.search__findings-list');
const countContainer = document.querySelector('.search__findings');
const errorContainer = document.querySelector('.search__error');

const renderError = () => {
	errorContainer.innerHTML = `
        <img src="https://code.s3.yandex.net/web-code/entrance-test/search.svg" alt="" class="search__error-icon" />
        <p class="search__error-message">
            Произошла ошибка...
        </p>
  `;
	countContainer.innerHTML = '';
};

const renderEmptyResults = () => {
	errorContainer.innerHTML = `
        <img src="https://code.s3.yandex.net/web-code/entrance-test/search.svg" alt="" class="search__error-icon" />
        <p class="search__error-message">
            По вашему запросу ничего не найдено, попробуйте уточнить запрос
        </p>
  `;
	countContainer.innerHTML = '';
};

const renderCount = count => {
	countContainer.innerHTML = `
      Найдено <span class="search__findings-amount">${count.toLocaleString(
		'ru-RU'
	)}</span> результатов
  `;
};

const onSubmitStart = () => {
	countContainer.innerHTML = `Загрузка...`;
	resultsContainer.innerHTML = '';
	errorContainer.innerHTML = '';
};

function template(item) {
	const newElement = document.createElement('li');
	newElement.classList.add('search__finding-item');
	newElement.innerHTML = `
      <p class="search__finding-name">
          ${item.full_name}
      </p>
	`;
	return newElement;
}

const requestData = () => {
	return fetch(`https://api.nomoreparties.co/github-search?q=${formInput.value}`)
}

async function onSubmit(event) {
	event.preventDefault();
	onSubmitStart();
	requestData()
		.then(res => res.json())
		.then((res) => {
			if (res.items.lendth === 0) {
				renderEmptyResults();
			}
			renderCount(res.items.length);
			res.items.map((item) => {
				const addedTemplate = template(item);
				countContainer.append(addedTemplate);
			});
		})
		.catch(() => {
			renderError()
		})
}

form.addEventListener('submit', onSubmit)