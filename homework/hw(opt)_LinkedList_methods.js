"use strict";

class IteratorLinkedList {
  constructor(list) {
    this.list = list;
    this.currentItem = null;
  }
  next() {
    this.currentItem =
      this.currentItem === null ? this.list.head : this.currentItem.next;
    return {
      value: this.currentItem ? this.currentItem : undefined,
      done: this.currentItem === null,
    };
  }
}

class ListItem {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
  get data() {
    return this._data;
  }
  set data(data) {
    this._data = data;
  }
}

class LinkedList {
  constructor(...args) {
    this.length = 0;
    this.head = null;
    this.tail = null;
    for (const arg of args) {
      this.push(arg);
    }
  }
  [Symbol.iterator]() {
    return new IteratorLinkedList(this);
  }

  push(arg) {
    const item = new ListItem(arg);
    if (this.length === 0) {
      this.head = item;
      this.tail = item;
    } else {
      item.prev = this.tail;
      this.tail.next = item;
      this.tail = item;
    }
    return ++this.length;
  }

  unshift(arg) {
    const item = new ListItem(arg);
    if (this.length === 0) {
      this.head = item;
      this.tail = item;
    } else {
      item.next = this.head;
      this.head.prev = item;
      this.head = item;
    }
    return ++this.length;
  }

  // add(arg){
  //   const item = new ListItem(arg);
  //   if (this.length === 0) {
  //     this.head = item;
  //     this.tail = item;
  //   } else {
  //   }
  // }

  // pop() {
  //   const popped = this.tail;
  //   if (this.length === 0) {
  //     throw new Error("empty list");
  //   } else {

  //     --this.length;
  //     return popped;
  //   }
  // }

  // shift(){}

  // delete(item) {
  //   if (this.length === 0) {
  //     throw new Error("empty list");
  //   }
  //   for (const element of this) {
  //     if (element.data === item) {

  //       --this.length
  //       console.log("deleted:\n", element);
  //       return element;
  //     }
  //     return false;
  //   }
  // }

  search(key) {
    for (const item of this) {
      if (item.data === key) return item;
    }
    return null;
  }
}

const list01 = new LinkedList(1, 1.5, 2);
console.log(...list01);
console.log(list01);

list01.unshift(0.5);
console.log(...list01);
console.log(list01);

// list01.pop();
// console.log(...list01);
// console.log(list01);