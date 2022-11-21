import React from 'react'
import "../../style/forms.css"
import CloseButton from './buttons/CloseButton';
import SubmitButton from './buttons/SubmitButton';

const SubmitOrderForm = () => {
    return (
        <form className='form_wrapper' id='submit_order_form'>
            <CloseButton formName='submit_order_form' />
            <div className='form_content_wrapper'>
                <p><b>生成订单</b></p>
            </div>
            <div className="form_content_wrapper">
                货物内容：
                <input type="text" />
            </div>
            <div className="form_content_wrapper">
                运输起点：
                <select name="complain_reason">
                    <option value="reason1">北京</option>
                    <option value="reason2">上海</option>
                    <option value="reason3">深圳</option>
                </select>
            </div>
            <div className="form_content_wrapper">
                运输终点：
                <select name="complain_reason">
                    <option value="reason1">上海</option>
                    <option value="reason2">深圳</option>
                    <option value="reason3">北京</option>
                </select>
            </div>
            <div className="form_content_wrapper">
                货物类型：
                <input type="radio" name='substance_type' value='液体' />液体
                <input type="radio" name='substance_type' value='固体' />固体
                <input type="radio" name='substance_type' value='气体' />气体
            </div>
            <div className="form_content_wrapper">
                易碎品：
                <input type="radio" name='easy_to_break' value='是' />是
                <input type="radio" name='easy_to_break' value='否' />否
            </div>
            <div className="form_content_wrapper">
                易燃易爆物：
                <input type="radio" name='easy_to_explode' value='是' />是
                <input type="radio" name='easy_to_explode' value='否' />否
            </div>
            <div className="form_content_wrapper">
                预计装卸用时：
                <input type="text" name='time_to_wrap' />
                分钟
            </div>
            <SubmitButton formName='submit_order_form' />
        </form>
    )
}

export default SubmitOrderForm;