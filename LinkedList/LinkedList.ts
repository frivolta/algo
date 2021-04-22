import { LinkedListNode } from "./LinkedListNode";

export class LinkedList<T> {
  head: LinkedListNode<T> | null;
  tail: LinkedListNode<T> | null;
  constructor() {
    this.head = null;
    this.tail = null;
  }
}
