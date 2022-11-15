/* https://leetcode.com/problems/running-sum-of-1d-array/ */

function runningSum(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] + (nums[i - 1] || 0);
  }

  return nums;
}

const TEST_CASES = [
  { input: [1, 2, 3, 4], output: [1, 3, 6, 10] },
  { input: [1, 1, 1, 1, 1], output: [1, 2, 3, 4, 5] },
  { input: [3, 1, 2, 10, 1], output: [3, 4, 6, 16, 17] },
];

test("1480. Running Sum of 1d Array", () => {
  TEST_CASES.forEach(({ input, output }) =>
    expect(runningSum(input)).toStrictEqual(output)
  );
});

export {};
