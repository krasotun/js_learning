const coverHeading = document.querySelector('.cover__heading');
const playListTitles = [
	'Игорь Тальков. Лучшее',
	'Музыка категории Б',
	'Подборка с фестиваля FYRE'
];

function getRandomElement(arr) {
	const randomId = Math.floor(Math.random() * arr.length);
	return arr[randomId];
}


coverHeading.addEventListener('dblclick', doubleClickHandler);


function doubleClickHandler(event) {
	coverHeading.textContent = getRandomElement(playListTitles);
	coverHeading.removeEventListener('dblclick', doubleClickHandler);
}