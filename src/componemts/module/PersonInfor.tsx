import React from 'react'
import '../style/personInfo.css'

const PersonInfor = (props: { userName: string; authentication: string}) => {

    return (
        <div id={"person_wrapper"}>
            <img id={"mugshot"} src={"resources/default_avatar.png"} alt={"头像加载失败"}/>
            <span className={"name"}>
                {props.userName}
            </span>
            <section>
                <img id={"right"} src={"resources/right.jpg"} alt={"认证信息失败"}/>
                {props.authentication}
            </section>
            <ul>
                <li>
                    <button>编辑个人资料</button>
                </li>
                <li>
                    <button>查看当前收益</button>
                </li>
                <li>
                    <button>我要申诉</button>
                </li>
            </ul>
        </div>
    )
}

export default PersonInfor;