import './Stats.css'

import { instructionsVisibleAtom, turnAtom } from '../../../atoms'
import { MAX_TURNS } from '../../../consts/consts'

import { useAtomValue, useSetAtom } from 'jotai'

/**
 * Stats component that displays the current turn and an instructions button.
 */
export default function Stats() {

    const setInstructionsVisible = useSetAtom(instructionsVisibleAtom)

    // Cap visible turn at MAX_TURNS
    const turn = Math.min(useAtomValue(turnAtom), MAX_TURNS)

    function onInstructionsClick() {
        setInstructionsVisible(true)
    }

    return (
        <div id='stats'>
            <div id='stats__turn'>
                Turn: {turn}/{MAX_TURNS}
            </div>

            <button
                id='stats__instructions-button'
                onClick={onInstructionsClick}
            >
                ?
            </button>
        </div >
    )

}
