/* https://leetcode.com/problems/fizz-buzz/ */

function fizzBuzz(n: number): string[] {
  const res = [];
  for (let i = 1; i <= n; i++) {
    const d3 = i % 3 === 0;
    const d5 = i % 5 === 0;

    if (d3 && d5) {
      res.push("FizzBuzz");
    } else if (d3) {
      res.push("Fizz");
    } else if (d5) {
      res.push("Buzz");
    } else {
      res.push(String(i));
    }
  }

  return res;
}

const TEST_CASES = [
  { input: 3, output: ["1", "2", "Fizz"] },
  { input: 5, output: ["1", "2", "Fizz", "4", "Buzz"] },
  {
    input: 15,
    output: [
      "1",
      "2",
      "Fizz",
      "4",
      "Buzz",
      "Fizz",
      "7",
      "8",
      "Fizz",
      "Buzz",
      "11",
      "Fizz",
      "13",
      "14",
      "FizzBuzz",
    ],
  },
];

test("412. Fizz Buzz", () => {
  TEST_CASES.forEach(({ input, output }) =>
    expect(fizzBuzz(input)).toStrictEqual(output)
  );
});

export {};
