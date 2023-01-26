const object = {
	value: '42',
	print() {
		const value = this.value
		function type() {
			return typeof value;
		}
		console.log(`${this.value} is ${type()}`);
	}
}

object.print(); // Поправьте замыкание
