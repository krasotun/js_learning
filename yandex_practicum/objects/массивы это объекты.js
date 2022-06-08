function double(value) {
	if (Array.isArray(value)) {
		const newArray = [];
		value.forEach(item => {
			newArray.push(item * 2);
		});
		return newArray
	} else {
		return value * 2
	}

}

double(2); // 4
double([1, 2, 3]); // [2, 4, 6]