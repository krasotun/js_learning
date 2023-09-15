// Реализуйте и экспортируйте по умолчанию функцию,
//  которая принимает на вход односвязный список и переворачивает его.

class Node {
  constructor(value, node = null) {
    this.next = node;
    this.value = value;
  }

  getNext() {
    return this.next;
  }

  getValue() {
    return this.value;
  }
}

const reverse = (node) => {};

const numbers = new Node(1, new Node(2, new Node(3))); // (1, 2, 3)
const reversedNumbers = reverse(numbers); // (3, 2, 1)

console.log(numbers);
