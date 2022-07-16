function getDomNodesBySelector(selector) {
	return Array.from(document.querySelectorAll(selector));
}

document.querySelector('.total__button').addEventListener('click', applyDiscount);

const discountValue = .15;
let notClicked = true;
function applyDiscount() {
	const arrayFrom = getDomNodesBySelector('.price-value');
	arrayFrom.forEach((element) => {
		element.outerText = element.outerText * (1 - discountValue);
	});
	if (notClicked) {
		let totalPrice = document.querySelector('.total-price-value').textContent;
		let discountedValue = totalPrice * (1 - discountValue);
		document.querySelector('.total-price-value').textContent = discountedValue;
		notClicked = false;
	} else if (notClicked = false) {
		return;
	};

}

