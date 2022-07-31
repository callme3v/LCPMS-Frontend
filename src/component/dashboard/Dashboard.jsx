import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPeopleGroup} from '@fortawesome/free-solid-svg-icons'
import {faHome} from '@fortawesome/free-solid-svg-icons'





const Dashboard = () => {
    return (
        <>
            <div>
                <p className>DASHBOARD</p>
                <div className="row g-3">
                    <div className="cardi col-lg-3 col-md-6 col-sm-12 m-3">
                        <FontAwesomeIcon icon={faHome} size="4x"/><div className="holding"><p><span>8</span>Buildings</p></div>
                    </div>
                    <div className="cardi col-lg-3 col-md-6 col-sm-12 m-3"><FontAwesomeIcon icon={faPeopleGroup} size="4x"/><div className="holding"><p><span>72</span>Tenants</p></div></div>
                    <div className="cardi col-lg-3 col-md-6 col-sm-12 m-3"><FontAwesomeIcon icon={faHome} size="4x"/></div>
                    <div className="cardi col-lg-3 col-md-6 col-sm-12 m-3"><FontAwesomeIcon icon={faHome} size="4x"/></div>
                </div>
            </div>

        </>

    )
}

export default Dashboard