export class Node<T> {
  public data: T;
  public next: Node<T> | null = null;

  constructor(data: T, next: Node<T> | null = null) {
    this.data = data;
    this.next = next;
  }
}

export class List<K> {
  public head: Node<K> | null;
  constructor() {
    this.head = null;
  }

  insertFirst(data: K) {
    this.head = new Node(data, this.head);
  }

  size(): number {
    let counter = 0;
    let node = this.head;
    while (node) {
      node = node.next;
      counter++;
    }
    return counter;
  }

  getFirst(): Node<K> | null {
    return this.head;
  }

  getLast(): Node<K> | null {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
    return null;
  }
  clear() {
    this.head = null;
  }
  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }
  removeLast() {
    const size = this.size();
    if (size < 2) {
      this.head = null;
      return;
    }
    let node = this.getAt(size - 2);
    if (node) {
      node.next = null;
    }
  }
  insertLast(data: K) {
    const last = this.getLast();
    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(i: number): Node<K> | null {
    let node = this.head;
    let counter = 0;
    while (node) {
      if (counter == i) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }
  removeAt(i: number) {
    if (!this.head) {
      return;
    }
    if (i === 0) {
      this.head = this.head.next;
      return;
    }
    let prev = this.getAt(i - 1);
    if (!prev || !prev.next) {
      return;
    }
    prev.next = prev.next.next;
  }
  insertAt(data: K, i: number) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (i === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    let prev = this.getAt(i - 1) || this.getLast();
    prev!.next = new Node(data, prev!.next);
  }
  forEach(cb: (param: Node<K>) => void) {
    if (!this.head) {
      return;
    }
    let node: Node<K> | null = this.head;
    while (node) {
      cb(node);
      node = node.next;
    }
  }
  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}
