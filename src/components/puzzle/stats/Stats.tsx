import './Stats.css'

import { instructionsVisibleAtom, turnAtom } from '../../../atoms'
import { MAX_TURNS } from '../../../consts/consts'

import { useAtomValue, useSetAtom } from 'jotai'

export default function Stats() {

    const setInstructionsVisible = useSetAtom(instructionsVisibleAtom)

    const turn = Math.min(useAtomValue(turnAtom), MAX_TURNS)

    function onInstructionsClick() {
        setInstructionsVisible(true)
    }

    return (
        <div id='stats'>
            <div id='stats__turn'>
                Turn: {turn}/{MAX_TURNS}
            </div>

            <div
                id='stats__instructions-button'
                onClick={onInstructionsClick}
            >
                ?
            </div>
        </div >
    )

}
