export class LinkedListNode<T> {
  value: T;
  next: T | null;
  constructor(value: T, next: T | null = null) {
    this.value = value;
    this.next = next;
  }

  tosString(callback?: Function) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
