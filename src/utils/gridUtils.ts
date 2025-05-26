import type { GridData, SolvedGridData } from '../atoms'
import { pickRandomIndex } from './randomUtils'
import type { SolvedGridData } from '../atoms'

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

    while (result.filter(Boolean).length < 3) {
        const randomIndex = pickRandomIndex(box)

        result[randomIndex] = box[randomIndex]
    }

    return result
}

export function initTurnGrid(solution: SolvedGridData) {
    const empty = solution.map(box => box.map(_ => null))

    return empty
}

export function isValidMove(grid: GridData, solution: SolvedGridData, box: number, cell: number) {
    return grid[box][cell] !== solution[box][cell]
}
