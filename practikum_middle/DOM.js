function getDomNodesBySelector(selector) {
	return Array.from(document.querySelectorAll(selector))

}

console.log(getDomNodesBySelector('.price-value'));