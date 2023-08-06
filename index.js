"use strict";

class IteratorQueue {
  constructor(queue) {
    this.queue = queue;
    this.index = 0;
  }
  next() {
    if (this.index < this.queue._tail) {
      const newItem = this.queue[this.index];
      this.index++;
      return { value: newItem, done: false };
    } else {
      return { value: undefined, done: true };
    }
  }
}

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