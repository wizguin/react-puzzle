import './Grid.css'

import Box from './box/Box'
import { gridAtom } from '../../../atoms'

import { useAtomValue } from 'jotai'

export default function Grid() {

    const grid = useAtomValue(gridAtom)

    const boxes = grid.map((boxData, index) =>
        <Box
            key={index}
            data={boxData}
            boxIndex={index}
        />
    )

    return (
        <div id='grid'>
            {boxes}
        </div>
    )

}
