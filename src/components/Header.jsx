import React from 'react';
import './Header.css';
import logo from '../assets/logo.png';
function Header() {
    return (
        <div>
            <header className="header">
                <img src={logo} alt="logo" className="logo" />
                <div>
                    <h1>InfiniTech</h1>
                </div>
            </header>
        </div>
    );
}

export default Header; 