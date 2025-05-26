import './Puzzle.css'
import { gridAtom, solutionAtom } from '../../atoms'

import Controls from './controls/Controls'
import Grid from './grid/Grid'
import Stats from './stats/Stats'

import { useEffect, useState } from 'react'
import { useAtom } from 'jotai'

export default function Puzzle() {

    const [grid, setGrid] = useAtom(gridAtom)
    const [solution, setSolution] = useAtom(solutionAtom)

    const [turn] = useState<number>(1)

    useEffect(() => {
        setGrid(createStartGrid(solution))
    }, [solution])

    return (
        <div id='puzzle'>
            <Stats
                turn={turn}
            />

            {grid.length > 0 && <Grid />}

            <Controls />
        </div>
    )

}
