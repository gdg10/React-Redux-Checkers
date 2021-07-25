import React from 'react';
import { connect } from 'react-redux'

function UserMessage(props) {

    var message = genMessage(props.seq);    //determine message shown to user from game state
    return (
        <div style={style0}>
                <h3 style={style1}>{message}</h3>
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
    fontFamily: 'Titillium',
    display: 'inlineBlock',
}

const genMessage = function (sequence) { 
    if (sequence === 0) {
        return "It is your turn";
    } else if (sequence === 1) {
        return "It is your turn";
    } else if (sequence === 2) {
        return "It is the CPU's turn";
    } else if (sequence === 3) {
        return "Congratulations, you beat the CPU! Great work.";
    } else if (sequence === 4) {
        return "You lost to the CPU. Try again.";
    }
}

const mapStateToProps = function (state) {
    return {
        seq: state.seq,
    }
}

export default connect(mapStateToProps)(UserMessage);