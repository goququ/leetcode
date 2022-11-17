/* https://leetcode.com/problems/single-number/ */
function singleNumber(nums: number[]): number | undefined {
  const sorted = nums.sort();

  for (let i = 0; i < nums.length; i += 2) {
    if (sorted[i] !== sorted[i + 1]) {
      return sorted[i];
    }
  }
}

const TEST_CASES = [
  { input: [2, 2, 1], output: 1 },
  { input: [4, 1, 2, 1, 2], output: 4 },
  { input: [1], output: 1 },
];

test("136. Single Number", () => {
  TEST_CASES.forEach(({ input, output }) => {
    expect(singleNumber(input)).toStrictEqual(output);
  });
});

export {};
