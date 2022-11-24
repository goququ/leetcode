type NodeValue<T> = T | null;

export class ListNode<T extends unknown> {
  constructor(public val: NodeValue<T>, public next: ListNode<T> | null) {}
}

export class LinkedList<T extends unknown> {
  public head: ListNode<T> | null = null;

  constructor(items: T[]) {
    let prev = null;

    for (let item of items) {
      const node = new ListNode<T>(item, null);

      if (this.head === null) {
        this.head = node;
      }
      if (prev) {
        prev.next = node;
      }
      prev = node;
    }
  }

  public getNodeAtIndex(index: number): ListNode<T> | null {
    let node = this.head;

    for (let i = 0; i < this.size(); i++) {
      if (i === index) {
        break;
      }

      node = node?.next || null;
    }

    return node;
  }

  public size() {
    let count = 0;
    let node = this.head;

    while (node) {
      count++;
      node = node.next;
    }

    return count;
  }

  public empty() {
    return !this.head;
  }

  public valueAt(index: number): T | null {
    const node = this.getNodeAtIndex(index);
    return node ? node.val : null;
  }

  public pushFront(val: T) {
    const head = this.head;

    this.head = new ListNode<T>(val, head);
  }

  public popFront(): T | null {
    if (!this.head) {
      return null;
    }

    const head = this.head;
    this.head = head.next;

    return head.val;
  }

  public pushBack(val: T) {
    const newNode = new ListNode<T>(val, null);
    const tail = this.getNodeAtIndex(this.size() - 1);

    if (!tail) {
      this.head = newNode;
    } else {
      tail.next = newNode;
    }
  }

  public popBack(): T | null {
    if (!this.head) {
      return null;
    }

    const newTail = this.getNodeAtIndex(this.size() - 2)!;
    const returnValue = newTail.next!.val;

    newTail.next = null;

    return returnValue;
  }

  public front(): T | null {
    return this.head ? this.head.val : null;
  }

  public back(): NodeValue<T> {
    const node = this.getNodeAtIndex(this.size() - 1);

    return node ? node.val : null;
  }

  public toArray(): NodeValue<T>[] {
    const values: NodeValue<T>[] = [];
    let node = this.head;

    while (node) {
      values.push(node.val);
      node = node.next;
    }

    return values;
  }

  public insert(index: number, val: T) {
    const newNode = new ListNode(val, null);

    if (index < 1) {
      const head = this.head;

      newNode.next = head;
      this.head = newNode;
      return;
    }

    const parentNode = this.getNodeAtIndex(index - 1);

    if (parentNode) {
      const currentNode = parentNode.next;
      parentNode.next = newNode;
      newNode.next = currentNode;
    } else {
      this.pushBack(val);
    }
  }

  private removeNode(node: ListNode<T>) {
    node.val = node.next ? node.next.val : null;
    node.next = node.next ? node.next.next : null;
  }

  public erase(index: number) {
    if (index === 0) {
      this.popFront();
      return;
    }

    const node = this.getNodeAtIndex(index);

    if (node) {
      this.removeNode(node);
    }
  }

  public valueNodeFromEnd(index: number): NodeValue<T> {
    let offset = index;
    let node = this.head;
    let resNode = this.head;

    while (node) {
      if (offset < 0) {
        resNode = resNode!.next;
      } else {
        offset--;
      }
      node = node.next;
    }

    if (offset > 0) {
      return null;
    }

    return resNode ? resNode.val : null;
  }

  public reverse(): LinkedList<T> {
    if (!this.head) {
      return this;
    }

    let current: ListNode<T> | null = this.head;
    let next: ListNode<T> | null = this.head.next;

    current.next = null;

    while (current && next) {
      const curNext = next;

      next = next.next;
      curNext.next = current;
      current = curNext;
    }

    this.head = current;

    return this;
  }

  public removeValue(val: T): LinkedList<T> {
    let node = this.head;

    while (node) {
      if (node.val === val) {
        this.removeNode(node);
        break;
      }

      node = node ? node.next : null;
    }

    return this;
  }
}
