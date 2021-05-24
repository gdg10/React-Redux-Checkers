import React, { Component } from "react";

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerOn: false,
      timerStart: 0,
      timerTime: 0
    };
  }

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart
      });
    }, 10);
  };

  componentDidMount(){
    this.startTimer();
  }

  style0 = {
    width: '200px',
    hieght: '600px',
    backgroundColor: 'white',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    border: '2px solid white',
    borderRadius: '5px',
    textAlign: 'center',
    margin: '10px',
  }

  style1 = {
    color: 'darkslategray',
    fontFamily: 'Titillium-Light',
    display: 'inlineBlock',
  }

  render() {
    const { timerTime } = this.state;
    let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
    return (
      <div style={this.style0}>
        <h4 style={this.style1}>{hours} : {minutes} : {seconds} : {centiseconds}</h4>
      </div>
    );
  }
}

export default Stopwatch;
