import React, { useState } from 'react'
import Web from './Web'
import Mobile from './Mobile'
import { CgMenuRound } from 'react-icons/cg'
import './Header.css';
import Logo from '../Logo';

const Header = () => {
    const [isOpen, setIsOpen] =useState(false);

    return (
        <div className="header">
            <Logo />
            <div className="menu">
                <div className="web-menu"><Web /></div>
                <div className="mobile-menu">
                   <div className="menu-icon" onClick={()=>setIsOpen(!isOpen)}>
                       <CgMenuRound />
                    </div>
                    {isOpen && <Mobile setIsOpen={setIsOpen} isOpen={isOpen} /> }
                </div>
            </div>
        </div>
    );
};

export default Header
