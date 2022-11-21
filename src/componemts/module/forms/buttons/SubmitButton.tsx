import React from 'react'

const SubmitButton = (props:{formName:string}) => {
    const event = () => {
        const form = document.getElementById(props.formName)
        if (form != null) {
            form.style.display = "none"
        } 
    }
    return (
        <div id='submit_button_wrapper'>
            <button onClick={event}>submit</button>
        </div>
    )
}
export default SubmitButton;