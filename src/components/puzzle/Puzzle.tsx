import './Puzzle.css'

import Grid from './grid/Grid'

import { useState } from 'react'

export type GridData = number[][]

export default function Puzzle() {

    const [grid] = useState<Grid>(
        [
            [
                7,
                1,
                0,
                0,
                0,
                0,
                4,
                3,
                0
            ],
            [
                0,
                8,
                0,
                1,
                0,
                0,
                0,
                6,
                9
            ],
            [
                0,
                6,
                0,
                0,
                0,
                0,
                2,
                1,
                0
            ],
            [
                0,
                4,
                0,
                0,
                1,
                0,
                0,
                0,
                0
            ],
            [
                9,
                0,
                0,
                4,
                0,
                0,
                0,
                0,
                0
            ],
            [
                1,
                2,
                8,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            [
                0,
                0,
                0,
                7,
                0,
                1,
                0,
                0,
                0
            ],
            [
                0,
                9,
                1,
                0,
                0,
                0,
                7,
                0,
                0
            ],
            [
                0,
                0,
                6,
                0,
                0,
                0,
                0,
                5,
                0
            ]
        ]
    )

    const [turn] = useState<number>(1)

    return (
        <div id='puzzle'>
            <Grid
                grid={grid}
            />

            Current Turn: {turn}/9
        </div>
    )

}
