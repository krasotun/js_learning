class DoublyLinkedList {
	constructor() {
		this.size = 0;
		this.head = null;
		this.tail = null;
	}

	// Добавляет элемент в список.
	// Если указан индекс - добавляет по индексу, 
	// в противном случае добавляет в конец.
	// Если индекс за пределами — кидает ошибку.
	add(value, index) {
		if (index > this.size) {
			throw new Error('Индекс за пределами списка')
		}
		let newNode = createNode(value);
		if (index === undefined) {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
			this.size++;
		} else {
			let prevNode = this.head;
			for (let i = 0; i < index - 1; i++) {
				prevNode = prevNode.next;
			}
			let nextNode = prevNode.next;
			newNode.next = nextNode;
			newNode.prev = prevNode;
			nextNode.prev = newNode;
			this.size++;
		}
	}

	// Удаляет элемент из списка по значению.
	// Удаляет только первый найденный элемент.
	// Если элемент не найден, ничего делать не нужно.
	removeByValue(value) {
		if (!this.head) {
			return;
		}
		while (this.head && this.head.value) {
			this.head = this.head.next;
		}
		let current = this.head;
		while (current.next) {
			if (current.next.value === value) {
				current.next = current.next.next;
			} else {
				current = current.next;
			}
		}
		if (this.tail.value === value) {
			this.tail = current;
		}
	}

	// Удаляет элемент из списка по индексу.
	// Если индекс за пределами — кидает ошибку.
	removeByIndex(index) {
		if (index > this.size) {
			throw new Error('Индекс за пределами списка')
		}
		if (!this.head) {
			return;
		}
		if (index === 0) {
			this.head = this.head.next;
			this.head.prev = null;
			this.size--;
			return this;
		}
		if (index === this.size) {
			this.tail = this.tail.prev;
			this.tail.next = null;
			this.size--;
			return this;
		}
		let prevNode = this.head;
		for (let i = 0; i < index - 1; i++) {
			prevNode = prevNode.next;
		}
		let deletedNode = prevNode.next;
		let nextNode = deletedNode.next;
		prevNode.next = nextNode;
		nextNode.prev = prevNode;
		this.size--;
		return this;
	}

	// Ищет элемент в списке по индексу.
	// Если индекс за пределами — кидает ошибку.
	searchByIndex(index) {
		if (index > this.size) {
			throw new Error('Индекс за пределами списка')
		}
		if (!this.head) {
			return;
		}
		let current = this.head;
		for (let i = 0; i < index - 1; i++) {
			current = current.next;
			return current;
		}
	}

	// Ищет элемент в списке по значению.
	// Возвращает первый найденный элемент.
	// Опционально можно указать индекс начала поиска.
	// Если индекс за пределами — кидает ошибку.
	// Если элемент не найден, нужно вернуть null.
	searchByValue(value, startIndex = 0) {
		if (index > this.size) {
			throw new Error('Индекс за пределами списка')
		}
		if (!this.head) {
			return;
		}
		if (startIndex >= 0) {
			let current = this.head;
			while (current) {
				if (current.value === value) {
					return current;
				}
				current = current.next;
				return null;
			}
		}
	}
}

// Создаёт новую ноду, где
// value — её значение,
// next — ссылка на следующую ноду,
// prev — ссылка на предыдущую ноду
function createNode(value) {
	return {
		value,
		next: null,
		prev: null,
	};
}