// functional component Board.js

import React from "react";
import { connect } from "react-redux";
import Square from "./Square";

function Board(props) {
  //build an array of squares to be rendered. Dynamically determine:
  //  - sqaure color
  //  - if there is a checker present

  let sqrs = [];
  for (let i = 63; i >= 0; i--) {
    if (props.highlighted.includes(i)) {
      sqrs[i] = <Square color="selected_square" key={i} id={i} />;
    } else {
      sqrs[i] = (
        <Square
          color={
            (i + Math.floor(i / 8)) % 2 === 0 ? "white_square" : "black_square"
          }
          key={i}
          id={i}
        />
      );
    }
  }

  return (
    <div id="chessboard" style={chessStyle} className="centered">
      {sqrs}
    </div>
  );
}

const chessStyle = {
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
};

const mapStateToProps = function (state) {
  return {
    highlighted: state.highlighted,
  };
};

export default connect(mapStateToProps)(Board);
