import React from 'react';
import './Toolbar.css';
import NavItems from './NavItems';
import LOGO from './icons8w.png';

const toolbar = () => (
    <header className="Toolbar">
        
        <div>
            <img src={LOGO} alt="LOGO" id="Toolbar-logo"></img>
        </div>
        <nav>
            <NavItems></NavItems>
        </nav>
        
    </header>
);

export default toolbar;