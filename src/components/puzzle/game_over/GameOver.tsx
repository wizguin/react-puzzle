import { Status } from '../Puzzle'

interface Props {
    status: Status
}

export default function GameOver({ status }: Props) {

    const message = status === Status.Lost
        ? 'You lost'
        : 'You won!'

    return (
        <div id='game-over'>
            {message}
        </div>
    )

}
