import React from 'react'
import "../../style/forms.css"
import CloseButton from './buttons/CloseButton';
import SubmitButton from './buttons/SubmitButton';

const ComplainForm = () => {
    return (
        <form className='form_wrapper' id='complain_form'>
            <CloseButton formName='complain_form' />
            <div className='form_content_wrapper'>
                <p><b>请公正填写您的申诉请求</b></p>
            </div>
            <div className="form_content_wrapper">
                申诉单号：
                <select name="orderId">
                    <option value="id1">123456789</option>
                    <option value="id2">123456789</option>
                    <option value="id3">123456789</option>
                    <option value="id4">123456789</option>
                </select>
            </div>
            <div className="form_content_wrapper">
                申诉理由：
                <select name="complain_reason">
                    <option value="reason1">买家未按时到达</option>
                    <option value="reason2">时间过于紧张</option>
                    <option value="reason3">派单过于频繁</option>
                </select>
            </div>
            <div className="form_content_wrapper">
                申诉说明：
                <textarea name="" />
            </div>
            <SubmitButton formName='complain_form' />
        </form>
    )
}

export default ComplainForm;