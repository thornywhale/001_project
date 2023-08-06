class IteratorQueue {
  constructor(queue) {
    this.queue = queue;
    this.index = 0;
  }
  next() {
    if (this.index < this.queue._tail) {
      const item = this.queue[this.index];
      this.index++;
      return { value: item, done: false };
    } else {
      return { value: undefined, done: true };
    }
  }
}
