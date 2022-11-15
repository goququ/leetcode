/* https://leetcode.com/problems/running-sum-of-1d-array/ */

function maximumWealth(accounts: number[][]): number {
  let res = 0;

  for (let row = 0; row < accounts.length; row++) {
    let cust = 0;
    for (let col = 0; col < accounts[row].length; col++) {
      cust += accounts[row][col];
    }
    res = Math.max(res, cust);
  }

  return res;
}

const TEST_CASES = [
  {
    input: [
      [1, 2, 3],
      [3, 2, 1],
    ],
    output: 6,
  },
  {
    input: [
      [1, 5],
      [7, 3],
      [3, 5],
    ],
    output: 10,
  },
  {
    input: [
      [2, 8, 7],
      [7, 1, 3],
      [1, 9, 5],
    ],
    output: 17,
  },
];

test("1672. Richest Customer Wealth", () => {
  TEST_CASES.forEach(({ input, output }) =>
    expect(maximumWealth(input)).toStrictEqual(output)
  );
});

export {};
