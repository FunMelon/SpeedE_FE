import React from 'react'

const HomePage = () => {
    return (
        <Wrapper/>
    )
}

// 网页主体
const Wrapper = () => {
    return (
        <section id={"wrapper"}>
            <Intro/>
            <Login/>
        </section>
    )
}

// 简介
const Intro = () => {
    return (
        <div className={"textBlock"}>
            <div>
                <p id={"main_title"}>
                    速运易
                </p>
                <p id={"sub_title"}>
                    --打造智能货源调度平台
                </p>
            </div>

            <div id={"introduce"}>
                <p>
                    &emsp;&emsp;伴随着市场氛围的愈演愈烈及生活工作节奏的加速，此时的传统货运领域也越来越被资本所关注。
                    传统货运领域存在的费用不透明、货源信息不对称、信用体系缺失、车辆跟踪难、
                    营运效果差等痛点在信息通信技术及移动互联网蓬勃发展的时代背景下显得格格不入， 网络信息货运便油然而生。
                    现在已有大部分APP都或多或少存在一些问题和缺点。
                </p>
                <p>
                    &emsp;&emsp;我们旨在通过大数据分析与移动互联网技术，提供成熟的货运订单系统、货运运营管理系统、
                    货运配套营销系统，提高社会资源配置效率。“易运——货运司机APP产品设计”项目的目标是结合上海运钢公司业务，
                    综合大宗商品运输特点，为货运司机开发更优的APP，避免传统运输中的缺点，提高货运司机在运货过程中的体验。
                    提高社会资源利用率，满足社会高速发展的需求。
                </p>
            </div>
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
                    <input className={"login_input"} type={"password"} placeholder={"密码"}/>
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