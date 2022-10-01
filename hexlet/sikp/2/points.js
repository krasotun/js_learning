const makePoint = (x, y) => x + y;

function getSymmetricalPoint((makePoint(x, y))) {
	return makePoint(-x, -y);
}



True = (a) => () => a;
False = () => (b) => b;
If = (foo) => foo;
