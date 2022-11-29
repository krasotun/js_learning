const queryStringify = (obj) => {
	return Object.entries(obj).reduce((acc, [prop, value]) => {
		if (typeof value === 'string') {
			return `${acc}${prop}:${value};`
		}
		return `${acc}${prop}:{${queryStringify(value)}}`
	}, '')
}