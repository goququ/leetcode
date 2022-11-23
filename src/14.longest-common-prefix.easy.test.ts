/* https://leetcode.com/problems/longest-common-prefix/ */

function longestCommonPrefix(strs: string[]): string {
  let res = "";

  for (let i = 0; i < strs[0].length; i++) {
    const currChar = strs[0][i];
    const isSame = strs.every(
      (str) => !!currChar && !!str[i] && str[i] === currChar
    );

    if (isSame) {
      res += currChar;
    } else {
      break;
    }
  }

  return res;
}

const TEST_CASES = [
  { input: ["flower", "flow", "flight"], output: "fl" },
  { input: ["dog", "racecar", "car"], output: "" },
];

test("1480. Running Sum of 1d Array", () => {
  TEST_CASES.forEach(({ input, output }) =>
    expect(longestCommonPrefix(input)).toBe(output)
  );
});

export {};
