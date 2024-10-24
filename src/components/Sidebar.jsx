import React from 'react';
import '../components/Sidebar.css';
import pf from '../assets/pf.png';

function Sidebar() {
    return (
        <div>
            <section className="left">
            <center>
                <div className="top">
                <div id="image">
                    <img src={pf} alt="Profile Picture"  />
                </div>
                <div className="name"><p>Infinitech</p></div>
            </div></center>
            <div className="menu-item first"><a href="#graph">
                <div className="icon commondash"><i className="fa-solid fa-list"></i></div>
                <div className="caption commondash">DASHBOARD</div></a>
            </div>
            <div className="menu-item second"><a href="#art">
                <div className="icon commondash"><i className="fa-solid fa-tags"></i></div>
                <div className="caption commondash">DONATIONS</div></a>
            </div>
            <div className="menu-item third"><a href="#userinteraction">
                <div className="icon commondash"><i className="fa-solid fa-user"></i></div>
                <div className="caption commondash">USERS</div></a>
            </div>
            <div className="menu-item fourth"><a href="#schedule">
                <div className="icon commondash"><i className="fa-regular fa-calendar-days"></i></div>
                <div className="caption commondash">CONTACT</div></a>
            </div>
            </section>
        </div>
    );
}

export default Sidebar;