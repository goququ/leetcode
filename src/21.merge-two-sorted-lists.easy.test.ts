/* https://leetcode.com/problems/delete-node-in-a-linked-list/ */

import { ListNode, LinkedList } from "./data-structures/linked-list/LinkedList";

const getMinNode = (
  n1: ListNode<number> | null,
  n2: ListNode<number> | null
) => {
  if (n1 && n2) {
    return n1.val! < n2.val! ? n1 : n2;
  }

  return n1 || n2;
};

function mergeTwoLists(
  list1: ListNode<number> | null,
  list2: ListNode<number> | null
): ListNode<number> | null {
  let node1 = list1;
  let node2 = list2;
  let resultHead = null;
  let resultNode = null;

  while (node1 || node2) {
    const minNode = getMinNode(node1, node2);

    if (!resultHead) {
      resultHead = minNode;
      resultNode = minNode;
    } else {
      resultNode!.next = minNode;
      resultNode = minNode;
    }

    if (minNode === node1) {
      node1 = node1!.next;
    } else {
      node2 = node2!.next;
    }
  }

  return resultHead;
}

const TEST_CASES = [
  {
    input: [
      [1, 2, 4],
      [1, 3, 4],
    ],
    output: [1, 1, 2, 3, 4, 4],
  },
  { input: [[], []], output: null },
  { input: [[], [0]], output: [0] },
];

test("21. Merge Two Sorted Lists", () => {
  TEST_CASES.forEach(({ input, output }) => {
    const list1 = new LinkedList(input[0]);
    const list2 = new LinkedList(input[1]);

    const resultHead = mergeTwoLists(
      list1.getNodeAtIndex(0),
      list2.getNodeAtIndex(0)
    );

    expect(resultHead ? resultHead.toArray() : resultHead).toStrictEqual(
      output
    );
  });
});

export {};
