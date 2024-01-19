// components/Navbar.js
import React from 'react';

const teamLogos = {
    Liverpool: '/static/liverpool-logo-crop.png',
    Chelsea: '/static/chelsea-logo.png',
    "Manchester United": '/static/manchester-united-logo-crop.png',
    Arsenal: '/static/arsenal-logo.png',
};




const Navbar = ({ team }) => {
    const logo = teamLogos[team] || '/static/liverpool-logo-crop.png'; 

    return (
        <nav className={`team-${team}`}>
            <img className="nav--logo" src="/static/pitch-pulse.png"/>
            <h1 className="nav--title">PitchPulse</h1>
            <h2 className="nav--team">{team} FC</h2>
            <img className="nav--team--logo" src={logo}/>
        </nav>
    );
};

export default Navbar;
