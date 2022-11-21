import React from 'react'
import PersonInfor from "./module/PersonInfor";
import GodMap from "./module/Map";
import Clock from "./module/Clock";
import ControlButton from './module/forms/buttons/ControlButton';

const SupplierPage= () => {
    return (
        <Wrapper/>
    )
}

const Wrapper = () => {
    const buttonContentAndId = [["编辑个人资料", "profile_form"], ["查看历史订单", ""], ["我要申诉", "complain_form"]];
    return (
        <section id={"wrapper"}>
            <PersonInfor userName={"惠利超市"} authentication={"已完成货源认证"} buttonNames={buttonContentAndId}/>
            <SupplierBoard/>
        </section>
    )
}

const SupplierBoard = () => {
 return (
     <div className={"MainBoard"}>
         <ul className={"ButtonFamily"}>
                <ControlButton buttonContent='提交订单' buttonId='submit_order_form'/>
                <ControlButton buttonContent='查看订单历史' buttonId=''/>
                <ControlButton buttonContent='当前订单队列' buttonId=''/>
            </ul>
            <div className={"basicInfo"}>
                <Clock/>
                <ul>
                    <li>
                        <label>当前订单队首：</label>
                        <input disabled={true} value={"45216"}/>
                    </li>
                    <li>
                        <label>接收订单的货车号：</label>
                        <input disabled={true} value={"78945"}/>
                        <button>查看详情</button>
                    </li>
                    <li>
                        <label>预分配的货车号：</label>
                        <input disabled={true} value={"湘A6B2A"}/>
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
                        <label>等待完成订单数目：</label>
                        <input disabled={true} value={"7"}/>
                        <label>单</label>
                    </li>
                </ul>
            </div>
            <GodMap/>
     </div>
 )
}

export default SupplierPage;