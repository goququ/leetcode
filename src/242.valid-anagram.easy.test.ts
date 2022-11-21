/* https://leetcode.com/problems/valid-anagram/ */

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    map.set(char, (map.get(char) || 0) + 1);
  }

  for (let i = 0; i < t.length; i++) {
    const char = t[i];

    if (map.has(char)) {
      const count = map.get(char);

      if (count === 1) {
        map.delete(char);
      } else {
        map.set(char, count - 1);
      }
    }
  }

  return !map.size;
}

const TEST_CASES: { input: [string, string]; output: boolean }[] = [
  { input: ["anagram", "nagaram"], output: true },
  { input: ["rat", "car"], output: false },
];

test("242. Valid Anagram", () => {
  TEST_CASES.forEach(({ input, output }) =>
    expect(isAnagram(...input)).toStrictEqual(output)
  );
});

export {};
