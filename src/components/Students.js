import React from 'react';
import './Students.css';

const students = (props) => {
    return (
        <div id="student">
            <ul className="Students-ul">
                <li className="Stud-li">Name : {props.name}</li>
                <li className="Stud-li">Roll No. : {props.roll}</li>
                <li className="Stud-li"><button id="dlt" onClick={props.delEvent}> Delete </button></li>
            </ul>
        </div>
    )
};

export default students;