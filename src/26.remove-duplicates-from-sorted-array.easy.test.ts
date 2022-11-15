/* https://leetcode.com/problems/remove-duplicates-from-sorted-array */

function removeDuplicates(nums: number[]): number {
  let duplicates = 0;
  let index = 0;
  let nonDuplicateIndex = 1;

  while (
    index + duplicates < nums.length &&
    nums[nonDuplicateIndex] !== undefined
  ) {
    while (nums[index] === nums[nonDuplicateIndex]) {
      nonDuplicateIndex++;
      duplicates++;
    }

    nums[index + 1] = nums[nonDuplicateIndex];

    index++;
    nonDuplicateIndex++;
  }

  nums.length = nums.length - duplicates;

  return nums.length;
}

const TEST_CASES = [
  { input: [1, 1, 2], output: 2 },
  { input: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4], output: 5 },
  { input: [1], output: 1 },
];

test("26. Remove Duplicates from Sorted Array", () => {
  TEST_CASES.forEach(({ input, output }) =>
    expect(removeDuplicates(input)).toBe(output)
  );
});

export {};
