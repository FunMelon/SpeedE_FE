import React from 'react'
import PersonInfor from "./module/PersonInfor";
import GodMap from "./module/Map";
import './style/Board.css'
import Clock from "./module/Clock";

const DriverPage = () => {
    return (
        <Wrapper/>
    )
}

const Wrapper = () => {
    const buttonContentAndId = [["编辑个人资料", "profile_form"], ["查看当前收益", "benefit_form"], ["我要申诉", "complain_form"]]
    return (
        <section id={"wrapper"}>
            <PersonInfor userName={"王师傅"} authentication={"已完成司机认证"} buttonNames={buttonContentAndId}/>
            <DriverBoard/>
        </section>
    )
}

const DriverBoard = () => {
    return (
        <div className={"MainBoard"}>
            <ul className={"ButtonFamily"}>
                <li>
                    <button className={"BButton"}>加入运力池</button>
                </li>
                <li>
                    <button className={"BButton"}>报告错误信息</button>
                </li>
                <li>
                    <button className={"BButton"}>查询已完成订单</button>
                </li>
                <li>
                    <button className={"BButton"}>退出运力池</button>
                </li>
            </ul>
            <div className={"basicInfo"}>
                <Clock/>
                <ul>
                    <li>
                        <label>车辆号：</label>
                        <input disabled={true} value={"湘A6B2A"}/>
                    </li>
                    <li>
                        <label>当前正在处理的订单号：</label>
                        <input disabled={true} value={"45216"}/>
                    </li>
                    <li>
                        <label>系统下一条分配的订单号：</label>
                        <input disabled={true} value={"78945"}/>
                        <button>查看详情</button>
                    </li>
                    <li>
                        <label>当前订单目的地：</label>
                        <input disabled={true} value={"岳麓区清水路三号中南大学"}/>
                    </li>
                    <li>
                        <label>已完成订单数目：</label>
                        <input disabled={true} value={"8"}/>
                        <label>单</label>
                    </li>
                    <li>
                        <label>在线时间：</label>
                        <input disabled={true} value={"10"}/>
                        分钟
                        <button>我要休息</button>
                    </li>
                </ul>
            </div>
            <GodMap/>
        </div>
    )
}

export default DriverPage;