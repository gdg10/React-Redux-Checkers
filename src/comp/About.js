import React from 'react';

function About(props) {
    return (
        <div style={style0}>
                <h4 style={style1}>built by Garrett Grube <br></br><a href="https://github.com/gdg10/React-Redux-Checkers">show me the code</a></h4>
        </div>
    )
}

const style0 ={
    width: '200px',
    hieght : '600px',
    backgroundColor: 'white',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    border: '2px solid white',
    borderRadius: '5px',
    textAlign: 'center',
    margin: '10px',
}

const style1 = {
    color : 'darkslategray',
    fontFamily: 'Titillium-Light',
    display: 'inlineBlock',
}

export default About