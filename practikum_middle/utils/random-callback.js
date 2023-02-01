function foo(callback) {
	setTimeout(function () {
		callback('A');
	}, Math.random() * 100);
}

function bar(callback) {
	setTimeout(function () {
		callback('B');
	}, Math.random() * 100);
}

function baz(callback) {
	setTimeout(function () {
		callback('C');
	}, Math.random() * 100);
}

[foo, bar, baz].reduce((p, fn) => {
	return p
		.then(() => new Promise(resolve => fn(resolve)))
		.then(result => console.log(result));
}, Promise.resolve());