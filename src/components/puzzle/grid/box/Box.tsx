interface Props {
    data: number[]
}

export default function Box({ data }: Props) {

    console.log(data)

    return (
        <div className='box'>
            {data}
        </div>
    )

}
