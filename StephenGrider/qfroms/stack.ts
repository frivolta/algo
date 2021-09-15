export class Stack {
  data: Array<string | number>;
  constructor() {
    this.data = [];
  }

  push(record: string | number) {
    this.data.push(record);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}
