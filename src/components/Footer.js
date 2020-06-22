import React from 'react';
import './Footer.css';
import LOGO from './icons8w.png';

const footer = () => (
    <footer>
        <div>
            <img src={LOGO} alt="LOGO" id="footer-logo"></img>
        </div>
        <p id="footer-p">&copy; Copyright 2020</p>
    </footer>
);

export default footer;