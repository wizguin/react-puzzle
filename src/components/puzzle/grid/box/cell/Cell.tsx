import './Cell.css'

import { classNames } from '../../../../../utils/cssUtils'
import { selectedCellAtom } from '../../../../../atoms'

import { useAtom } from 'jotai'

interface Props {
    value: number,
    boxIndex: number,
    cellIndex: number
}

export default function Cell({ value, boxIndex, cellIndex }: Props) {

    const [selectedCell, setSelectedCell] = useAtom(selectedCellAtom)

    const active =
        selectedCell?.box === boxIndex &&
        selectedCell?.cell === cellIndex

    function onClick() {
        setSelectedCell({
            box: boxIndex,
            cell: cellIndex
        })
    }

    return (
        <div
            className={classNames('cell', active && 'active')}
            onClick={onClick}
        >
            {value || ''}
        </div>
    )

}
