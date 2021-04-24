export class LinkedListNode<T> {
  public value: T;
  public next: LinkedListNode<T> | null = null;

  constructor(value: T, next: LinkedListNode<T> | null = null) {
    this.value = value;
    this.next = next;
  }

  tosString(callback?: Function) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
