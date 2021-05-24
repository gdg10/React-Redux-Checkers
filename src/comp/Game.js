//functional component Game.js

import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { triggerCPU } from "../actions";
import Board from "./Board";
import React from 'react';
import SideBar from "./SideBar";
import Version from "./Version";

function Game(props) {

    // If its the CPU's turn, wait 1 second, and then dispatch a CPU move
    const dispatch = useDispatch();
    if (props.seq === 2) {
        window.setTimeout(function () { dispatch(triggerCPU()) }, 1000);
    }

    return (
        <React.Fragment>
            <SideBar />
            <Board />
            <Version />
        </React.Fragment>
    );
}

const mapStateToProps = function (state) {
    return {
        seq: state.seq,
    }
}

export default connect(mapStateToProps)(Game);