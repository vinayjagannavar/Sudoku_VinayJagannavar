export const samplePuzzle: number[][] = [
  [0, 1, 5, 0, 7, 0, 0, 0, 0],
  [4, 0, 0, 8, 0, 0, 7, 5, 0],
  [0, 0, 8, 0, 0, 9, 0, 1, 6],
  [9, 6, 4, 1, 0, 7, 0, 3, 0],
  [0, 8, 2, 3, 9, 0, 5, 0, 0],
  [5, 0, 0, 0, 0, 4, 0, 9, 0],
  [0, 2, 0, 4, 1, 0, 8, 0, 0],
  [0, 0, 1, 7, 0, 3, 9, 0, 4],
  [0, 0, 0, 9, 2, 0, 0, 6, 5],
];

export type SudokuGrid = number[][];

export const generateEmptyGrid = (): SudokuGrid =>
  Array.from({ length: 9 }, () => Array(9).fill(0));

export const isValidMove = (
  grid: SudokuGrid,
  row: number,
  col: number,
  num: number
): boolean => {
  for (let i = 0; i < 9; i++) {
    if (grid[row][i] === num || grid[i][col] === num) return false;

    const subRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    const subCol = 3 * Math.floor(col / 3) + i % 3;
    if (grid[subRow][subCol] === num) return false;
  }
  return true;
};
