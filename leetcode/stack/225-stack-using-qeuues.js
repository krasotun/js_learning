// Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

// Implement the MyStack class:

// void push(int x) Pushes element x to the top of the stack.
// int pop() Removes the element on the top of the stack and returns it.
// int top() Returns the element on the top of the stack.
// boolean empty() Returns true if the stack is empty, false otherwise.

class MyStack {
  col = [];

  push(value) {
    this.col.push(value);
  }

  pop() {
    return this.col.pop();
  }

  top() {
    return this.col[this.col.length - 1];
  }

  empty() {
    return this.col.length === 0;
  }
}
