export class Stack {
  constructor() {
    this.stack = [];
  }
  push(item) {
    this.stack.push(item);
  }
  top() {
    return !this.isEmpty() ? this.stack[this.stack.length - 1] : undefined;
  }
  pop() {
    if (!this.isEmpty()) {
      this.stack.pop();
    }
  }
  isEmpty() {
    return this.stack.length === 0;
  }
}
