const btn = document.querySelector('.button');

const result = [];

btn.addEventListener('click', () => {
	result.push('first event');
	result.push('second event');
	console.log(result);
})
// Как сейчас: result -> ["second event"]
// Как должно быть: result -> ["first event", "second event"]