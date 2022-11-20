import React from 'react'
import PersonInfor from "./module/PersonInfor";
import GodMap from "./module/Map";
import './style/Board.css'

const DriverPage = () => {
    return (
        <Wrapper/>
    )
}

const Wrapper = () => {
    const buttonContentAndId = [["编辑个人资料", "form_wrapper"], ["查看当前收益", ""], ["我要申诉", ""]]
    return (
        <section id={"wrapper"}>
            <PersonInfor userName="王师傅" authentication="已完成司机认证" buttonNames={buttonContentAndId}/>
            <DriverBoard/>
        </section>
    )
}

const DriverBoard = () => {
    return(
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
               <ul>
                   <li>
                       <label>车辆号：</label>
                       <input disabled={true} value={"114514"}/>
                   </li>
                   <li>
                       <label>当前正在处理的订单号：</label>
                       <input disabled={true} value={"1919"}/>
                   </li>
                   <li>
                       <label>系统下一条分配的订单号：</label>
                       <input disabled={true} value={"119"}/>
                       <button>查看详情</button>
                   </li>
                   <li>
                       <label>当前订单目的地：</label>
                       <input disabled={true} value={"田谷区北泽2丁目下北泽"}/>
                   </li>
                   <li>
                       <label>已完成订单数目：</label>
                       <input disabled={true} value={"8"}/>
                       <label>单</label>
                   </li>
                   <li>
                       <label>在线时间：</label>
                       <input disabled={true} value={"10"}/>
                       <label>分钟</label>
                       <button>我要休息</button>
                   </li>
               </ul>
            </div>
            <GodMap/>
        </div>
    )
}

export default DriverPage;