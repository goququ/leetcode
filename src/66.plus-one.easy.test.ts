/* https://leetcode.com/problems/plus-one/ */

function plusOne(digits: number[]): number[] {
  for (let i = 0; i < digits.length; i++) {
    const num = digits[digits.length - 1 - i];

    if (num === 9) {
      digits[digits.length - 1 - i] = 0;
      continue;
    } else {
      digits[digits.length - 1 - i] += 1;

      return digits;
    }
  }

  digits.unshift(1);

  return digits;
}

const TEST_CASES = [
  { input: [1, 2, 3], output: [1, 2, 4] },
  { input: [4, 3, 2, 1], output: [4, 3, 2, 2] },
  { input: [9], output: [1, 0] },
];

test("66. Plus One", () => {
  TEST_CASES.forEach(({ input, output }) =>
    expect(plusOne(input)).toStrictEqual(output)
  );
});

export {};
