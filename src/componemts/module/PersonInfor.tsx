import React, { ReactNode, useState } from 'react'
import '../style/personInfo.css'

const PersonInfor = (props: { userName: string; authentication: string, buttonNames: Array<string> }) => {

    const buttons: Array<ReactNode> = props.buttonNames.map(value => <Button buttonName={value} />)

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

const Button = (props: { buttonName: string }) => {
    return (
        <li id='i'>
            <button>
                {props.buttonName}
            </button>
        </li>
    )

}

export default PersonInfor;