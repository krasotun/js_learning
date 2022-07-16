
class Transport {
	constructor(type, price, vendor, model) {
		this.type = type;
		this.price = price;
		this.vendor = vendor;
		this.model = model;

	}
	getInfo() {
		return `${this.vendor}, ${this.model}`;
	}
	getInfo = getInfo.bind(this);
	getPrice() {
		return this.price.toLocaleString('ru-RU') + ' ₽';
	}
}

class Car extends Transport {
	constructor(vendor, model, doorsCount, price) {
		super('car', price, vendor, model);
		this.doorsCount = doorsCount;
	}

	getDoorsCount() {
		return `Кол-во дверей: ${this.doorsCount}`;
	}
}

class Bike extends Transport {
	constructor(vendor, model, maxSpeed, price) {
		super('bike', price, vendor, model);
		this.maxSpeed = maxSpeed;
	}

	getMaxSpeed() {
		return `Макс. скорость: ${this.maxSpeed} км/ч`;
	}
}



const car = new Transport('car', 1500, 'Audi', 'Q5');

console.log(car.getInfo());
console.log(car.getPrice());