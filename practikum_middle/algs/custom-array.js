
// Реализация массива
// Реализуйте массив с методами доступа, изменения, добавления и удаления элементов.
// При попытке доступа за пределы текущей длины массива this.length методы должны кидать любую ошибку.
// Когда длина массива приближается к его максимальному размеру — выделите памяти в два раза больше, применяя функцию allocate.


class MyArray {
	constructor(initialSize = 1) {
		if (Number(initialSize) !== initialSize || Math.round(initialSize) !== initialSize) {
			throw new Error('Длина массива должна быть целым числом');
		}

		if (!(initialSize > 0)) {
			throw new Error('Размер массива должен быть больше нуля');
		}

		this.size = initialSize;
		this.memory = allocate(initialSize);
		this.length = 0;
	}

	// Возвращает значение по индексу.
	// Если индекс за пределами — кидает ошибку.
	get(index) {
		if (index > this.length) {
			throw new Error('Запрошенный индекс находится за пределами массива')
		}
		return this.memory.index;
	}

	// Устанавливает значение по индексу.
	// Если индекс за пределами — кидает ошибку.
	set(index, value) {
		if (index > this.length) {
			throw new Error('Запрошенный индекс находится за пределами массива')
		}
		this.memory[index] = value;
	}

	// Добавляет новый элемент в массив.
	// Если index не определён — добавляет в конец массива.
	// В противном случае — добавляет по индексу со сдвигом
	// всех последующих элементов.
	// Если индекс за пределами - кидает ошибку.
	// Увеличивает выделенную память вдвое, если необходимо.
	// Возвращает новую длину массива.
	add(value, index) {
		if (index > this.length) {
			throw new Error('Запрошенный индекс находится за пределами массива')
		}
		if (index === this.length) {
			const saved
			this.memory = allocate(this.length * 2);
		}
		if (!index) {
			this.memory[this._getArrayLength() + 1].value;
		}
		let movedOobject = {};
		for (let i = index; i < this.length; i++) {

		}

	}

	// Удаляет элемент по индексу со сдвигом всех последующих элементов.
	// Если индекс за пределами - кидает ошибку.
	// Возвращает новую длину массива.
	delete(index) {
		...
	}
	_getArrayLength() {
		return Object.keys(this.memory).length;
	}
	_moveArrayItems(index) {

	}
}

function allocate(size) {
	const memory = {};

	for (let i = 0; i < size; i++) {
		memory[i] = undefined;
	}

	return memory;
}