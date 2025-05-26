import './Puzzle.css'

import Controls from './controls/Controls'
import Grid from './grid/Grid'
import Stats from './stats/Stats'

import { useEffect, useState } from 'react'

export type GridData = number[][]

export default function Puzzle() {

    const [solution, setSolution] = useState<GridData>([])

    const [grid, setGrid] = useState<GridData>([])

    const [turn] = useState<number>(1)

    useEffect(() => {
        setGrid(createStartGrid(solution))
    }, [solution])

    const gridComponent =
        <Grid
            grid={grid}
        />

    return (
        <div id='puzzle'>
            <Stats
                turn={turn}
            />

            {grid.length > 0 && gridComponent}

            <Controls />
        </div>
    )

}
