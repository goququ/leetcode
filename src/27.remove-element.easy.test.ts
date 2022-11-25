/* https://leetcode.com/problems/remove-element/ */

function removeElement(nums: number[], val: number): number {
  let p1 = 0;
  let removedCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (val !== nums[i]) {
      if (p1 !== i) {
        nums[p1] = nums[i];
      }
      p1++;
    } else {
      removedCount++;
    }
  }

  nums.length = nums.length - removedCount;

  return nums.length;
}

const TEST_CASES: { input: [number[], number]; output: number[] }[] = [
  { input: [[3, 2, 2, 3], 3], output: [2, 2] },
  { input: [[0, 1, 2, 2, 3, 0, 4, 2], 2], output: [0, 1, 4, 0, 3] },
];

test("27. Remove Element", () => {
  TEST_CASES.forEach(({ input: [arr, num], output }) => {
    removeElement(arr, num);
    const sortedRes = arr.sort();
    expect(output.sort().every((i, index) => sortedRes[index] === i)).toBe(
      true
    );
  });
});

export {};
