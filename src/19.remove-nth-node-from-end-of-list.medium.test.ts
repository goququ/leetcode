/* https://leetcode.com/problems/remove-nth-node-from-end-of-list/ */

import { ListNode, LinkedList } from "./data-structures/linked-list/LinkedList";

function removeNthFromEnd(
  head: ListNode<number> | null,
  n: number
): ListNode<number> | null {
  let startPointer = head;
  let startPointerPos = 1;
  let endPointer = head;
  let endPointerPos = 1;

  while (endPointer?.next) {
    endPointer = endPointer.next;
    endPointerPos += 1;
    const distance = endPointerPos - startPointerPos;

    if (distance > n) {
      startPointer = startPointer!.next;
      startPointerPos += 1;
    }
  }

  if (endPointerPos === n) {
    return head!.next;
  }

  startPointer!.next = startPointer!.next?.next || null;
  return head;
}

const TEST_CASES: { input: [number[], number]; output: number[] }[] = [
  { input: [[1, 2, 3, 4, 5], 2], output: [1, 2, 3, 5] },
  { input: [[1], 1], output: [] },
  { input: [[1, 2], 1], output: [1] },
];

test("19. Remove Nth Node From End of List", () => {
  TEST_CASES.forEach(({ input, output }) => {
    const list = new LinkedList(input[0]);
    const node = list.getNodeAtIndex(0);
    const newNode = removeNthFromEnd(node, input[1]);

    expect(newNode?.toArray() || []).toStrictEqual(output);
  });
});

export {};
