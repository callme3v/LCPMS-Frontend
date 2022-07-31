import React from "react";
import {HashRouter as Router, Route, Routes} from "react-router-dom"
import TenantPage from "./component/tenant/TenantPage.jsx";
import LoginPage from "./component/login/LoginPage.jsx";
import PricingPage from "./component/pricing/PricingPage.jsx";
import EmployeePage from "./component/employee/EmployeePage.js";
import ComplaintPage from "./component/complaint/ComplaintPage.jsx";
import AccountPage from "./component/account/AccountPage.jsx";
import Header from "./component/header/Header.jsx";
import Dashboard from "./component/dashboard/Dashboard.jsx";
import Footer from "./component/footer/Footer.jsx";
import "./style.css"
import Gallery from "./component/gallery/Gallery.jsx";
import Navbar from "./component/navbar/Navbar.jsx";
import Panela from "./component/panel/Panela.jsx";
import Panelb from "./component/panel/Panelb.jsx";

export const App = () => {
        return (
            <Router>
                <div className="container-fluid" style={{backgroundColor:"#EEEEEE"}}>
                    <div className="row">
                        <div id="nav-col" className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                            <Navbar/>
                        </div>
                        <div id="main-col" className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                            <div id="main-row" className="row">
                                <div id="header" className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <Header/>
                                </div>
                                <div id="main" className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <main>
                                        <div id="main-row" className="row">
                                            <div id="panel-1"
                                                 className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                            </div>
                                            <div id="panel-2"
                                                 className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <Panelb/>
                                            </div>
                                            <div id="panel-3"
                                                 className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">

                                                <Panela/>
                                            </div>
                                            <Routes>
                                            </Routes>
                                        </div>
                                    </main>
                                </div>
                                <div id="footer" className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <Footer/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Router>
        );
    }
;

{/*<Route path="/login" element={<LoginPage/>} exact/>*/
}
{/*<Route path="/" element={<Dashboard/>}/>*/
}
{/*<Route path="/tenant" element={<TenantPage/>}/>*/
}
{/*<Route path="/employee" element={<EmployeePage/>}/>*/
}
{/*<Route path="/pricing" element={<PricingPage/>}/>*/
}
{/*<Route path="/complaint" element={<ComplaintPage/>}/>*/
}
{/*<Route path="/account" element={<AccountPage/>}/>*/
}
