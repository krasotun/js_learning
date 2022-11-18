const trim = (string: string, symbols?: string) => {
	if (symbols) {
		const pattern = symbols.split('')
			.map(
				(symbol) => `\\` + symbol).join('')
		const reg = new RegExp('^[' + pattern + ']+|[' + pattern + ']+$', 'g');
		return string.replace(reg, '');
	}
	return str.replace(/^[\s\uFEFF\xA0\_ \-]+|[\s\uFEFF\xA0\_ \-]+$/g, '')
}

console.log(trim('-_-abc-_-', '_-')); // abc