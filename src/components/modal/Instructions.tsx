import './Instructions.css'

import { instructionsVisibleAtom } from '../../atoms'
import { RULES } from '../../consts/consts'

import { useSetAtom } from 'jotai'

export default function Instructions() {

    const setInstructionsVisible = useSetAtom(instructionsVisibleAtom)

    function close() {
        setInstructionsVisible(false)
    }

    const rules = RULES.map(rule => <li>{rule}</li>)

    return (
        <div id='instructions'>

            <div
                id='lightbox'
                onClick={close}
            />

            <div id='instructions__content'>
                <h2>How to Play</h2>

                <ol>{rules}</ol>

                <button
                    id='instructions__close'
                    onClick={close}
                >
                    Close
                </button>
            </div>

        </div>
    )

}
