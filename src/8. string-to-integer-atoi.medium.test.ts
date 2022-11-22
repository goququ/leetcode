/* https://leetcode.com/problems/string-to-integer-atoi/ */

const digitRegExp = /[0-9]/;
const signRegExp = /[\+|\-]/;
const MAX = 2 ** 31;

const isNumber = (n: number) => isFinite(n) && !Number.isNaN(n);

function myAtoi(s: string): number {
  let res = "";

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (digitRegExp.test(char)) {
      res += char;
    } else if (signRegExp.test(char)) {
      if (!res) {
        res += char;
      } else {
        break;
      }
    } else if (char === " ") {
      if (!!res) {
        break;
      }
    } else {
      break;
    }
  }

  const num = Number(res);

  if (!isNumber(num)) {
    return 0;
  }

  const sign = Math.sign(num);
  const final = Math.min(Math.abs(Number(res)), sign > 0 ? MAX - 1 : MAX);

  return final * sign;
}

const TEST_CASES = [
  { input: "42", output: 42 },
  { input: "   -42", output: -42 },
  { input: "4193 with words", output: 4193 },
];

test("8. String to Integer (atoi)", () => {
  TEST_CASES.forEach(({ input, output }) =>
    expect(myAtoi(input)).toStrictEqual(output)
  );
});

export {};
