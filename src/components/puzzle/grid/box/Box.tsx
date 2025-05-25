import './Box.css'

import Cell from './cell/Cell'

interface Props {
    data: number[]
}

export default function Box({ data }: Props) {

    const cells = data.map(value =>
        <Cell
            value={value}
        />
    )

    return (
        <div className='box'>
            {cells}
        </div>
    )

}
