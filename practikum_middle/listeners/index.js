const input = document.querySelector('.input');
console.log(input);
const onFocus = (event) => {
	console.log(event);
}
const onBlur = (event) => {
	console.log(event);
}
input.addEventListener('focus', onFocus);
input.addEventListener('blur', onFocus);

console.log(3 || 2);