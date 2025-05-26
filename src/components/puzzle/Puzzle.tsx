import './Puzzle.css'

import { gridAtom } from '../../atoms'

import Controls from './controls/Controls'
import Grid from './grid/Grid'
import Stats from './stats/Stats'

import { useAtomValue } from 'jotai'

export default function Puzzle() {

    const grid = useAtomValue(gridAtom)

    return (
        <div id='puzzle'>
            <Stats />

            {grid.length > 0 && <Grid />}

            <Controls />
        </div>
    )

}
