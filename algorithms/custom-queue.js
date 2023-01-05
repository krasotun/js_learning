class Queue {
	constructor() {
		this.size = 0;
		this.head = null;
		this.tail = null;
	}

	// Ставит элемент в очередь.
	// Возвращает новый размер очереди.
	enqueue(value) {
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

	// Убирает элемент из очереди.
	// Если очередь пустая, кидает ошибку.
	// Возвращает удалённый элемент.
	dequeue() {
		if (this.isEmpty()) {
			throw new Error('Не могу удалить из пустой очереди');
		}
		const node = this.head;
		const nextNode = node.next;
		if (nextNode) {
			node.next = null;
			nextNode.prev = null;
		}
		this.head = nextNode;
		if (this.tail === node) {
			this.tail = nextNode;
		}
		this.size--;
		return node;
	}
	// Возвращает элемент в начале очереди.
	peek() {
		return this.head;
	}

	// Если очередь пустая, возвращает true. В противном случае –– false.
	isEmpty() {
		if (!this.tail) {
			return true;
		} else {
			return false;
		}
	}
}