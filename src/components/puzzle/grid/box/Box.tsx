import './Box.css'

import Cell from './cell/Cell'

interface Props {
    data: (number | null)[],
    boxIndex: number
}

/**
 * Box component that contains grid cells.
 */
export default function Box({ data, boxIndex }: Props) {

    const cells = data.map((value, index) =>
        <Cell
            key={index}
            value={value}
            boxIndex={boxIndex}
            cellIndex={index}
        />
    )

    return (
        <div className='box'>
            {cells}
        </div>
    )

}
