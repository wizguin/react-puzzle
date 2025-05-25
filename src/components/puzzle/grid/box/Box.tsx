import './Box.css'

import Cell from './cell/Cell'

interface Props {
    data: number[]
}

export default function Box({ data }: Props) {

    const cells = data.map((value, index) =>
        <Cell
            key={index}
            value={value}
        />
    )

    return (
        <div className='box'>
            {cells}
        </div>
    )

}
