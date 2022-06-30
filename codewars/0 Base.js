// DONE 8 Rock Paper Scissors
// https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript

const rps = (p1, p2) => {
	if ((p1 === 'rock' && p2 === 'scissors')
		|| (p1 === 'paper' && p2 === 'rock')
		|| (p1 === 'scissors') && (p2 === 'paper')) {
		return 'Player 1 won'
	} else if
		(((p1 === 'scissors' && p2 === 'rock')
			|| (p1 === 'rock' && p2 === 'paper')
			|| (p1 === 'paper') && (p2 === 'scissors'))) {
		return 'Player 1 won'
	} else if
		(p1 === p2) {
	} return 'Draw'
};


// Реализуйте функцию, которая умножает два числа.
// https://www.codewars.com/kata/523b66342d0c301ae400003b/train/javascript

function multiply(a, b) {
	// Складываем a+a b-1 раз

	for (let i = 0; i < b - 1; i++) {
		let c = a + a;
		c = c + a;
	}
	return c
}

console.log(multiply(3, 6));

