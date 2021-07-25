import React from 'react';
import ScoreBoard from "./ScoreBoard";
import Header from "./Header";
import UserMessage from "./UserMessage";
import ResetButton from './ResetButton';
import About from './About';
// import Stopwatch from './Stopwatch'
import '../App.css';


function SideBar(props) {

    const SideBarStyle = {
        padding: '5px 5px 5px 5px',
        width: '225px',
    };

    return (
        <div style={SideBarStyle} className="sidebar">
            <Header key='1' />
            <UserMessage key='2' />
            <ScoreBoard key='3' />
            {/* <Stopwatch/> */}
            <ResetButton key='4' />
            <About key='5' />
        </div>
    )

}

export default SideBar;