/* https://leetcode.com/problems/palindrome-number/ */

function isPalindrome(x: number): boolean {
  const str = String(x);
  let start = 0;
  let end = str.length - 1;

  while (str[start] && str[end] && start !== end) {
    if (str[start] !== str[end]) {
      return false;
    }

    start++;
    end--;
  }

  return true;
}

const TEST_CASES = {
  "121": true,
  "-121": false,
  10: false,
};

test("9. Palindrome Number", () => {
  Object.entries(TEST_CASES).forEach(([input, output]) =>
    expect(isPalindrome(+input)).toBe(output)
  );
});

export {};
