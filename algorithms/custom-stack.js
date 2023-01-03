class Stack {
	constructor() {
		this.size = 0;
		this.head = null;
		this.tail = null;
	}

	// Кладёт элемент на стек.
	// Возвращает новый размер стека.
	push(value) {
		const node = { value, next: null, prev: null };
		if (this.tail) {
			node.prev = this.tail;
			this.tail.next = node;
			this.tail = node;
		} else {
			this.head = node;
			this.tail = node;
		}
		this.size++;
		return this.size;
	}

	// Убирает элемент со стека.
	// Если стек пустой, кидает ошибку.
	// Возвращает удалённый элемент.
	pop() {
		if (!this.tail) {
			throw new Error('Стек пустой')
		} else {
			const savedTail = this.tail;
			const prevNode = this.tail.prev;
			this.tail = prevNode;
			this.size--;
			return savedTail;
		}

	}

	// Возвращает верхний элемент стека без его удаления.
	peek() {
		return this.tail;
	}

	// Если стек пуст, возвращает true. В противном случае –– false.
	isEmpty() {
		if (!this.tail) {
			return true;
		} else {
			return false;
		}
	}
}