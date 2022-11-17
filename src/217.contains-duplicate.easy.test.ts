/* https://leetcode.com/problems/contains-duplicate/ */

function containsDuplicate(nums: number[]): boolean {
  const dict: Record<string, boolean> = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in dict) {
      return true;
    }
    dict[nums[i]] = true;
  }

  return false;
}

const TEST_CASES = [
  { input: [1, 2, 3, 1], output: true },
  { input: [1, 2, 3, 4], output: false },
  { input: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2], output: true },
];

test("217. Contains Duplicate", () => {
  TEST_CASES.forEach(({ input, output }) => {
    expect(containsDuplicate(input)).toBe(output);
  });
});

export {};
