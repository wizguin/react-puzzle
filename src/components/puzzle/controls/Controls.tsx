import './Controls.css'

import { gridAtom, turnAtom, turnGridAtom } from '../../../atoms'
import ControlButton from './control_button/ControlButton'
import { resetTurnGrid } from '../../../utils/gridUtils'

import { useAtom, useSetAtom } from 'jotai'

export default function Controls() {

    const setGrid = useSetAtom(gridAtom)
    const [turnGrid, setTurnGrid] = useAtom(turnGridAtom)

    const [turn, setTurn] = useAtom(turnAtom)

    const buttons = Array.from(Array(9), (_, index) =>
        <ControlButton
            key={index}
            value={index + 1}
        />
    )

    function onSubmit() {
        if (turn >= 9) {
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
