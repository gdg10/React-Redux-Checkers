import React, { Component } from "react";
import { connect } from "react-redux";

class ScoreBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hidden: false
        };
    }

    render() {
        return (
            <div style={this.style1}>
                {/* <div>
                    <h3 style={this.style2}>Checkers Remaining</h3>
                </div> */}
                <div>
                    {/* Black remaining Checkers */}
                    <h3 style={this.style2}>CPU Checkers: {this.props.checkers.reduce(this.blackReduce)}</h3>

                </div>
                <div>
                    {/* Blue Remaining Checkers */}
                    <h3 style={this.style2}>Human Checkers: {this.props.checkers.reduce(this.blueReduce)}</h3>
                </div>
            </div>
        )
    }

    //reducer functions to count each sides remaining checkers
    blueReduce = (acc = 0, cur) => { return cur !== null && cur.includes('Blue') ? acc + 1 : acc };
    blackReduce = (acc = 0, cur) => { return cur !== null && cur.includes('Black') ? acc + 1 : acc };

    //styles used by render method
    style1 = {
        margin: '10px',
        border: '2px solid white',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        borderRadius: '5px',
        width: '200px',
        height: '105px',
        textAlign: 'center',
        backgroundColor: 'white',
    }

    style2 = {
        display: 'inlineBlock',
        width: '200px',
        height: '20px',
    }


    style3 = {
        color: 'white',
        fontFamily: 'Titillium-Bold',
        fontSize: '24px',
        display: 'inlineBlock'
    }
}

const mapStateToProps = (state) => {
    return ({
        checkers: state.chckrLocations
    });
}

export default connect(mapStateToProps)(ScoreBoard);