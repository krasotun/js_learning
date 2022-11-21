function isObject(item: {}) {
	return (item && typeof item === 'object' && !Array.isArray(item));
}

export function merge(lhs, ...rhs) {
	if (!rhs.length) return lhs;
	const source = rhs.shift();

	if (isObject(lhs) && isObject(source)) {
		for (const key in source) {
			if (isObject(source[key])) {
				if (!lhs[key]) Object.assign(lhs, { [key]: {} });
				merge(lhs[key], source[key]);
			} else {
				Object.assign(lhs, { [key]: source[key] });
			}
		}
	}

	return merge(lhs, ...rhs);
}

console.log(merge({ a: 5 }, { c: 10 }));