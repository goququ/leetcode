/* https://leetcode.com/problems/first-unique-character-in-a-string/ */

function firstUniqChar(s: string): number {
  const chars = new Map();
  const indexes = new Map();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (!chars.has(char)) {
      indexes.set(char, i);
    }

    chars.set(char, (chars.get(char) || 0) + 1);
  }

  for (let [char, count] of chars.entries()) {
    if (count === 1) {
      return indexes.get(char);
    }
  }

  return -1;
}

const TEST_CASES = [
  { input: "leetcode", output: 0 },
  { input: "loveleetcode", output: 2 },
  { input: "aabb", output: -1 },
];

test("387. First Unique Character in a String", () => {
  TEST_CASES.forEach(({ input, output }) =>
    expect(firstUniqChar(input)).toStrictEqual(output)
  );
});

export {};
