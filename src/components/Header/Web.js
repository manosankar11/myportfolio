import React from 'react'
import './Web.css';
import {FcHome,FcContacts,FcStatistics,FcCommandLine} from "react-icons/fc"



const Web = () => {
    return (
        <div className="web">
            <div className="web-option">
                <a href="#about">
               < FcHome className="option-icon" />Home
                </a>
            </div> 
            <div className="web-option">
                <a href="#skills">
                <FcCommandLine />Skills
                </a>
            </div>
            <div className="web-option">
                <a href="#projects">
               <FcStatistics />Projects
                </a>
            </div>
            <div className="web-option">
                <a href="#contact">
               <FcContacts />Contact
                </a>
            </div>
        </div>
    )
}

export default Web
