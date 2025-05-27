import './Cell.css'

import { selectedCellAtom, solutionAtom, turnGridAtom } from '../../../../../atoms'
import { classNames } from '../../../../../utils/cssUtils'

import { useAtom, useAtomValue } from 'jotai'

interface Props {
    value: number | null,
    boxIndex: number,
    cellIndex: number
}

export default function Cell({ value, boxIndex, cellIndex }: Props) {

    const solution = useAtomValue(solutionAtom)
    const turnGrid = useAtomValue(turnGridAtom)

    const [selectedCell, setSelectedCell] = useAtom(selectedCellAtom)

    // Use value from turn if exists
    const currentValue = turnGrid[boxIndex][cellIndex] || value || ''

    const active = isSelectedCell()

    const solved = solution[boxIndex][cellIndex] === value

    const failed = Boolean(value) && !solved

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
