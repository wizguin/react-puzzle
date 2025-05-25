import './ControlButton.css'

interface Props {
    value: number
}

export default function ControlButton({ value }: Props) {

    return (
        <div className='control-button'>
            {value}
        </div>
    )

}
