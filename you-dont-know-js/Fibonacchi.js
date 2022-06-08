function returnValueFromNumber(num) {
	let prev = 1;
	let current = 1;
	for (let i = 3; i <= num; i++) {
		let next = prev + current;
		prev = current;
		current = next;
	};
	return current
}
console.log(returnValueFromNumber(45));

// Выводит значение по номеру элемента в ряде
const memento = { 1: 1, 2: 1 };
function recursiveFoo(num) {
	if (memento[num] !== undefined) {
		return memento[num];
	}
	memento[num] = recursiveFoo(num - 2) + recursiveFoo(num - 1);;
	return memento[num];
}
console.log(recursiveFoo(100));

function recursiveFooOld(num) {
	if (num === 1 || num === 2) {
		return 1
	}
	const x = recursiveFooOld(num - 2);
	const y = recursiveFooOld(num - 1);
	return x + y
}
console.log(recursiveFooOld(46));
function computeFibonacciElement(n) {
	if (n <= 2) return 1;
	const f = [0, 1, 1];
	for (let i = 3; i <= n; i++) {
		f[i] = f[i - 1] + f[i - 2];
	}
	return f[f.length - 1];
}
console.log(computeFibonacciElement(100));
console.log(Math.floor(4.5));

