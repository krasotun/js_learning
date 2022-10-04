window.render = (function () {
	const TAG = 'p';
	function renderDOM(selector, content) {
		const root = document.querySelector(selector);
		if (!root) {
			return;
		}
		const element = createElement(TAG, content); // createElement из файла dom.js
		root.appendChild(element);
	}
	return { renderDOM }
})();

