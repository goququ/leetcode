/* https://leetcode.com/problems/reverse-string/ */
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  for (let i = 0; i < Math.ceil(s.length / 2); i++) {
    const tmp = s[i];
    s[i] = s[s.length - i - 1];
    s[s.length - i - 1] = tmp;
  }
}

const TEST_CASES = [
  { input: ["h", "e", "l", "l", "o"], output: ["o", "l", "l", "e", "h"] },
  {
    input: ["H", "a", "n", "n", "a", "h"],
    output: ["h", "a", "n", "n", "a", "H"],
  },
];

test("344. Reverse String", () => {
  TEST_CASES.forEach(({ input, output }) => {
    reverseString(input);
    expect(input).toStrictEqual(output);
  });
});

export {};
