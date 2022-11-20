import React from 'react'

const CloseButton = (props:{formName:string}) => {
    const event = () => {
        const form = document.getElementById(props.formName)
        if (form != null) {
            form.style.display = "none"
        } 
    }
    return (
        <div id='close_button_wrapper'>
            <button onClick={event}>x</button>
        </div>
    )
}
export default CloseButton;