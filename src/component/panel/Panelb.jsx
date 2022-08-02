import React from "react";
import {faArrowLeft, faScrewdriverWrench, faTriangleExclamation, faBars} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Example from "../charts/Chart1.jsx";


const Panelb = () => {
    return (
        <>
            <div className="panelb">
                <div className="panelb-header">
                    <p><span className="panelb-header-arrears"><FontAwesomeIcon icon={faTriangleExclamation} style={{
                        color: "red",
                        marginRight: "5px"
                    }}/>ARREARS</span>
                        <span className="panelb-header-tenancy">TENANCY</span>
                        <span className="panelb-header-contact"><FontAwesomeIcon icon={faArrowLeft} style={{
                            color: "red",
                            marginRight: "5px"
                        }}/>CONTACT</span></p>
                </div>
                <Example/>
                <div>
                    <div className="panelb-footer">
                        <button className="lg panelb-btn"> <FontAwesomeIcon icon={faBars} /> Batch Receipts</button>

                    </div>
                </div>

            </div>
        </>
    )
}


export default Panelb