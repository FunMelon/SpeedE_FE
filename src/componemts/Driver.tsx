import React from 'react'
import PersonInfor from "./module/PersonInfor";
import GodMap from "./module/Map";

const DriverPage = () => {
    return (
        <Wrapper/>
    )
}

const Wrapper = () => {
    return (
        <section id={"wrapper"}>
            <PersonInfor userName="王师傅" authentication="已完成司机认证" />
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