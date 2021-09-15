import "regenerator-runtime/runtime";
// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

export class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

export class List {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let node = this.head;
    let counter = 0;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
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
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast();
    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(i) {
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
  /* removeAt(data, i) {
    let at = this.getAt(i);
    let next = this.getAt(i + 1);

    if (at) {
      data.next = next;
      at.next = data;
    } else {
      return;
    }
  } */
  removeAt(i) {
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
  insertAt(data, i) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (i === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    let prev = this.getAt(i - 1) || this.getLast();
    prev.next = new Node(data, prev.next);
  }
  forEach(cb) {
    if (!this.head) {
      return;
    }
    let node = this.head;
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
