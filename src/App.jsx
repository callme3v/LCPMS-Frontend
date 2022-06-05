import React from "react";
import {HashRouter as Router, Route, Routes} from "react-router-dom"
import TenantPage from "./component/tenant/TenantPage.jsx";
import LoginPage from "./component/login/LoginPage.jsx";
import PricingPage from "./component/pricing/PricingPage.jsx";
import EmployeePage from "./component/employee/EmployeePage.js";
import ComplaintPage from "./component/complaint/ComplaintPage.jsx";
import AccountPage from "./component/account/AccountPage.jsx";
import Header from "./component/header/Header.jsx";


export const App = () => {
        return (
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<LoginPage/>} exact/>
                    <Route path="/tenant" element={<TenantPage/>}/>
                    <Route path="/employee" element={<EmployeePage/>}/>
                    <Route path="/pricing" element={<PricingPage/>}/>
                    <Route path="/complaint" element={<ComplaintPage/>}/>
                    <Route path="/account" element={<AccountPage/>}/>
                </Routes>
            </Router>
        );
    }
;


