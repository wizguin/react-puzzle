import type { GridData, SolvedGridData } from '../atoms'
import { pickRandomIndex } from './randomUtils'
import { STARTING_CELLS } from '../consts/consts'

/**
 * Creates a starting grid from a solved grid, randomly picking 3 correct cells in each box.
 *
 * @param solution - A solved grid
 * @returns A starting grid
 */
export function createStartGrid(solution: SolvedGridData) {
    const grid = []

    for (const box of solution) {
        const startBox = createStartBox(box)

        grid.push(startBox)
    }

    return grid
}

/**
 * Creates a starting box from a solved box, randomly picking 3 correct cells.
 *
 * @param box - A solved box
 * @returns A starting box
 */
function createStartBox(box: number[]) {
    const result = Array(box.length).fill(null)

    while (result.filter(Boolean).length < STARTING_CELLS) {
        const randomIndex = pickRandomIndex(box)

        result[randomIndex] = box[randomIndex]
    }

    return result
}

export function resetTurnGrid() {
    return createEmptyGrid()
}

/**
 * Compares a grid with a solved grid.
 *
 * @param grid - A grid
 * @param solution - A solved grid
 * @returns True if grid matches solved grid, otherwise false
 */
export function checkGameWon(grid: GridData, solution: SolvedGridData) {
    return JSON.stringify(grid) === JSON.stringify(solution)
}

/**
 * Creates an empty sudoku grid.
 *
 * @returns An empty grid
 */
function createEmptyGrid() {
    return Array(9).fill(Array(9).fill(null))
}
