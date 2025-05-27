import './Controls.css'

import { checkGameWon, resetTurnGrid } from '../../../utils/gridUtils'
import { gridAtom, solutionAtom, turnAtom, turnGridAtom, warningAtom } from '../../../atoms'
import ControlButton from './control_button/ControlButton'
import { MAX_TURNS } from '../../../consts/consts'

import { useAtom, useAtomValue, useSetAtom } from 'jotai'

export default function Controls() {

    const solution = useAtomValue(solutionAtom)

    const [grid, setGrid] = useAtom(gridAtom)
    const [turnGrid, setTurnGrid] = useAtom(turnGridAtom)

    const [turn, setTurn] = useAtom(turnAtom)
    const setWarning = useSetAtom(warningAtom)

    const buttons = Array.from(Array(9), (_, index) =>
        <ControlButton
            key={index}
            value={index + 1}
        />
    )

    function onSubmit() {
        if (!canSubmit()) {
            return
        }

        // Merge values from turnGrid into grid
        setGrid(prev => prev.map((box, boxIndex) =>
            box.map((value, cellIndex) =>
                turnGrid[boxIndex][cellIndex] || value
            )
        ))

        setTurnGrid(resetTurnGrid())
        setTurn(prev => prev + 1)
    }

    function canSubmit() {
        if (turn > MAX_TURNS || checkGameWon(grid, solution)) {
            return false
        }

        for (const [boxIndex, turnBox] of turnGrid.entries()) {
            if (isBoxSolved(boxIndex)) {
                continue
            }

            // Box must have entered value for this turn
            if (turnBox.filter(Boolean).length !== 1) {
                setWarning('Enter a new value into each box!')
                return false
            }
        }

        return true
    }

    function isBoxSolved(boxIndex: number) {
        return JSON.stringify(grid[boxIndex]) === JSON.stringify(solution[boxIndex])
    }

    return (
        <div id='controls'>
            <div id='controls__numbers'>
                {buttons}
            </div>

            <div
                id='controls__submit'
                onClick={onSubmit}
            >
                Submit Turn
            </div>
        </div>
    )

}
