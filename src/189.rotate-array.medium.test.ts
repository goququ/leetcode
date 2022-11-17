/* https://leetcode.com/problems/rotate-array/ */

/**
 Do not return anything, modify nums in-place instead.
 */

const reverse = (nums: number[], start: number, end: number) => {
  for (let s = start, e = end; s < e; s++, e--) {
    const tmp = nums[s];
    nums[s] = nums[e];
    nums[e] = tmp;
  }
};

function rotate(nums: number[], k: number): void {
  const offset = k % nums.length;

  reverse(nums, 0, nums.length - 1);
  reverse(nums, offset, nums.length - 1);
  reverse(nums, 0, offset - 1);
}

const TEST_CASES: { input: [number[], number]; output: number[] }[] = [
  { input: [[1, 2, 3, 4, 5, 6, 7], 3], output: [5, 6, 7, 1, 2, 3, 4] },
  { input: [[-1, -100, 3, 99], 2], output: [3, 99, -1, -100] },
];

test("189. Rotate Array", () => {
  TEST_CASES.forEach(({ input: [arr, num], output }) => {
    rotate(arr, num);
    expect(arr).toStrictEqual(output);
  });
});

export {};
