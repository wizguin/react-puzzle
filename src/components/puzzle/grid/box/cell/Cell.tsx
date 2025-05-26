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

    const active =
        selectedCell?.box === boxIndex &&
        selectedCell?.cell === cellIndex

    const solved = solution[boxIndex][cellIndex] === value

    function onClick() {
        setSelectedCell({
            box: boxIndex,
            cell: cellIndex
        })
    }

    const classes = classNames(
        'cell',
        active && 'active',
        solved && 'solved'
    )

    // Use value from turn if exists
    const currentValue = turnGrid[boxIndex][cellIndex] || value || ''

    return (
        <div
            className={classes}
            onClick={onClick}
        >
            {currentValue}
        </div>
    )

}
