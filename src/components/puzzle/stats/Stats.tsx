import './Stats.css'

import { MAX_TURNS } from '../../../consts/consts'
import { turnAtom } from '../../../atoms'

import { useAtomValue } from 'jotai'

export default function Stats() {

    const turn = Math.min(useAtomValue(turnAtom), MAX_TURNS)

    return (
        <div id='stats'>
            <div className='stats__turn'>
                Turn: {turn}/{MAX_TURNS}
            </div>
        </div>
    )

}
