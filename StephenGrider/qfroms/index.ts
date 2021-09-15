// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

import { Stack } from "./stack";

export class Queue {
  first: Stack;
  second: Stack;

  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(record: number | string) {
    this.first.push(record);
  }

  remove() {
    while (this.first.peek()) {
      const val = this.first.pop();
      if (val) {
        this.second.push(val);
      }
    }

    const record = this.second.pop();

    while (this.second.peek()) {
      const val = this.second.pop();
      if (val) {
        this.first.push(val);
      }
    }

    return record;
  }

  peek() {
    while (this.first.peek()) {
      const val = this.first.pop();
      if (val) {
        this.second.push(val);
      }
    }

    const record = this.second.peek();
    const val = this.second.pop();

    while (this.second.peek()) {
      if (val) {
        this.first.push(val);
      }
    }

    return record;
  }
}
