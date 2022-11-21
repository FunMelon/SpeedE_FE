import React from 'react'
import PersonInfor from "./module/PersonInfor";
import GodMap from "./module/Map";
import Clock from "./module/Clock";

const AdminPage = () => {
    return (
        <Wrapper/>
    )
}

const Wrapper = () => {
    const buttonContentAndId = [["编辑个人资料"]]
    return (
        <section id={"wrapper"}>
            <PersonInfor userName={"管理员三号"} authentication={"已完成系统安全校验"}
                         buttonNames={buttonContentAndId}/>
            <AdminBoard/>
        </section>
    )
}

const AdminBoard = () => {
    return (
        <div className={"MainBoard"}>
            <ul className={"ButtonFamily"}>
                <li>
                    <button className={"BButton"}>处理审核申诉</button>
                </li>
                <li>
                    <button className={"BButton"}>查询在线运力</button>
                </li>
                <li>
                    <button className={"BButton"}>查询订单池</button>
                </li>
                <li>
                    <button className={"BButton"}>查询在线地图</button>
                </li>
            </ul>
            <div className={"basicInfo"}>
                <Clock/>
                <ul>
                    <li>
                        <label>总运力</label>
                        <input disabled={true} value={"35000"}/>
                        kg
                    </li>
                    <li>
                        <label>运力使用情况</label>
                        <input disabled={true} value={"81%"}/>
                    </li>
                    <li>
                        <label>空载率</label>
                        <input disabled={true} value={"7%"}/>
                    </li>
                    <li>
                        <label>当前在线车辆总数</label>
                        <input disabled={true} value={"150"}/>
                        辆
                    </li>
                    <li>
                        <label>大型货车: </label>
                        <input disabled={true} value={"12"}/>
                        辆
                    </li>
                    <li>
                        <label>中型货车: </label>
                        <input disabled={true} value={"101"}/>
                        辆
                    </li>
                    <li>
                        <label>小型货车: </label>
                        <input disabled={true} value={"47"}/>
                        辆
                    </li>
                </ul>
            </div>
            <GodMap/>
        </div>
    )
}

export default AdminPage;