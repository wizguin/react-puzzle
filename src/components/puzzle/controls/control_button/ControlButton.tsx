import './ControlButton.css'

import { gridAtom, selectedCellAtom, turnGridAtom } from '../../../../atoms'

import { useAtomValue, useSetAtom } from 'jotai'

interface Props {
    value: number
}

export default function ControlButton({ value }: Props) {

    const grid = useAtomValue(gridAtom)
    const setTurnGrid = useSetAtom(turnGridAtom)

    const selectedCell = useAtomValue(selectedCellAtom)

    function onClick() {
        if (!selectedCell) {
            return
        }

        const { box, cell } = selectedCell

        setTurnGrid(prev => {
            const next = [...prev]
            // const boxData = grid[box]

            // Clear any moves from turn box
            next[box] = next[box].map(_ => null)

            next[box][cell] = value

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
