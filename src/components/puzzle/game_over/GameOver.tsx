import './GameOver.css'

import { generateSolution } from '../../../utils/gridUtils'
import { solutionAtom } from '../../../atoms'
import { Status } from '../Puzzle'

import { useSetAtom } from 'jotai'

interface Props {
    status: Status
}

/**
 * Game over component that displays a message based on the game status,
 * and a button for starting a new game.
 */
export default function GameOver({ status }: Props) {

    const setSolution = useSetAtom(solutionAtom)

    const message = status === Status.Lost
        ? 'Game over!'
        : 'You won!'

    /**
     * Generates a new solution, triggering a new game.
     */
    function onNewClick() {
        setSolution(generateSolution())
    }

    return (
        <div id='game-over'>
            {message}

            <button
                className='btn-success'
                onClick={onNewClick}
            >
                Start new game
            </button>
        </div>
    )

}
