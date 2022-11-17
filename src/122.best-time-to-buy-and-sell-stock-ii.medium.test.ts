/* https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/ */

function maxProfit(prices: number[]): number {
  let profit = 0;
  let lastProfitablePrice = null;

  for (let i = 0; i < prices.length; i++) {
    const current = prices[i];
    const next = prices[i + 1];

    if (current > next || next === undefined) {
      if (lastProfitablePrice !== null) {
        profit += current - lastProfitablePrice;
        lastProfitablePrice = null;
      }
    }

    if (next > current && lastProfitablePrice === null) {
      lastProfitablePrice = current;
    }
  }

  return profit;
}

const TEST_CASES = [
  { input: [7, 1, 5, 3, 6, 4], output: 7 },
  { input: [1, 2, 3, 4, 5], output: 4 },
  { input: [7, 6, 4, 3, 1], output: 0 },
];

test("122. Best Time to Buy and Sell Stock II", () => {
  TEST_CASES.forEach(({ input, output }) =>
    expect(maxProfit(input)).toBe(output)
  );
});

export {};
