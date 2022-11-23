export class ListNode<T extends unknown> {
  constructor(public val: T | null, public next: ListNode<T> | null) {}
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

  // public back(): T {}
  // public insert(index: number, val: T) {}
  // public erase(index: number) {}
  // public valueNodeFromEnd(index: number): T {}
  // public reverse() {}
  // public removeValue(val: T) {}
}
