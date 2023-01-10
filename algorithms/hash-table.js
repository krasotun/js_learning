class HashTable {
	constructor(size) {
		if (!size || size < 0) {
			throw new Error('Размер должен быть положительным числом');
		}

		this.size = size;
		this.memory = new Array();
	}

	set(key, value) {
		const index = hash(key, this.size);
		const node = [key, value];

		if (!this.memory[index]) {
			this.memory[index] = [node];
			return;
		}

		const elem = this.memory[index].find((item) => item[0] === key);

		if (elem) {
			elem[1] = value;
		} else {
			this.memory[index].push(node);
		}
	}

	get(key) {
		const index = hash(key, this.size);

		if (!this.memory[index]) {
			return undefined;
		}

		const pair = this.memory[index].find((item) => item[0] === key);

		return pair && pair[1];
	}

	remove(key) {
		const index = hash(key, this.size);

		if (!this.memory[index]) {
			return;
		}

		const itemIndex = this.memory[index].findIndex(
			(item) => item[0] === key,
		);

		if (itemIndex === -1) {
			return;
		}

		this.memory[index].splice(itemIndex, 1);

		if (!this.memory[index].length) {
			delete this.memory[index];
		}
	}
}

function hash(key, size) {
	const MAX_LENGTH = 200;

	const start = key.length > MAX_LENGTH ?
		Math.floor((key.length % MAX_LENGTH) / 2) : 0;
	const end = Math.min(key.length, MAX_LENGTH);

	let total = 0;

	for (let i = 0; i < end; i++) {
		const charCode = key.charCodeAt(start + i);
		total = (total + charCode * (i + 1)) % size;
	}

	return total;
}