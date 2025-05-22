export const samplePuzzle: number[][] = [
  [0, 0, 0, 2, 6, 0, 7, 0, 1],
  [6, 8, 0, 0, 7, 0, 0, 9, 0],
  [1, 9, 0, 0, 0, 4, 5, 0, 0],
  [8, 2, 0, 1, 0, 0, 0, 4, 0],
  [0, 0, 4, 6, 0, 2, 9, 0, 0],
  [0, 5, 0, 0, 0, 3, 0, 2, 8],
  [0, 0, 9, 3, 0, 0, 0, 7, 4],
  [0, 4, 0, 0, 5, 0, 0, 3, 6],
  [7, 0, 3, 0, 1, 8, 0, 0, 0],
];

export type SudokuGrid = number[][];

// Generate an empty 9x9 grid
export const generateEmptyGrid = (): SudokuGrid =>
  Array.from({ length: 9 }, () => Array(9).fill(0));

// Validate number placement
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
