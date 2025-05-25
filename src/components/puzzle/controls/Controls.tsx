import './Controls.css'

import ControlButton from './control_button/ControlButton'

export default function Controls() {

    const buttons = Array.from(Array(9), (_, index) =>
        <ControlButton
            value={index + 1}
        />
    )

    return (
        <div id='controls'>
            {buttons}
        </div>
    )

}
