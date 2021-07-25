import stateEval from "./stateEvaluate";

const initialState = {
  chckrLocations: [
    null,
    "Black",
    null,
    "Black",
    null,
    "Black",
    null,
    "Black",
    "Black",
    null,
    "Black",
    null,
    "Black",
    null,
    "Black",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "Blue",
    null,
    "Blue",
    null,
    "Blue",
    null,
    "Blue",
    "Blue",
    null,
    "Blue",
    null,
    "Blue",
    null,
    "Blue",
    null,
  ],
  highlighted: [],
  possibleJumps: [],
  selSq: null,
  selChk: null,
  turn: "Blue",
  seq: 0,
};

const allReducers = (state = initialState, action) => {
  switch (action.type) {
    case "SQR_CLICK":
      return stateEval(state, action);
    case "TRIGGER_CPU":
      return stateEval(state, action);
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export default allReducers;
