import React, { ReactNode, useState } from 'react'
import '../style/personInfo.css'
import ComplainForm from './forms/Complain';

const PersonInfor = (props: { userName: string; authentication: string, buttonNames: Array<Array<string>> }) => {

    const buttons: Array<ReactNode> = props.buttonNames.map(value => <Button buttonContent={value[0]} buttonId={value[1]} />)

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
            <ComplainForm />
        </div>
    )
}

const Button = (props: { buttonContent: string, buttonId: string }) => {
    const event = () => {
        const a: HTMLElement | null = document.getElementById(props.buttonId)
        if (a != null) {
            a.style.display = "flex"
            const form_width = window.getComputedStyle(a).width
            const w = ((document.body.clientWidth - parseInt(form_width)) / 2).toString()
            a.style.left = w + "px"
            const form_height = window.getComputedStyle(a).height
            const h = ((document.body.clientHeight - parseInt(form_height)) / 2).toString()
            a.style.top = h + "px"
        }
    }
    return (
        <li>
            <button className={"BButton"} onClick={event}>
                {props.buttonContent}
            </button>
        </li>
    )

}

export default PersonInfor;