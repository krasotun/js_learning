function compress(list) {
	if (list.length === 1) {
		return list[0];
	} else if (list.length === 0) {
		return undefined;
	}
	let ret = [], first, last;
	list.sort((a, b) => a - b);
	;
	for (let i = 0; i < list.length; i++) {
		first = last = list[i];
		while (list[i + 1] == last + 1) {
			last++;
			i++;
		}
		ret.push(first == last ? first : first + "-" + last);
	}
	console.log(ret.join(','));
	return ret.join(',');
}

compress([1, 4, 5, 2, 3, 9, 8, 11, 0]) // '0-5,8-9,11'
compress([1, 4, 3, 2]) // '1-4'
compress([1, 4]) // '1,4'
compress([1]) // '1,4'
compress([]) // '1,4'
