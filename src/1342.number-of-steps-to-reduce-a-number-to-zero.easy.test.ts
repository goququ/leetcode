/* https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/ */

function numberOfSteps(num: number): number {
  let steps = 0;

  while (num > 0) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num -= 1;
    }

    steps++;
  }

  return steps;
}

const TEST_CASES = [
  { input: 14, output: 6 },
  { input: 8, output: 4 },
  { input: 123, output: 12 },
];

test("1342. Number of Steps to Reduce a Number to Zero", () => {
  TEST_CASES.forEach(({ input, output }) =>
    expect(numberOfSteps(+input)).toBe(output)
  );
});

export {};
