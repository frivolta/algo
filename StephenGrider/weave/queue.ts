export class Queue {
  queue: Array<number | string>;

  constructor() {
    this.queue = [];
  }

  add(val: string | number | undefined) {
    if (val) {
      this.queue.unshift(val);
    }
  }

  remove() {
    return this.queue.pop();
  }

  peek() {
    return this.queue[this.queue.length - 1];
  }
}
