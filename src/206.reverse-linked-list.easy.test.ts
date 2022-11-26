/* https://leetcode.com/problems/reverse-linked-list/ */

import { ListNode, LinkedList } from "./data-structures/linked-list/LinkedList";

function reverseList(head: ListNode<number> | null): ListNode<number> | null {
  if (!head) {
    return head;
  }

  let node = head;
  let nextNode = head.next;

  node.next = null;

  while (node && nextNode) {
    let currentNext = nextNode.next;

    nextNode.next = node;
    node = nextNode;
    nextNode = currentNext;
  }

  return node;
}

const TEST_CASES = [
  { input: [1, 2, 3, 4, 5], output: [5, 4, 3, 2, 1] },
  { input: [1, 2], output: [2, 1] },
  { input: [], output: [] },
];

test("206. Reverse Linked List", () => {
  TEST_CASES.forEach(({ input, output }) => {
    const list = new LinkedList(input);
    const head = reverseList(list.getNodeAtIndex(0));

    expect(head?.toArray() || []).toStrictEqual(output);
  });
});

export {};
