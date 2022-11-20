import React, { useState } from 'react'

const HomePage = () =>{
    return (
        <Wrapper></Wrapper>
    )
}

// 网页主体
const Wrapper = () => {
    return (
        <section id={"wrapper"}>
            <Intro></Intro>
            <Login></Login>
        </section>
    )
}

// 简介
const Intro = () =>{
    return (
        <div className={"textBlock"}>
            React 使创建交互式 UI 变得轻而易举。为你应用的每一个状态设计简洁的视图，
            当数据改变时 React 能有效地更新并正确地渲染组件。
            以声明式编写 UI，可以让你的代码更加可靠，且方便调试。
        </div>
    )
}
// 表单
const Login = () => {
    const loginSubmit = () => {
        return (
            alert("点击登录按钮")
        )
    }

    return (
        <form className={"mainForm"} onSubmit={loginSubmit}>
            <h1 className={"login_h2"}>
                登录
                <a href={""}>没有账号?立即注册</a>
            </h1>
            <ul>
                <li>
                    <input className={"login_input"} type={"text"} placeholder={"账号"}></input>
                </li>
                <li>
                    <input className={"login_input"} type={"password"}  placeholder={"密码"}/>
                </li>
                <li>
                    <select className={"check_box"}>
                        <option value={"司机"}>我是注册司机</option>
                        <option value={"货主"}>我是注册货主</option>
                        <option value={"平台管理员"}>我是平台管理员</option>
                    </select>
                </li>
                <li>
                    <label className={"login_check"}><input type={"checkbox"}/>记住密码</label>
                    <a href={""} className={"fr"}>忘记密码?</a>
                </li>
            </ul>
            <input type={"submit"} value={"登录"} className={"login_submit"}/>
        </form>
    )
}

export default HomePage;