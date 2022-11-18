import React from 'react';
import './App.css';
import {Route, Link, BrowserRouter, Routes} from "react-router-dom";
import HomePage from './componemts/Home';
import UserPage from './componemts/User';

const App = () => {
    return (
        <div className={"App"}>
            <BrowserRouter>
                <ul id={"headNav"}>
                    <li><Link to={'/'}>首页</Link></li>
                    <li><Link to={'/user'}>用户</Link></li>
                </ul>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/user/'} element={<UserPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
