import style from './PrimaryButton.module.css'

const PrimaryButton = (props) => {

    return (
        <button
            type={props.type}
            onClick={props.onClick}
            className={`${style.PrimaryButton} ${props.className}`}
        >
            {props.children}
        </button>
    )
}

export default PrimaryButton