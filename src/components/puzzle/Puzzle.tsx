import './Puzzle.css'

import { createStartGrid, generateSolution, initTurnGrid } from '../../utils/gridUtils'
import { gridAtom, solutionAtom, turnGridAtom } from '../../atoms'

import Controls from './controls/Controls'
import Grid from './grid/Grid'
import Stats from './stats/Stats'

import { useAtom, useSetAtom } from 'jotai'
import { useEffect } from 'react'

export default function Puzzle() {

    const [grid, setGrid] = useAtom(gridAtom)
    const [solution, setSolution] = useAtom(solutionAtom)
    const setTurnGrid = useSetAtom(turnGridAtom)

    // Generates a new solution
    useEffect(() => {
        setSolution(generateSolution())
    }, [])

    // Initialize grids for new game
    useEffect(() => {
        setGrid(createStartGrid(solution))
        setTurnGrid(initTurnGrid(solution))
    }, [solution])

    return (
        <div id='puzzle'>
            <Stats />

            {grid.length > 0 && <Grid />}

            <Controls />
        </div>
    )

}
