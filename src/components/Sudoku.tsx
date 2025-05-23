import { useState } from "react";
import type { SudokuGrid } from "../utils/sudoku";
import { isValidMove, samplePuzzle } from "../utils/sudoku";


const getFixedMap = (grid: SudokuGrid) =>
    grid.map((row) => row.map((val) => val !== 0));

const Sudoku = () => {
    const [grid, setGrid] = useState<SudokuGrid>(samplePuzzle);
    const fixedMap = getFixedMap(samplePuzzle);
    const [initialGrid] = useState<SudokuGrid>(samplePuzzle);

    const resetGrid = () => {
        setGrid(initialGrid.map(row => [...row]));
    };


    const handleChange = (row: number, col: number, value: string) => {
        const num = parseInt(value);
        if (!value || (num >= 1 && num <= 9 && isValidMove(grid, row, col, num))) {
            const newGrid = grid.map((r) => [...r]);
            newGrid[row][col] = isNaN(num) ? 0 : num;
            setGrid(newGrid);
        }
    };

    const getCellClass = (row: number, col: number, isFixed: boolean) => {
        const base =
            "w-[40px] h-[40px] text-center text-xl font-bold border border-gray-400 p-0 m-0 focus:outline-none";
        const fixed = isFixed
            ? "bg-gray-200 text-black font-extrabold"
            : "focus:bg-blue-100";

        const thickBorders = [
            row % 3 === 0 ? "border-t-2" : "",
            col % 3 === 0 ? "border-l-2" : "",
            row === 8 ? "border-b-2" : "",
            col === 8 ? "border-r-2" : "",
        ];

        return `${base} ${fixed} ${thickBorders.join(" ")}`;
    };

    return (
        <div className="inline-block border-2 border-black">
            <div className="grid grid-cols-9 grid-rows-9">
                {grid.map((row, rowIndex) =>
                    row.map((val, colIndex) => {
                        const isFixed = fixedMap[rowIndex][colIndex];
                        return (
                            <input
                                key={`${rowIndex}-${colIndex}`}
                                value={val || ""}
                                onChange={(e) =>
                                    handleChange(rowIndex, colIndex, e.target.value)
                                }
                                disabled={isFixed}
                                className={getCellClass(rowIndex, colIndex, isFixed)}
                                maxLength={1}
                                type="text"
                            />
                        );
                    })
                )}
            </div>
            <div className="mt-4 text-center">
                <button
                    onClick={resetGrid}
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
                >
                    Reset Puzzle
                </button>
            </div>

        </div>

    );
};

export default Sudoku;
