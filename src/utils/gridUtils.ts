import type { GridData } from '../components/puzzle/Puzzle'
import { pickRandomIndex } from './random'

/**
 * Creates a starting grid from a solved grid, randomly picking 3 correct cells in each box.
 *
 * @param solution - A solved grid
 * @returns A starting grid
 */
export function createStartGrid(solution: GridData) {
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
