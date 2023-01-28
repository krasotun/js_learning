'use strict';

const badResult = () => {
	for (var i = 0; i < 10; i++) {
		console.log(i);
		setTimeout(function () {
			console.log(i);
		}, 10);
	}
};

const iifeSolution = () => {
	return badResult();
};

function es6Solution() {
	// ...
}

const bindSolution = function () {
	// ...
};

badResult()
// iifeSolution()
