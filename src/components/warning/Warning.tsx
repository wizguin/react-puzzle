import './Warning.css'

import { classNames } from '../../utils/cssUtils'
import { warningAtom } from '../../atoms'

import { useAtom } from 'jotai'
import { useEffect } from 'react'

export default function Warning() {

    const [warning, setWarning] = useAtom(warningAtom)

    useEffect(() => {
        if (!warning) {
            return
        }

        const timeout = setTimeout(() => {
            setWarning(null)
        }, 5000)

        return () => {
            clearTimeout(timeout)
        }
    }, [warning])

    function onClick() {
        setWarning(null)
    }

    return (
        <div
            id='warning'
            className={classNames(Boolean(warning) && 'visible')}
            onClick={onClick}
        >
            {warning}
        </div>
    )

}
