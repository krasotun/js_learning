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
		((p1 === 'scissors' && p2 === 'scissors')
		|| (p1 === 'rock' && p2 === 'rock')
		|| (p1 === 'paper') && (p2 === 'paper')) {
	} return 'Draw'
};


// DONE 8 https://www.codewars.com/kata/5a805d8cafa10f8b930005ba/train/javascript
// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

function nearestSq(n) {
	let totalMinus;
	for (let i = n; i > 0; i--) {
		if (Number.isInteger(Math.sqrt(i))) {
			totalMinus = i;
			break;
		}
	};
	let totalPlus;
	for (let i = n; i < +Infinity; i++) {
		if (Number.isInteger(Math.sqrt(i))) {
			totalPlus = i;
			break;
		}
	};
	if ((n - totalMinus) < (totalPlus - n)) {
		return totalMinus
	} else if ((n - totalMinus) === (totalPlus - n) || (n - totalMinus) > (totalPlus - n)) return totalPlus
}
(nearestSq(9999));

// 7  https://www.codewars.com/kata/57f75cc397d62fc93d000059

const a = 'A';
console.log(a.charCodeAt(0));

