import './Stats.css'

import { turnAtom } from '../../../atoms'

import { useAtomValue } from 'jotai'

export default function Stats() {

    const turn = Math.min(useAtomValue(turnAtom), 9)

    return (
        <div id='stats'>
            <div className='stats__turn'>
                Turn: {turn}/9
            </div>
        </div>
    )

}
