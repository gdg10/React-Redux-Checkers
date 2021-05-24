// Return an array of possible jumps and their casualties
const getJump = (color, checker, allCheckers, jumps) => {
    if (color === 'Blue') {
        if (Math.floor((checker - 14) / 8) === (Math.floor(checker / 8) - 2) && (allCheckers[checker - 7] === "Black" || allCheckers[checker - 7] === "Black King") && allCheckers[checker - 14] === null) {
            jumps.push(
                {
                    jumpTo: checker - 14,
                    casualty: checker - 7
                }
            );
        }

        if (Math.floor((checker - 18) / 8) === (Math.floor(checker / 8) - 2) && (allCheckers[checker - 9] === "Black" || allCheckers[checker - 9] === "Black King") && allCheckers[checker - 18] === null) {
            jumps.push(
                {
                    jumpTo: checker - 18,
                    casualty: checker - 9
                }
            );
        }
    }

    if (color === 'Black') {
        if (Math.floor((checker + 14) / 8) === (Math.floor(checker / 8) + 2) && (allCheckers[checker + 7] === "Blue" || allCheckers[checker + 7] === "Blue King") && allCheckers[checker + 14] === null) {
            jumps.push(
                {
                    jumpTo: checker + 14,
                    casualty: checker + 7
                }
            );
        }

        if (Math.floor((checker + 18) / 8) === (Math.floor(checker / 8) + 2) && (allCheckers[checker + 9] === "Blue" || allCheckers[checker + 9] === "Blue King") && allCheckers[checker + 18] === null) {
            jumps.push(
                {
                    jumpTo: checker + 18,
                    casualty: checker + 9
                }
            );
        }
    }

    if (color === 'Black King') {
        if (Math.floor((checker + 14) / 8) === (Math.floor(checker / 8) + 2) && (allCheckers[checker + 7] === "Blue" || allCheckers[checker + 7] === "Blue King") && allCheckers[checker + 14] === null) {
            jumps.push(
                {
                    jumpTo: checker + 14,
                    casualty: checker + 7
                }
            );
        }

        if (Math.floor((checker + 18) / 8) === (Math.floor(checker / 8) + 2) && (allCheckers[checker + 9] === "Blue" || allCheckers[checker + 9] === "Blue King") && allCheckers[checker + 18] === null) {
            jumps.push(
                {
                    jumpTo: checker + 18,
                    casualty: checker + 9
                }
            );
        }

        if (Math.floor((checker - 14) / 8) === (Math.floor(checker / 8) - 2) && (allCheckers[checker - 7] === "Blue" || allCheckers[checker - 7] === "Blue King") && allCheckers[checker - 14] === null) {
            jumps.push(
                {
                    jumpTo: checker - 14,
                    casualty: checker - 7
                }
            );
        }

        if (Math.floor((checker - 18) / 8) === (Math.floor(checker / 8) - 2) && (allCheckers[checker - 9] === "Blue" || allCheckers[checker - 9] === "Blue King") && allCheckers[checker - 18] === null) {
            jumps.push(
                {
                    jumpTo: checker - 18,
                    casualty: checker - 9
                }
            );
        }
    }

    if (color === 'Blue King') {

        if (Math.floor((checker - 14) / 8) === (Math.floor(checker / 8) - 2) && (allCheckers[checker - 7] === "Black" || allCheckers[checker - 7] === "Black King") && allCheckers[checker - 14] === null) {
            jumps.push(
                {
                    jumpTo: checker - 14,
                    casualty: checker - 7
                }
            );
        }
        if (Math.floor((checker - 18) / 8) === (Math.floor(checker / 8) - 2) && (allCheckers[checker - 9] === "Black" || allCheckers[checker - 9] === "Black King") && allCheckers[checker - 18] === null) {
            jumps.push(
                {
                    jumpTo: checker - 18,
                    casualty: checker - 9
                }
            );
        }
        if (Math.floor((checker + 14) / 8) === (Math.floor(checker / 8) + 2) && (allCheckers[checker + 7] === "Black" || allCheckers[checker + 7] === "Black King") && allCheckers[checker + 14] === null) {
            jumps.push(
                {
                    jumpTo: checker + 14,
                    casualty: checker + 7
                }
            );
        }

        if (Math.floor((checker + 18) / 8) === (Math.floor(checker / 8) + 2) && (allCheckers[checker + 9] === "Black" || allCheckers[checker + 9] === "Black King") && allCheckers[checker + 18] === null) {
            jumps.push(
                {
                    jumpTo: checker + 18,
                    casualty: checker + 9
                }
            );
        }
    }

    return jumps;
}

export default getJump;

//recursive funtion that can calculate double jumps TODO

// export default function getJumps(color, checker, allCheckers, jumps, level) {
//     "Recursion Level: " + level);
//     if (color === 'Blue') {
//         );
//         if (Math.floor((checker - 14) / 8) !== Math.floor(checker / 8) && allCheckers[checker - 7] === "Black" && allCheckers[checker - 14] === null) {
//             jumps.push(checker - 14);
//             "Jump right found");
//             "recursive call at: " + (checker - 14));
//             "jumps: " + jumps);
//             return getJumps(color, checker - 14, allCheckers, jumps, level + 1);
//         } else {
//             "No jump right found");
//         }

//         if (Math.floor((checker - 18) / 8) !== Math.floor(checker / 8) && allCheckers[checker - 9] === "Black" && allCheckers[checker - 18] === null) {
//             jumps.push(checker - 18);
//             "Jump left found");
//             "recursive call at: " + (checker - 18));
//             "jumps: " + jumps);
//             return getJumps(color, checker - 18, allCheckers, jumps, level + 1);
//         } else {
//             "No jump left found");
//         }
//         return jumps;
//     }
// }
