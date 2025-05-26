import './ControlButton.css'

import { gridAtom, selectedCellAtom, solutionAtom, turnGridAtom } from '../../../../atoms'
import { isValidMove } from '../../../../utils/gridUtils'

import { useAtomValue, useSetAtom } from 'jotai'
import { useEffect } from 'react'

interface Props {
    value: number
}

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
    }, [selectedCell])

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

            if (!isValidMove(grid, solution, box, cell)) {
                return next
            }

            // Clear any moves from turn box
            next[box] = next[box].map(_ => null)

            next[box][cell] = value

            return next
        })
    }

    return (
        <div
            className='control-button'
            onClick={updateSelectedCell}
        >
            {value}
        </div>
    )

}
