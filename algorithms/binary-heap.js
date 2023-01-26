const root = 0;
const left = i => 2 * i + 1
const right = i => 2 * i + 2
const parent = i => Math.floor((i - 1) / 2)
class BinaryHeap {
	constructor() {
		this.data = [];
	}
	show() {
		console.log(this.data);
	}
	size() {
		return this.data.length;
	}
	peek() {
		return this.data[0];
	}
	insert(node) {
		this.data.push(node);
		this.bubbleUp();
	}
	bubbleUp() {
		let node = this.size() - 1;
		while (node > 0 && this.data[node] > this.data[parent(node)]) {
			this.swap(node, parent(node));
			node = parent(node);
		}
	}
	extract() {
		let poppedVal = this.peek();
		let last = this.size() - 1;
		let top = 0;
		if (last > top)
			this.swap(top, last);
		this.data.pop();
		this.sinkDown();
		return poppedVal;
	}
	bubbleUp() {
		let index = this.size() - 1;
		while (index > 0 && this.data[index] > this.data[parent(index)]) {
			this.swap(index, parent(index));
			index = parent(index);
		}
	}
	sinkDown() {
		let node = root;
		let n = this.size();
		let max;
		while (left(node) < n && this.data[node] < this.data[left(node)] ||
			right(node) < n && this.data[node] < this.data[right(node)]) {
			max = this.data[left(node)];
			max = this.data[right(node)] !== undefined ? Math.max(max, this.data[right(node)]) : max;
			if (this.data[node] > max) {
				break;
			}
			if (max === this.data[left(node)]) {
				this.swap(node, left(node));
				node = left(node);
			} else {
				this.swap(node, right(node));
				node = right(node);
			}
		}
	}
	swap(i, j) {
		let temp = this.data[i];
		this.data[i] = this.data[j];
		this.data[j] = temp;
	}
}