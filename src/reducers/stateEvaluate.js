import getMoves from "./gameLogic/getMoves";
import getJump from "./gameLogic/getJump";
import checkWin from "./gameLogic/checkWin";
import getRandomSquarePermutation from "./gameLogic/getRandomSquarePermutation";

// Case 0 - Waiting for Human checker selection; then show selecion
// Case 1 - Waiting for Human jump/move selection; then show move/jump
// Case 2 - Calculate CPU move; then show CPU move
// Case 3 - Human Vicory
// Case 4 - CPU Victory

function stateEval(state, action) {
  let newState = Object.assign({}, state);
  switch (state.seq) {
    case 0:
      if (
        state.chckrLocations[action.payload] === state.turn ||
        state.chckrLocations[action.payload] === state.turn + " King"
      ) {
        //if its your turn and you select one of your own checkers
        newState.highlighted = [];
        newState.highlighted.push(action.payload); //highlight selected checker
        newState.highlighted.push(
          ...getMoves(action.payload, state.chckrLocations)
        ); //highlight its moves

        let j = [];
        j = getJump(
          state.chckrLocations[action.payload],
          action.payload,
          state.chckrLocations,
          j
        );
        for (let i = 0; i < j.length; i++) {
          newState.highlighted.push(j[i].jumpTo);
        }
        newState.possibleJumps = j;

        newState.selChk = action.payload; // remember the checker
        newState.seq = 1; // change play seq to 1
      }
      return newState;
    case 1:
      if (
        state.chckrLocations[action.payload] === state.turn ||
        state.chckrLocations[action.payload] === state.turn + " King"
      ) {
        //if you reselect a one of your own checkers
        newState.highlighted = [];
        newState.highlighted.push(action.payload); //highlight selected checker
        newState.highlighted.push(
          ...getMoves(action.payload, state.chckrLocations)
        ); //highlight its moves

        let j = [];
        j = getJump(
          state.chckrLocations[action.payload],
          action.payload,
          state.chckrLocations,
          j
        );
        for (let i = 0; i < j.length; i++) {
          newState.highlighted.push(j[i].jumpTo);
        }
        newState.possibleJumps = j;

        newState.selChk = action.payload; // remember the checker

        newState.seq = 1; // change play seq to 1
      } else if (state.highlighted.includes(action.payload)) {
        //if its your turn, you've select a valid checker already, and you've selected a valid square to move to

        //move checker to new location
        let temp = Object.assign([], state.chckrLocations);
        temp[action.payload] = state.chckrLocations[state.selChk];
        temp[state.selChk] = null;

        //promote if needed
        if (Math.floor(action.payload / 8) === 0) {
          // console.log("Promotion");
          temp[action.payload] = "Blue King";
        }

        //remove enemy checker
        for (let i = 0; i < state.possibleJumps.length; i++) {
          if (state.possibleJumps[i].jumpTo === action.payload) {
            // console.log("Remove the checker on: " + state.possibleJumps[i].casualty)
            temp[state.possibleJumps[i].casualty] = null;
            break;
          } else {
            // console.log(state.possibleJumps[i].jumpTo + " does not match payload " + action.payload);
          }
        }
        newState.chckrLocations = [];
        newState.chckrLocations = temp;
        newState.selSq = []; // unselect
        newState.selChk = null; // unhighlight the checker
        newState.highlighted = []; // unhighlight all squares
        newState.possibleJumps = [];
        newState.turn = "Black";

        //check win
        if (checkWin(newState.chckrLocations) === null) {
          newState.seq = 2; // change play seq to 2
        } else {
          newState.seq = 3; // We have a winner!
        }
      }
      return newState;
    case 2: //calc CPU's move then send back to state 0;
      //first try to jump any peice.
      let k = [];
      let tempChecker = null;
      const randomSquarePermutation = getRandomSquarePermutation();
      for (let i = 0; i < 64; i++) {
        tempChecker = state.chckrLocations[randomSquarePermutation[i]];
        if (tempChecker === "Black" || tempChecker === "Black King") {
          k = getJump(tempChecker, randomSquarePermutation[i], state.chckrLocations, k);
          if (k.length > 0) {
            let temp = Object.assign([], state.chckrLocations);
            temp[k[0].jumpTo] = tempChecker; //move checker to new location
            temp[randomSquarePermutation[i]] = null;
            temp[k[0].casualty] = null; //remove enemy checker

            // check for double jump
            let doubleJump = [];
            doubleJump = getJump(tempChecker, k[0].jumpTo, temp, doubleJump);
            if (doubleJump.length > 0){
              temp[doubleJump[0].jumpTo] = tempChecker; //move checker to new location
              temp[k[0].jumpTo] = null;
              temp[doubleJump[0].casualty] = null; //remove enemy checker
            }

            //promote if needed
            if (Math.floor(k[0].jumpTo / 8) === 7) {
              // console.log("Promotion");
              temp[k[0].jumpTo] = "Black King";
            }

            newState.chckrLocations = [];
            newState.chckrLocations = temp;
            newState.turn = "Blue";

            //check win
            if (checkWin(newState.chckrLocations) === null) {
              newState.seq = 0; // change play seq to 2
            } else {
              newState.seq = 4; // We have a winner! and its the CPU
            }

            return newState; //break
          }
        }
      }
      // console.log("CPU couldn't find a jump");

      //if no jumps available, move any peice
      k = [];
      tempChecker = null;
      // console.log("CPU attempting to find a move");
      for (let i = 0; i < 64; i++) {
        tempChecker = state.chckrLocations[randomSquarePermutation[i]];
        // console.log(i);
        if (tempChecker === "Black" || tempChecker === "Black King") {
          k = getMoves(randomSquarePermutation[i], state.chckrLocations);
          // console.log("k: " + k);
          if (k.length > 0) {
            let temp = Object.assign([], state.chckrLocations);
            temp[k[0]] = tempChecker; //move checker to new location
            temp[randomSquarePermutation[i]] = null;

            //promote if needed
            if (Math.floor(k[0] / 8) === 7) {
              // console.log("Promotion");
              temp[k[0]] = "Black King";
            }

            newState.chckrLocations = [];
            newState.chckrLocations = temp;
            newState.turn = "Blue";
            newState.seq = 0; // change play seq to 2

            return newState; //break
          }
        }
      }
      // console.log("CPU couldn't find a move");
      return newState;
    case 3: //winner
      return newState;
    default:
      return newState;
  }
}

export default stateEval;
