import './Warning.css'

import { classNames } from '../../utils'
import { warningAtom } from '../../atoms'

import { useAtom } from 'jotai'
import { useEffect } from 'react'

/**
 * Warning notification that displays a message when warningAtom is non-null.
 */
export default function Warning() {

    const [warning, setWarning] = useAtom(warningAtom)

    // Clears warning message after 5 seconds
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
