import React from 'react'
import "../../style/forms.css"
import CloseButton from './CloseButton';

const ComplainForm = () => {
    return (
        <form className='form_wrapper' id='complain_form'>
            <CloseButton formName='complain_form'/>
            <div className='form_content_wrapper'>
                <p><b>请公正填写您的申诉请求</b></p>
            </div>
            <div className="form_content_wrapper">
                申诉单号：
                <input type="text" name="" />
            </div>
            <div className="form_content_wrapper">
                申诉理由：
                <input type="text" name="" />
            </div>
            <div className="form_content_wrapper">
                申诉说明：
                <textarea  name="" />
            </div>
        </form>
    )
}

export default ComplainForm;