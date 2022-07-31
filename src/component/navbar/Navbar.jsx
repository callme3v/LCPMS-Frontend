import React from "react"
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCoffee} from '@fortawesome/free-solid-svg-icons'
import {faGauge} from '@fortawesome/free-solid-svg-icons'
import {faPeopleRoof} from '@fortawesome/free-solid-svg-icons'
import {faCentSign} from '@fortawesome/free-solid-svg-icons'
import {faPersonDigging} from '@fortawesome/free-solid-svg-icons'
import {faMessage} from '@fortawesome/free-solid-svg-icons'
import {faCoins} from '@fortawesome/free-solid-svg-icons'
import {faTools} from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    return (
        <>
            <nav>
                <div className="position-sticky">
                    <div className="list-group list-group-flush mx-3 mt-4">
                        <a className="list-group-item list-group-item-action py-2 ripple active" href="#/"
                           aria-current="true">
                            <FontAwesomeIcon className="me-3" icon={faGauge} size="1x"/><span className="hide-span">Dashboard</span></a>
                        <a className="list-group-item list-group-item-action py-2 ripple"
                           href="#/tenant"> <FontAwesomeIcon className="me-3" icon={faPeopleRoof} size="1x"/>
                            <span className="hide-span">Tenant</span></a>
                        <a className="list-group-item list-group-item-action py-2 ripple" href="#/pricing">
                            <FontAwesomeIcon className="me-3" icon={faCentSign} size="1x"/>
                            <span className="hide-span">Pricing</span>
                        </a>
                        <a className="list-group-item list-group-item-action py-2 ripple"
                           href="#/employee"> <FontAwesomeIcon className="me-3" icon={faPersonDigging} size="1x" /><span className="hide-span">Employee</span></a>
                        <a className="list-group-item list-group-item-action py-2 ripple"
                           href="#/employee"><FontAwesomeIcon className="me-3" icon={faMessage}/>
                            <span className="hide-span" >Complaint</span></a>
                        <a className="list-group-item list-group-item-action py-2 ripple"
                           href="#/account"> <FontAwesomeIcon className="me-3" icon={faCoins}/><span className="hide-span">Account</span></a>
                        <div><a className="list-group-item list-group-item-action py-2 ripple settings"
                                href="#/login"><FontAwesomeIcon className="me-3" icon={faTools}/> <span className="hide-span">Settings</span></a></div>
                    </div>

                </div>
            </nav>

        </>
    )
}

export default Navbar














