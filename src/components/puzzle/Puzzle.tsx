import './Puzzle.css'

import { gridAtom, solutionAtom, turnAtom } from '../../atoms'

import Controls from './controls/Controls'
import GameOver from './game_over/GameOver'
import Grid from './grid/Grid'
import Stats from './stats/Stats'

import { useEffect, useState } from 'react'
import { checkGameWon } from '../../utils/gridUtils'
import { useAtomValue } from 'jotai'

export enum Status {
    Playing,
    Lost,
    Won
}

export default function Puzzle() {

    const solution = useAtomValue(solutionAtom)
    const grid = useAtomValue(gridAtom)
    const turn = useAtomValue(turnAtom)

    const [status, setStatus] = useState<Status>(Status.Playing)

    useEffect(() => checkGameOver(), [turn])

    function checkGameOver() {
        if (!grid.length) {
            return
        }

        if (checkGameWon(grid, solution)) {
            setStatus(Status.Won)
            return
        }

        if (turn > 9) {
            setStatus(Status.Lost)
        }
    }

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
