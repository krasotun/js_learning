const TAG = 'div';
function createElement(tag = TAG, content) {
	console.log('called');
	const element = document.createElement(tag);
	element.textContent = content;
	return element;
}
