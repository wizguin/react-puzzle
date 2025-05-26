import './Stats.css'

interface Props {
    turn: number
}

export default function Stats({ turn }: Props) {

    return (
        <div id='stats'>
            <div className='stats__turn'>
                Turn: {turn}/9
            </div>
        </div>
    )

}
