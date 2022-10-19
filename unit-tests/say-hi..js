
export function sayHi() {
	console.log('Hi');
}

export function callFunctionWithTimer(foo, timer) {
	setTimeout(foo, timer)
}

callFuncWithTimer(sayHi, 5000);
module.exports = sayHi;