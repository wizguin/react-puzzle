import './Cell.css'

import { selectedCellAtom, solutionAtom, turnGridAtom } from '../../../../../atoms'
import { classNames } from '../../../../../utils'

import { useAtom, useAtomValue } from 'jotai'

interface Props {
    value: number | null,
    boxIndex: number,
    cellIndex: number
}

/**
 * Cell component that displays a value.
 * Values from turnGrid will override the one passed through props.
 * Cells are colored based on their state in the grid.
 */
export default function Cell({ value, boxIndex, cellIndex }: Props) {

    const solution = useAtomValue(solutionAtom)
    const turnGrid = useAtomValue(turnGridAtom)

    const [selectedCell, setSelectedCell] = useAtom(selectedCellAtom)

    // Possible value from current turn
    const turnValue = turnGrid[boxIndex][cellIndex]

    // Use value from turn if exists
    const currentValue = turnValue || value || ''

    const active = isSelectedCell()

    const solved = solution[boxIndex][cellIndex] === value

    const isSameAsLastTurn = Boolean(turnValue) && turnValue === value
    const isInvalidAttempt = Boolean(value) && !solved && !turnValue

    const failed = isSameAsLastTurn || isInvalidAttempt

    const classes = classNames(
        'cell',
        active && 'active',
        solved && 'solved',
        failed && 'failed'
    )

    function onClick() {
        if (isSelectedCell()) {
            // Deselect
            setSelectedCell(null)
            return
        }

        setSelectedCell({
            box: boxIndex,
            cell: cellIndex
        })
    }

    function isSelectedCell() {
        return selectedCell?.box === boxIndex &&
            selectedCell?.cell === cellIndex
    }

    return (
        <div
            className={classes}
            onClick={onClick}
        >
            {currentValue}
        </div>
    )

}
