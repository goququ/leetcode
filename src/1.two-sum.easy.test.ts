/* https://leetcode.com/problems/two-sum/ */

function twoSum(nums: number[], target: number): number[] {
  const list = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const needToFind = target - num;

    if (list[needToFind] !== undefined) {
      return [list[needToFind], i];
    }

    list[num] = i;
  }

  return [];
}

const TEST_CASES: { input: [number[], number]; output: number[] }[] = [
  { input: [[2, 7, 11, 15], 9], output: [0, 1] },
  { input: [[3, 2, 4], 6], output: [1, 2] },
  { input: [[3, 3], 6], output: [0, 1] },
];

test("1. Two Sum", () => {
  TEST_CASES.forEach(({ input, output }) =>
    expect(twoSum(...input)).toStrictEqual(output)
  );
});

export {};
