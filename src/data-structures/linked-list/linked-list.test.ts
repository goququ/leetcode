import { LinkedList } from "./LinkedList";

describe("Linked list tests", () => {
  const DATA_ARR = [1, 2, 3];
  const DEFAULT_LIST = new LinkedList(DATA_ARR);
  const EMPTY_LIST = new LinkedList([]);

  test("LinkedList.size() method: returns number of data elements in list", () => {
    expect(DEFAULT_LIST.size()).toBe(DATA_ARR.length);
    expect(EMPTY_LIST.size()).toBe(0);
  });

  test("LinkedList.empty() method: bool returns true if empty", () => {
    expect(DEFAULT_LIST.empty()).toBe(false);
    expect(EMPTY_LIST.empty()).toBe(true);
  });

  test("LinkedList.valueAt() method: returns the value of the nth item (starting at 0 for first)", () => {
    expect(DEFAULT_LIST.valueAt(1)).toBe(DATA_ARR[1]);
    expect(DEFAULT_LIST.valueAt(10)).toBe(null);
    expect(EMPTY_LIST.valueAt(4)).toBe(null);
  });

  test("LinkedList.pushFront() method: adds an item to the front of the list", () => {
    const list = new LinkedList([1, 2]);

    list.pushFront(0);
    expect(list.valueAt(0)).toBe(0);
    list.pushFront(-1);
    expect(list.valueAt(0)).toBe(-1);
  });

  test("LinkedList.popFront() method: remove front item and return its value", () => {
    const list = new LinkedList([1, 2]);

    list.popFront();
    expect(list.valueAt(0)).toBe(2);
    list.popFront();
    expect(list.valueAt(0)).toBe(null);
  });

  test("LinkedList.pushBack() method: adds an item at the end", () => {
    const list = new LinkedList([1, 2]);
    const emptyList = new LinkedList<number>([]);

    list.pushBack(3);
    expect(list.valueAt(2)).toBe(3);

    emptyList.pushBack(1);
    expect(emptyList.valueAt(0)).toBe(1);
  });

  test("LinkedList.popBack() method: removes end item and returns its value", () => {
    const list = new LinkedList([1, 2]);
    const emptyList = new LinkedList<number>([]);

    expect(list.popBack()).toBe(2);
    expect(list.valueAt(1)).toBe(null);

    expect(emptyList.popBack()).toBe(null);
  });

  test("LinkedList.front() method: get value of front item", () => {
    const list = new LinkedList([1, 2]);
    const emptyList = new LinkedList<number>([]);

    expect(list.front()).toBe(1);
    expect(list.popFront()).toBe(1);
    expect(list.front()).toBe(2);

    expect(emptyList.front()).toBe(null);
  });

  test("LinkedList.back() method: get value of end item", () => {
    const emptyList = new LinkedList<number>([]);

    expect(DEFAULT_LIST.back()).toBe(3);
    expect(emptyList.back()).toBe(null);
  });

  test("LinkedList.toArray() method: get array of list values", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [10, 32, 123123, 1];

    expect(new LinkedList<number>(arr1).toArray()).toStrictEqual(arr1);
    expect(new LinkedList<number>(arr2).toArray()).toStrictEqual(arr2);
    expect(new LinkedList<number>([]).toArray()).toStrictEqual([]);
  });

  test("LinkedList.insert() method: insert value at index, so current item at that index is pointed to by new item at index", () => {
    const emptyList = new LinkedList<number>([]);

    emptyList.insert(0, 2);
    expect(emptyList.toArray()).toStrictEqual([2]);
    emptyList.insert(0, 1);
    expect(emptyList.toArray()).toStrictEqual([1, 2]);
    emptyList.insert(4, 3);
    expect(emptyList.toArray()).toStrictEqual([1, 2, 3]);
  });

  test("LinkedList.erase() method: removes node at given index", () => {
    const list = new LinkedList([1, 2, 3, 4, 5]);
    const emptyList = new LinkedList<number>([]);

    list.erase(2);
    expect(list.toArray()).toStrictEqual([1, 2, 4, 5]);
    list.erase(0);
    expect(list.toArray()).toStrictEqual([2, 4, 5]);
    list.erase(10);
    expect(list.toArray()).toStrictEqual([2, 4, 5]);
    emptyList.erase(10);
    expect(emptyList.toArray()).toStrictEqual([]);
  });

  test("LinkedList.valueNodeFromEnd() method: returns the value of the node at nth position from the end of the list", () => {
    const arr = [10, 32, 123123, 1, 23];
    const list = new LinkedList<number>(arr);

    expect(list.valueNodeFromEnd(0)).toStrictEqual(23);
    expect(list.valueNodeFromEnd(1)).toStrictEqual(1);
    expect(list.valueNodeFromEnd(4)).toStrictEqual(10);
    expect(list.valueNodeFromEnd(10)).toStrictEqual(null);
  });

  test("LinkedList.reverse() method: reverses the list", () => {
    expect(new LinkedList<number>([]).reverse().toArray()).toStrictEqual([]);
    expect(new LinkedList<number>([1, 2, 3]).reverse().toArray()).toStrictEqual(
      [3, 2, 1]
    );
    expect(new LinkedList<number>([1]).reverse().toArray()).toStrictEqual([1]);
  });

  test("LinkedList.removeValue() method: removes the first item in the list with this value", () => {
    expect(new LinkedList<number>([]).removeValue(2).toArray()).toStrictEqual(
      []
    );
    expect(new LinkedList<number>([1]).removeValue(2).toArray()).toStrictEqual([
      1,
    ]);
    expect(
      new LinkedList<number>([1, 2, 3, 2]).removeValue(2).toArray()
    ).toStrictEqual([1, 3, 2]);
  });
});

export {};
