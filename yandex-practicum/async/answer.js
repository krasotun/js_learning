const form = document.forms.search;
const content = document.querySelector('.content');
const result = document.querySelector('.content__result');
const error = document.querySelector('.content__error');
const spinner = document.querySelector('.spinner');

form.addEventListener('submit', function submit(e) {
	e.preventDefault();
	search(form.elements.entity, form.elements.entityId)
	then((res) => {
		if (res.ok) {
			console.log('Все хорошо');
		}
	});
}


function search(entity, entityId) {
		return fetch(`https://swapi.nomoreparties.co/${entity}/${entityId}/`)
	}





