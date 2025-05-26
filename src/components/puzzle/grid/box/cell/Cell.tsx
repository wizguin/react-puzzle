import './Cell.css'

interface Props {
    value: number,
    boxIndex: number,
    cellIndex: number
}

export default function Cell({ value, boxIndex, cellIndex }: Props) {

    return (
        <div className='cell'>
            {value || ''}
        </div>
    )

}
