import './Puzzle.css'

import { createStartGrid } from '../../utils/gridUtils'
import Grid from './grid/Grid'

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
            {grid.length > 0 && gridComponent}

            Current Turn: {turn}/9
        </div>
    )

}
