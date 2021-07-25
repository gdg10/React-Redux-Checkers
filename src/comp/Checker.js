//functional component Checker.js

import React from 'react';
import blackChkr from './../icon.png';
import blueChkr from './../icon2.png';
import blackChkrKing from './../icon3.jpg';
import blueChkrKing from './../icon4.jpg';

function Checker(props) {
    let source;                 // Switch on props.color to determine which image to use
    switch (props.color) {
        case 'Blue':
            source = blueChkr;
            break;
        case 'Black':
            source = blackChkr;;
            break;
        case 'Blue King':
            source = blueChkrKing;
            break;
        case 'Black King':
            source = blackChkrKing;
            break;
        default:
            source = null;
            break;
    }
    return (
        <img alt="chckr" height="100%" width="100%" src={source}></img>
    );
}

export default Checker;