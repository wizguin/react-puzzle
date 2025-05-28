import './Puzzle.css'

import { gridAtom, solutionAtom, turnAtom } from '../../atoms'

import Controls from './controls/Controls'
import GameOver from './game_over/GameOver'
import Grid from './grid/Grid'
import { MAX_TURNS } from '../../consts/consts'
import Stats from './stats/Stats'

import { useEffect, useState } from 'react'
import { checkGameWon } from '../../utils/gridUtils'
import { useAtomValue } from 'jotai'

export enum Status {
    Playing,
    Lost,
    Won
}

/**
 * Main puzzle component that manages the game status and displays the puzzle UI.
 */
export default function Puzzle() {

    const solution = useAtomValue(solutionAtom)
    const grid = useAtomValue(gridAtom)

    const turn = useAtomValue(turnAtom)
    const [status, setStatus] = useState<Status>(Status.Playing)

    // Check game over on grid update
    useEffect(() => checkGameOver(), [grid])

    // New game
    useEffect(() => setStatus(Status.Playing), [solution])

    function checkGameOver() {
        // Grid not yet created
        if (!grid.length) {
            return
        }

        if (checkGameWon(grid, solution)) {
            setStatus(Status.Won)
            return
        }

        // Game over
        if (turn > MAX_TURNS) {
            setStatus(Status.Lost)
        }
    }

    // Display Controls when playing, otherwise display GameOver
    const activeComponent = status === Status.Playing
        ? <Controls />
        : <GameOver status={status} />

    return (
        <div id='puzzle'>
            <Stats />

            {grid.length > 0 && <Grid />}
            {activeComponent}
        </div>
    )

}
