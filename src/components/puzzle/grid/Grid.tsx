import Box from './box/Box'

interface Props {
    grid: number[][]
}

export default function Grid({ grid }: Props) {

    console.log(grid)

    const boxes = grid.map(boxData =>
        <Box
            data={boxData}
        />
    )

    return (
        <div id='grid'>
            {boxes}
        </div>
    )

}
