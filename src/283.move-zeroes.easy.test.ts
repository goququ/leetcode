/* https://leetcode.com/problems/move-zeroes/ */

/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let slowPointer = 0;
  let fastPointer = 0;

  while (nums.length > fastPointer) {
    const current = nums[fastPointer];

    if (current !== 0) {
      const tmp = nums[slowPointer];
      nums[slowPointer] = nums[fastPointer];
      nums[fastPointer] = tmp;
      slowPointer++;
    }

    fastPointer++;
  }
}

const TEST_CASES = [
  {
    input: [0, 1, 0, 3, 12],
    output: [1, 3, 12, 0, 0],
  },
  {
    input: [0],
    output: [0],
  },
];

test("283. Move Zeroes", () => {
  TEST_CASES.forEach(({ input, output }) => {
    moveZeroes(input);
    expect(input).toStrictEqual(output);
  });
});

export {};
