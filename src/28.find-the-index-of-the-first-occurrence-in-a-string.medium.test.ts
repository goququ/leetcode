/* https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/ */

function strStr(haystack: string, needle: string): number {
  for (let i = 0; i < haystack.length; i++) {
    for (let j = 0; j <= needle.length; j++) {
      if (needle[j] === undefined) {
        return i;
      }

      if (needle[j] !== haystack[i + j]) {
        break;
      }
    }
  }

  return -1;
}

const TEST_CASES: { input: [string, string]; output: number }[] = [
  { input: ["sadbutsad", "sad"], output: 0 },
  { input: ["leetcode", "leeto"], output: -1 },
];

test("28. Find the Index of the First Occurrence in a String", () => {
  TEST_CASES.forEach(({ input, output }) =>
    expect(strStr(...input)).toStrictEqual(output)
  );
});

export {};
