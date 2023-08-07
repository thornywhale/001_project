"use strict";

class Queue {
  constructor(...args) {
    this._head = 0;
    this._tail = 0;
    for (const arg of args) {
      this.enQueue(arg);
    }
  }
  get size() {
    return this._tail - this._head;
  }
  enQueue(value) {
    this[`_${this._tail}`] = value;
    this._tail++;
    return this.size;
  }
  deQueue() {
    const deletedItem = this[`_${this._head}`];
    delete this[`_${this._head}`];
    this._head++;
    return deletedItem;
  }
  peek() {
    return this[`_${this._head}`];
  }
  [Symbol.iterator]() {
    return new IteratorQueue(this);
  }
}

class IteratorQueue {
  constructor(queue) {
    this.queue = queue;
    this.index = this.queue._head;
  }
  next() {
    if (this.index < this.queue._tail) {
      const item = this.queue[`_${this.index}`];
      this.index++;
      return { value: item, done: false };
    } else {
      return { value: undefined, done: true };
    }
  }
}

const queue1 = new Queue("one", "two", "three", "four", "five", "six");
const queue2 = new Queue(1, 2, 3);
for (const item of queue1) {
  console.log(item);
}
console.log(...queue2);