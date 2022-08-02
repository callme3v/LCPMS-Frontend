import React from "react"
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {faCircleQuestion} from '@fortawesome/free-solid-svg-icons'
import {faPrint} from '@fortawesome/free-solid-svg-icons'
import {faScrewdriverWrench} from '@fortawesome/free-solid-svg-icons'
import {faBook} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



const Header = () => {

    return (
        <>
            <header>
<div className="row">
    <div id="header-tab-row-1"  className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
        <button className="same-bg-color lg">PROPERTY</button>
        <button className="same-bg-color  lg">CONTACT</button>
        <button className="same-bg-color  lg">TENANCY</button>
        <button className="same-bg-color  lg">PROGRESSION</button>
        <button className="same-bg-color  lg">ACCOUNT</button>
        <button className="same-bg-color  lg">DIARY</button>
        <button className="same-bg-color  lg">REPORTING</button>
        <button className="diff-bg-color lg"><FontAwesomeIcon icon={faPrint}/>PRINT</button>
        <button className="same-bg-color lg"><FontAwesomeIcon icon={faScrewdriverWrench}/>TOOLS</button>
        <button className="diff2-bg-color lg"><FontAwesomeIcon icon={faBook}/>GUIDE</button>
        <button className="diff2-bg-color lg"><FontAwesomeIcon icon={faCircleQuestion}/>HELP</button>


    </div>
    <div id="header-tab-row-2" className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
        <div className="row">
            <div id="header-tab-row-1-column-1" className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 ">

            </div>
            <div id="header-tab-row-1-column-2" className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
                <form className="d-none d-md-flex input-group w-auto my-auto">
                    <input type="search" className="form-control rounded"/>
                    <span className="input-group-text border-0" style={{backgroundColor: "#53A93F"}}><FontAwesomeIcon icon={faSearch}/></span>
                </form>
            </div>
            <div id="header-tab-row-1-column-3" className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 ">

            </div>
        </div>
    </div>

</div>
            </header>

        </>
    )
}


export default Header






































//
// <header>
// <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light fixed-top">
//
//
//     <div className="container-fluid">
//
//     <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#sidebarMenu"
// aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
//     <FontAwesomeIcon icon={faCoffee}/>
// </button>
//
//
//
//
//
// <a className="navbar-brand" href="#">
// <img src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp" height="25" alt="MDB Logo"
// loading="lazy" />
// </a>
//
//
//
//
//
//
//
//
//
//
//
// <ul className="navbar-nav ms-auto d-flex flex-row">
//
//
//     <li className="nav-item dropdown">
//         <a className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink"
//            role="button" data-mdb-toggle="dropdown" aria-expanded="false">
//             <FontAwesomeIcon icon={faCoffee}/>
//             <span className="badge rounded-pill badge-notification bg-danger">1</span>
//         </a>
//         <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
//             <li>
//                 <a className="dropdown-item" href="#">Some news</a>
//             </li>
//             <li>
//                 <a className="dropdown-item" href="#">Another news</a>
//             </li>
//             <li>
//                 <a className="dropdown-item" href="#">Something else here</a>
//             </li>
//         </ul>
//     </li>
//
//
//             <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center" href="#"
//                    id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
//                     <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp" className="rounded-circle"
//                          height="22" alt="Avatar" loading="lazy" />
//                 </a>
//                 <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
//                     <li>
//                         <a className="dropdown-item" href="#">My profile</a>
//                     </li>
//                     <li>
//                         <a className="dropdown-item" href="#">Settings</a>
//                     </li>
//                     <li>
//                         <a className="dropdown-item" href="#">Logout</a>
//                     </li>
//                 </ul>
//             </li>
//         </ul>
//     </li>
// </ul>
// </div>
//
// </nav>
// </header>