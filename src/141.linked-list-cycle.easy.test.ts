/* https://leetcode.com/problems/delete-node-in-a-linked-list/ */

import { ListNode, LinkedList } from "./data-structures/linked-list/LinkedList";

function hasCycle(head: ListNode<number> | null): boolean {
  let fastPointer = head?.next?.next || null;
  let slowPointer = head;

  while (fastPointer && slowPointer) {
    if (fastPointer === slowPointer) {
      return true;
    }

    fastPointer = fastPointer?.next?.next || null;
    slowPointer = slowPointer.next;
  }

  return false;
}

describe("141. Linked List Cycle", () => {
  test("Normal list", () => {
    const list = new LinkedList([1, 2, 3]);
    const node = list.getNodeAtIndex(0);

    expect(hasCycle(node)).toBe(false);
  });

  test("Cycled list", () => {
    const list = new LinkedList([1, 2, 3, 4, 5]);
    const endNode = list.getNodeAtIndex(4);
    const startNode = list.getNodeAtIndex(0);

    expect(hasCycle(startNode)).toBe(false);

    endNode!.next = startNode!;
    expect(hasCycle(startNode)).toBe(true);
  });
});

export {};
