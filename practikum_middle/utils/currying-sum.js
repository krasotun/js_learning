
function add(val) {
	let acc = val;
	return function adder(nextVal) {
		if (nextVal === undefined) {
			return acc;
		}
		acc += nextVal;
		return adder;
	}
}
console.log(add(1)(4)(66)(35)(0)())
