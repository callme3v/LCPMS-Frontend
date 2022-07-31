import React from "react";
import {faArrowLeft, faScrewdriverWrench} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Panelb = () => {
    return (
        <>
            <div className="panelb">
                <div className="panelb-header">
                    <p><span className="panelb-header-arrears">ARREARS</span>
                        <span className="panelb-header-tenancy">TENANCY</span>
                    <span className="panelb-header-contact"><FontAwesomeIcon icon={faArrowLeft} style={{color:"red", marginRight:"5px"}}/>CONTACT</span></p></div>

            </div>
        </>
)
}


export default Panelb