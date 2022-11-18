import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Wrapper></Wrapper>
        </div>
    );
}

// 导航栏
function Header() {
    return (
        <nav>
            我是导航栏
        </nav>
    )
}

// 网页主体
function Wrapper() {
    return (
        <section id={"wrapper"}>
           <Login></Login>
        </section>
    )
}

// 表单
function Login() {
    return (
        <form className={"mainForm"}>
            <h2 className={"login_h2"}>
                登录
                <a href={""}>没有账号?立即注册</a>
            </h2>
            <ul>
                <li>
                    <input className={"login_input"} type={"text"}></input>
                </li>
                <li>
                    <input className={"login_input"} type={"password"}/>
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

export default App;
