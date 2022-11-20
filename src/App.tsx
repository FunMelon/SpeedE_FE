import React from 'react';
import './style/App.css';
import './style/Login.css'

import {Route, Link, BrowserRouter, Routes} from "react-router-dom";
import HomePage from './componemts/Home';
import DriverPage from './componemts/Driver';
import SupplierPage from "./componemts/Supplier";
import AdminPage from "./componemts/Admin";
import AboutPage from "./componemts/About";

const App = () => {
    return (
        <div className={"App"}>
            <BrowserRouter>
                <ul id={"headNav"}>
                    <li><Link to={'/'}>首页</Link></li>
                    <li><Link to={'/driver'}>司机</Link></li>
                    <li><Link to={'/supplier'}>货主</Link></li>
                    <li><Link to={'/admin'}>管理员</Link></li>
                    <li><Link to={'/about'}>关于</Link></li>
                </ul>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/driver/'} element={<DriverPage/>}/>
                    <Route path={'/supplier/'} element={<SupplierPage/>}/>
                    <Route path={'/admin/'} element={<AdminPage/>}/>
                    <Route path={'/about/'} element={<AboutPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
