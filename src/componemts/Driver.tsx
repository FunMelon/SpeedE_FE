import React from 'react'
import PersonInfor from "./module/PersonInfor";
import GodMap from "./module/Map";

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
            <GodMap/>
        </div>
    )
}

export default DriverPage;