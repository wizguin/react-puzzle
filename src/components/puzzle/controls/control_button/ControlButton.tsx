import './ControlButton.css'

import { gridAtom, selectedCellAtom, solutionAtom, turnGridAtom } from '../../../../atoms'

import { useAtomValue, useSetAtom } from 'jotai'
import { useEffect } from 'react'

interface Props {
    value: number
}

/**
 * Numeric control button used for entering values into cells.
 */
export default function ControlButton({ value }: Props) {

    const grid = useAtomValue(gridAtom)
    const solution = useAtomValue(solutionAtom)
    const setTurnGrid = useSetAtom(turnGridAtom)

    const selectedCell = useAtomValue(selectedCellAtom)

    // Bind keyboard shortcut
    useEffect(() => {
        window.addEventListener('keydown', onKeyDown)

        return () => {
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [grid, selectedCell])

    function onKeyDown({ key }: KeyboardEvent) {
        if (key === value.toString()) {
            updateSelectedCell()
        }
    }

    function updateSelectedCell() {
        if (!selectedCell) {
            return
        }

        const { box, cell } = selectedCell

        setTurnGrid(prev => {
            const next = [...prev]

            if (isCellSolved(box, cell)) {
                return next
            }

            // Clear any moves from turn box
            next[box] = next[box].map(_ => null)

            // Set cell to new value
            next[box][cell] = value

            return next
        })
    }

    /**
     * Checks if a cell is solved.
     *
     * @param boxIndex - Box index
     * @param cellIndex - Cell index
     * @returns True if cell is solved, otherwise false
     */
    function isCellSolved(boxIndex: number, cellIndex: number) {
        return grid[boxIndex][cellIndex] === solution[boxIndex][cellIndex]
    }

    return (
        <button
            className='btn-light control-button'
            onClick={updateSelectedCell}
        >
            {value}
        </button>
    )

}
