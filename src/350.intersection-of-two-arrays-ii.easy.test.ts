/* https://leetcode.com/problems/running-sum-of-1d-array/ */

function intersect(nums1: number[], nums2: number[]): number[] {
  const map1: Record<string, number> = {};
  const result = [];

  for (let i = 0; i < nums1.length; i++) {
    const key = String(nums1[i]);
    map1[key] = (map1[key] || 0) + 1;
  }

  for (let i = 0; i < nums2.length; i++) {
    const char = nums2[i];
    if (char in map1 && map1[char] > 0) {
      result.push(char);
      map1[char]--;
    }
  }

  return result;
}

const TEST_CASES: { input: [number[], number[]]; output: number[] }[] = [
  {
    input: [
      [1, 2, 2, 1],
      [2, 2],
    ],
    output: [2, 2],
  },
  {
    input: [
      [4, 9, 5],
      [9, 4, 9, 8, 4],
    ],
    output: [9, 4],
  },
];

test("350. Intersection of Two Arrays II", () => {
  TEST_CASES.forEach(({ input, output }) =>
    expect(intersect(...input)).toStrictEqual(output)
  );
});

export {};
