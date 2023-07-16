class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
class MyCircularQueue {
  constructor(k) {
    this.maxSize = k;
    this.size = 0;
    this.head = null;
    this.tail = null;
  }
  enQueue(value) {
    if (this.isFull()) {
      return false;
    }
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
    } else {
      this.tail.next = newNode;
      this.tail = this.tail.next;
      this.size++;
    }
    return true;
  }
  deQueue() {
    if (this.isEmpty()) {
      return false;
    }
    this.head = this.head.next;
    this.size--;
    return true;
  }

  Front() {
    if (this.isEmpty()) {
      return -1;
    }
    return this.head.value;
  }
  Rear() {
    if (this.isEmpty()) {
      return -1;
    }
    return this.tail.value;
  }
  isEmpty() {
    return this.size === 0;
  }
  isFull() {
    return this.size === this.maxSize;
  }
}

const my = new MyCircularQueue(3);

console.log(my.enQueue(1)); // return True
console.log(my.enQueue(2)); // return True
console.log(my.enQueue(3)); // return True
console.log(my.enQueue(4)); // return False
console.log(my.Rear()); // return 3
console.log(my.isFull()); // return True
console.log(my.deQueue()); // return True
console.log(my.enQueue(4)); // return True
console.log(my.Rear()); // return 4
/**
 * Your my object will be instantiated and called as such:
 * var obj = new my(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

// class my {
//   constructor(k: number) {}

//   enQueue(value: number): boolean {}
//   deQueue(): boolean {}

//   Front(): number {}

//   Rear(): number {}

//   isEmpty(): boolean {}

//   isFull(): boolean {}
// }
