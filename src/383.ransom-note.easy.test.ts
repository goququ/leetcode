/* https://leetcode.com/problems/ransom-note/ */

function canConstruct(ransomNote: string, magazine: string): boolean {
  const map: Record<string, number> = {};

  for (let i = 0; i < magazine.length; i++) {
    map[magazine[i]] = (map[magazine[i]] || 0) + 1;
  }

  for (let i = 0; i < ransomNote.length; i++) {
    const letter = ransomNote[i];

    if (!(letter in map) || map[letter] === 0) {
      return false;
    }

    map[letter] -= 1;
  }

  return true;
}

const TEST_CASES: { input: [string, string]; output: boolean }[] = [
  { input: ["a", "b"], output: false },
  { input: ["aa", "ab"], output: false },
  { input: ["aa", "aab"], output: true },
];

test("383. Ransom Note", () => {
  TEST_CASES.forEach(({ input, output }) =>
    expect(canConstruct(...input)).toBe(output)
  );
});

export {};
