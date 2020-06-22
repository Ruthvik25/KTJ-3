import React from 'react';
import './Subject.css';

const navItems = (props) => (
    <ul id="Subjects-ul">
        <li className="Subjects-li"> {props.name} </li>
        <li className="Subjects-li"> Credits : {props.credit} </li>
        <li className="Subjects-li"> Semester : {props.semester} </li>
        <li className="Subjects-li"><button id="Part-p" onClick={props.added}> Participants Page </button></li>
    </ul>
);

export default navItems;