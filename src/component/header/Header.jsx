import React from "react"
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <>
            <nav className="navbar-text">
                <NavLink className="m-2" to="/tenant"> Tenant</NavLink>
                <NavLink className="m-2" to="/employee"> Employee</NavLink>
                <NavLink className="m-2" to="/pricing"> Pricing</NavLink>
                <NavLink  className="m-2" to="/complaint">Complaint </NavLink>
                <NavLink className="m-2" to="/account">Account </NavLink>
                <NavLink className="m-2" to="/"> Login/Logout</NavLink>
            </nav>
        </>
    )
}

export default Header