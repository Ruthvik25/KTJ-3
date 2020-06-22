import React from 'react';
import Auxi from './hoc/Auxi';
import Toolbar from './Toolbar';

const layout = ( props ) => (
    <Auxi>
        <Toolbar></Toolbar>
        <main>
            {props.children}
        </main>
    </Auxi>
);

export default layout;