interface Props {
    value: number
}

export default function Cell({ value }: Props) {

    return (
        <div className='cell'>
            {value}
        </div>
    )

}
