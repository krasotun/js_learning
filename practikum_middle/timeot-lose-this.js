'use strict';

const badResult = () => {
	for (var i = 0; i < 10; i++) {
		setTimeout(function () {
			console.log(i);
		}, 10);
	}
};

const iifeSolution = () => {
	(function timer() {
		for (var i = 0; i < 10; i++) {
			(function (i) {
				setTimeout(function clog() { console.log(i); }, 10);
			}(i));
		}
	})();
};

function es6Solution() {
	for (let i = 0; i < 10; i++) {
		setTimeout(function () {
			console.log(i);
		}, 10);
	}
}

const bindSolution = function () {
	for (var i = 0; i < 10; i++) {
		setTimeout(console.log.bind(console, i), 0);
	}
};

// badResult()
// iifeSolution()
// es6Solution()
bindSolution()