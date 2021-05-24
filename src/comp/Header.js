import React from 'react';
import { headShake } from 'react-animations'
import Radium, { StyleRoot } from 'radium';

function Header(props) {

    const style0 = {
        width: '200px',
        hieght: '600px',
        backgroundColor: 'teal',
        opacity: '.9',
        border: '2px solid white',
        borderRadius: '5px',
        textAlign: 'center',
        margin: '10px',
    }

    const style2 = {
        color: 'white',
        fontFamily: 'Titillium-Bold',
        fontSize: '30px',
        display: 'inlineBlock'
    }

    const styles = {
        headShake: {
            animation: 'x 1s',
            animationName: Radium.keyframes(headShake, 'headShake')
        }
    }

    return (
        <div style={style0}>
            <StyleRoot>
                <div className="test" style={styles.headShake}>
                    <h1 style={style2}>React-Redux Checkers</h1>
                </div>
            </StyleRoot>
        </div>
    )
}

export default Header;