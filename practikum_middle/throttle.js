const someCalc = function (a) {
	console.log(a + this.b)
};

function throttle(callback, wait, context = this) {
	let isThrottled = false,
		savedArgs,
		savedThis;

	function wrapper() {
		if (isThrottled) { // (2)
			savedArgs = arguments;
			savedThis = context;
			return;
		}
		callback.apply(context, arguments); // (1)
		isThrottled = true;
		setTimeout(function () {
			isThrottled = false; // (3)
			if (savedArgs) {
				wrapper.apply(savedThis, savedArgs);
				savedArgs = savedThis = null;
			}
		}, wait);
	}
	return wrapper;
}

// затормозить функцию до одного раза в 1000 мс
const f1000 = throttle(someCalc, 1000, { b: ' call' });
f1000(1); // выведет 1 call
f1000(2); // (тормозим, не прошло 1000 мс)
f1000(3); // (тормозим, не прошло 1000 мс)

// когда пройдёт 1000 мс...
// выведет 3 call, промежуточное значение 2 call игнорируется