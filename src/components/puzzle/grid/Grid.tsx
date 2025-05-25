import './Grid.css'

import Box from './box/Box'
import type { GridData } from '../Puzzle'

interface Props {
    grid: GridData
}

export default function Grid({ grid }: Props) {

    console.log(grid)

    const boxes = grid.map((boxData, index) =>
        <Box
            key={index}
            data={boxData}
        />
    )

    return (
        <div id='grid'>
            {boxes}
        </div>
    )

}
