import React from 'react'
import "../../style/forms.css"
import CloseButton from './buttons/CloseButton';
import SubmitButton from './buttons/SubmitButton';

const BenefitForm = () => {
    return (
        <form className='form_wrapper' id='benefit_form'>
            <CloseButton formName='benefit_form' />
            <SubmitButton formName='benefit_form' />
        </form>
    )
}

export default BenefitForm;