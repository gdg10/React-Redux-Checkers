import React from "react";
import { useDispatch } from "react-redux";
import { reset } from "../actions";

function ResetButton(props) {
  const dispatch = useDispatch();
  return (
    <div style={style0}>
      <button
        onClick={function () {
          dispatch(reset());
        }}
        style={buttonStyle}
      >
        New Game
      </button>
    </div>
  );
}

const buttonStyle = {
  color: "white",
  fontFamily: "Titillium",
  display: "inlineBlock",
  width: "160px",
  height: "45px",
  borderRadius: "5px",
  outline: "none",
  backgroundColor: "#DC9623",
  fontSize: "16px",
  margin: "20px 20px 20px 20px",
};

const style0 = {
  width: "200px",
  backgroundColor: "white",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  border: "2px solid white",
  borderRadius: "5px",
  textAlign: "center",
  margin: "10px",
};

export default ResetButton;
