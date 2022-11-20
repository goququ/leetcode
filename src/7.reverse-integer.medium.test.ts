/* https://leetcode.com/problems/reverse-integer/ */

const MAX_VALUE = Math.pow(2, 31) - 1;
const MIN_VALUE = -Math.pow(2, 31);

const isValidNumber = (n: number) => MAX_VALUE >= n && MIN_VALUE <= n;

function reverse(x: number): number {
  const sign = Math.sign(x);
  const numStr = String(Math.abs(x));
  let res = "";

  for (let i = numStr.length - 1; i >= 0; i--) {
    const char = numStr[i];

    if (!res && char === "0") {
      continue;
    }

    res += char;

    if (!isValidNumber(+res * sign)) {
      return 0;
    }
  }

  return +res * sign;
}

const TEST_CASES = [
  { input: 123, output: 321 },
  { input: -123, output: -321 },
  { input: 120, output: 21 },
];

test("7. Reverse Integer", () => {
  TEST_CASES.forEach(({ input, output }) =>
    expect(reverse(input)).toStrictEqual(output)
  );
});

export {};
