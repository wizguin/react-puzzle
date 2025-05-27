import './Instructions.css'

import { instructionsVisibleAtom } from '../../atoms'

import { useSetAtom } from 'jotai'

export default function Instructions() {

    const setInstructionsVisible = useSetAtom(instructionsVisibleAtom)

    function onLightboxClick() {
        setInstructionsVisible(false)
    }

    return (
        <div id='instructions'>

            <div id='lightbox' onClick={onLightboxClick} />

        </div>
    )

}
