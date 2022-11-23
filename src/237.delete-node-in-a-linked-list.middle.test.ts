/* https://leetcode.com/problems/delete-node-in-a-linked-list/ */

import { ListNode, LinkedList } from "./data-structures/linked-list/LinkedList";

function deleteNode(node: ListNode<number> | null): void {
  if (!node) {
    return;
  }

  node.val = node.next ? node.next.val : null;
  node.next = node.next ? node.next.next : null;
}

test("237. Delete Node in a Linked List", () => {
  const list = new LinkedList([1, 2, 3]);
  const node = list.getNodeAtIndex(1);

  expect(list.size()).toBe(3);
  deleteNode(node);
  expect(list.size()).toBe(2);
  expect(list.valueAt(1)).toBe(3);
});

export {};
