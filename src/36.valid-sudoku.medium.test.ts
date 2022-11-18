/* https://leetcode.com/problems/valid-sudoku/ */

const validateSubBox = (
  board: string[][],
  x: number,
  y: number,
  cache: any
) => {
  const num = board[y][x];

  if (num === ".") {
    return true;
  }

  if (cache.x[x][num] !== undefined || cache.y[y][num] !== undefined) {
    return false;
  }

  cache.x[x][num] = num;
  cache.y[y][num] = num;

  return true;
};

function isValidSudoku(board: string[][]): boolean {
  const cache = {
    x: Array.from({ length: board.length }, () => []),
    y: Array.from({ length: board.length }, () => []),
  };

  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      const isValid = validateSubBox(board, x, y, cache);

      if (!isValid) {
        return false;
      }
    }
  }

  return true;
}

const TEST_CASES = [
  {
    input: [
      ["5", "3", ".", ".", "7", ".", ".", ".", "."],
      ["6", ".", ".", "1", "9", "5", ".", ".", "."],
      [".", "9", "8", ".", ".", ".", ".", "6", "."],
      ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
      ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
      ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
      [".", "6", ".", ".", ".", ".", "2", "8", "."],
      [".", ".", ".", "4", "1", "9", ".", ".", "5"],
      [".", ".", ".", ".", "8", ".", ".", "7", "9"],
    ],
    output: true,
  },
  {
    input: [
      ["8", "3", ".", ".", "7", ".", ".", ".", "."],
      ["6", ".", ".", "1", "9", "5", ".", ".", "."],
      [".", "9", "8", ".", ".", ".", ".", "6", "."],
      ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
      ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
      ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
      [".", "6", ".", ".", ".", ".", "2", "8", "."],
      [".", ".", ".", "4", "1", "9", ".", ".", "5"],
      [".", ".", ".", ".", "8", ".", ".", "7", "9"],
    ],
    output: false,
  },
];

test("36. Valid Sudoku", () => {
  TEST_CASES.forEach(({ input, output }) =>
    expect(isValidSudoku(input)).toStrictEqual(output)
  );
});

export {};
