function match(str) {
	const permutation = [];
	let max = 0;
	let min = 0;

	for (let i = 0; i < str.length - 1; i++) {
		max++;
		if (str[i] === 'I')
			permutation.push(max);
		else {
			permutation.push(min);
			min++;
		}
	}

	return permutation;
}

console.log(match('DDI')) // [3,2,0,1]
match('III') // [0,1,2,3]
match('IDID') // [0,4,1,3,2]