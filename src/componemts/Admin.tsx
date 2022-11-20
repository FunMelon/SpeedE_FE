import React from 'react'
import PersonInfor from "./module/PersonInfor";

const AdminPage= () => {
    return (
        <Wrapper/>
    )
}

const Wrapper = () => {
    const buttonContentAndId = [["编辑个人资料"]]
    return (
        <section id={"wrapper"}>
            <PersonInfor userName={"管理员三号"} authentication={"已完成系统安全校验"} buttonNames={buttonContentAndId}/>
            <AdminBoard/>
        </section>
    )
}

const AdminBoard = () => {
    return (
        <div className={"MainBoard"}>
            <ul className={"ButtonFamily"}>
                <li>
                    <button className={"BButton"}>审核申诉</button>
                </li>
                <li>
                    <button className={"BButton"}>查询在线运力</button>
                </li>
                <li>
                    <button className={"BButton"}>查询订单池</button>
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
        </div>
    )
}
export default AdminPage;