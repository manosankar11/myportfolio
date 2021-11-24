import React from 'react'
import {FcHome,FcContacts,FcStatistics,FcCommandLine} from "react-icons/fc"
import { AiOutlineClose } from "react-icons/ai"
import './Mobile.css'


const Mobile = ({isOpen, setIsOpen}) => {
    return (
        <div className="mobile">
            <div className="close-icon">
                <AiOutlineClose  onClick={() => setIsOpen(!isOpen)}/>
            </div>
            <div className="mobile-options">
            <div className="mobile-option">
                <a href="#about">
               < FcHome className="option-icon" /> Home
                </a>
            </div> 
            <div className="mobile-option">
                <a href="#skills">
                <FcCommandLine /> Skills
                </a>
            </div>
            <div className="mobile-option">
                <a href="#projects">
               <FcStatistics />Projects
                </a>
            </div>
            <div className="mobile-option">
                <a href="#contact">
               <FcContacts /> Contact
                </a>
            </div>
            </div>
        </div>
    )
}

export default Mobile
