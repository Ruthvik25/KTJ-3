import React from 'react';
import Auxi from './hoc/Auxi';

const summary = (props) => {

    const finalList = Object.keys(props.finalList)
        .map((props, index) => {
            return <li>{props}</li>
        });

    return (
        <Auxi>
            <h3>Students to be added</h3>
            <ul>
                {finalList}
            </ul>
        </Auxi>
    );
};

export default summary;