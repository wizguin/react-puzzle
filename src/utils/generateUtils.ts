import { getSudoku } from 'sudoku-gen'

/**
 * Generate a new Sudoku solution.
 *
 * @returns Sudoku solution
 */
export function generateSolution() {
    const { solution } = getSudoku()

    const rows = stringToRows(solution)
    const grid = populateGrid(rows)

    return grid
}

/**
 * Converts Sudoku string to array of rows.
 *
 * @param string - Sudoku string
 * @returns Array of rows
 */
function stringToRows(string: string) {
    const rows = []

    for (let i = 0; i < 9; i++) {
        // Slice 9 chars for each row and convert to numbers
        const row = string.slice(i * 9, i * 9 + 9).split('').map(Number)

        rows.push(row)
    }

    return rows
}

/**
 * Populates new grid from array of rows.
 *
 * @param rows - Array of rows
 * @returns Grid populated from rows
 */
function populateGrid(rows: number[][]) {
    const grid = []

    // Iterate through all possible boxes
    for (let boxRow = 0; boxRow < 3; boxRow++) {
        for (let boxCol = 0; boxCol < 3; boxCol++) {

            grid.push(createBox(boxRow, boxCol, rows))
        }
    }

    return grid
}

/**
 * Creates a 3x3 box and populates values from array of rows.
 *
 * @param boxRow - Box row index
 * @param boxCol - Box column index
 * @param rows - Row data
 */
function createBox(boxRow: number, boxCol: number, rows: number[][]) {
    const box = []

    // Iterate through rows and cols within 3x3 box
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {

            // Get cell from row data
            box.push(rows[boxRow * 3 + row][boxCol * 3 + col])
        }
    }

    return box
}

