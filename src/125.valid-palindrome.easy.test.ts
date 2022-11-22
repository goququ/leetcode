/* https://leetcode.com/problems/valid-palindrome/ */

const charsRegExp = /[a-zA-Z0-9]/;

function isPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const leftChar = s[left].toLowerCase();
    const rightChar = s[right].toLowerCase();

    if (!charsRegExp.test(leftChar)) {
      left++;
      continue;
    }
    if (!charsRegExp.test(rightChar)) {
      right--;
      continue;
    }

    if (leftChar !== rightChar) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

const TEST_CASES = [
  { input: "A man, a plan, a canal: Panama", output: true },
  { input: "race a car", output: false },
  { input: " ", output: true },
];

test("125. Valid Palindrome", () => {
  TEST_CASES.forEach(({ input, output }) =>
    expect(isPalindrome(input)).toStrictEqual(output)
  );
});

export {};
