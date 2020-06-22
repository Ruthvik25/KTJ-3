import React from 'react';
import './NavItems.css';

const navItems = () => (
    <ul id="NavItems">
        <li className="NavItem"><a href="#intro-page">Home</a></li>
        <li className="NavItem"><a href="#subject-page">Subjects</a></li>
        <li className="NavItem"><a href="#select-sub">Participants</a></li>
    </ul>
);

export default navItems;