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
            <div id='controls__numbers'>
                {buttons}
            </div>

            <div id='controls__submit'>Submit Turn</div>
        </div>
    )

}
