import React, { ReactNode, useState } from 'react'
import '../style/personInfo.css'
import BenefitForm from './forms/BenefitForm';
import ControlButton from './forms/buttons/ControlButton';
import ComplainForm from './forms/Complain';

const PersonInfor = (props: { userName: string; authentication: string, buttonNames: Array<Array<string>> }) => {

    const buttons: Array<ReactNode> = props.buttonNames.map(value => <ControlButton buttonContent={value[0]} buttonId={value[1]} />)

    return (
        <div id={"person_wrapper"}>
            <img id={"mugshot"} src={"resources/default_avatar.png"} alt={"头像加载失败"} />
            <span className={"name"}>
                {props.userName}
            </span>
            <section>
                <img id={"right"} src={"resources/right.jpg"} alt={"认证信息失败"} />
                {props.authentication}
            </section>
            <ul>
                {buttons}
            </ul>
        </div>
    )
}


export default PersonInfor;