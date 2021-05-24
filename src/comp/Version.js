import React from 'react';

function Version (props){
    return (<h5 style={versionStyle}>v 2.0</h5>)
}

const versionStyle = {
    color: 'darkgrey',
    float: 'left',
    fontFamily: 'Titillium-Light',
    margin: "20px"
}

export default Version;