import React from 'react'
import BenefitForm from './BenefitForm'
import ComplainForm from './Complain'
import SubmitOrderForm from './SubmitOrderForm'

const AllForms = () => {
    return (
        <div>
            <ComplainForm />
            <BenefitForm />
            <SubmitOrderForm />
        </div>
    )
}

export default AllForms