//functional componet Square.js

import React from 'react';
import Checker from "./Checker";
import { connect } from 'react-redux';
import { sqrClick } from "../actions";
import { useDispatch } from 'react-redux';

function Square(props) {  // Generate alternating colored squares; if clicked dispatch a SQR_CLCK action

  const dispatch = useDispatch();

  if (props.locations[props.id] === null) {
    return (<div onClick={() => dispatch(sqrClick(props.id))} className={props.color} key={props.id}></div>);
  }

  return (<div onClick={() => dispatch(sqrClick(props.id))} className={props.color} key={props.id}><Checker color={props.locations[props.id]} /></div>);
}

const mapStateToProps = function (state) {
  return {
    locations: state.chckrLocations,
  }
}

export default connect(mapStateToProps)(Square);