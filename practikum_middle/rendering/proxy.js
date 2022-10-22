const data = {
	test: 25
};

const proxyData = new Proxy(data, {
	get(target, prop) {
		const value = target[prop];
		console.log('get data:', value);
		return typeof value === "function" ? value.bind(target) : value;
	},
	set(target, prop, value) {
		target[prop] = value;
		console.log(`${prop}: ${value}`);
		return true;
	},
})


proxyData.test
proxyData.newProp = 'string'
console.log(data);