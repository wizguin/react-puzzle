import './ControlButton.css'

import { gridAtom, selectedCellAtom } from '../../../../atoms'

import { useAtomValue, useSetAtom } from 'jotai'

interface Props {
    value: number
}

export default function ControlButton({ value }: Props) {

    const setGrid = useSetAtom(gridAtom)
    const selectedCell = useAtomValue(selectedCellAtom)

    function onClick() {
        if (!selectedCell) {
            return
        }

        setGrid(grid => {
            const next = [...grid]

            next[selectedCell.box][selectedCell.cell] = value

            return next
        })
    }

    return (
        <div
            className='control-button'
            onClick={onClick}
        >
            {value}
        </div>
    )

}
