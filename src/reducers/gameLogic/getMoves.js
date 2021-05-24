//returns possible moves thats do not involve jumping another piece
const getMoves = (checker, allCheckers) => {

    let moves = [];

    if (allCheckers[checker] === 'Blue' || allCheckers[checker] === 'Black King' || allCheckers[checker] === 'Blue King') {
        if (Math.floor((checker - 7) / 8) === (Math.floor(checker / 8) - 1) && allCheckers[checker - 7] === null) {
            moves.push(checker - 7);
        }

        if (Math.floor((checker - 9) / 8) === (Math.floor(checker / 8) - 1) && allCheckers[checker - 9] === null) {
            moves.push(checker - 9);
        }
    }

    if (allCheckers[checker] === 'Black' || allCheckers[checker] === 'Blue King' || allCheckers[checker] === 'Black King') {
        if (Math.floor((checker + 7) / 8) === (Math.floor(checker / 8) + 1) && allCheckers[checker + 7] === null) {
            moves.push(checker + 7);
        }

        if (Math.floor((checker + 9) / 8) === (Math.floor(checker / 8) + 1) && allCheckers[checker + 9] === null) {
            moves.push(checker + 9);
        }
    }

    return moves;
}
export default getMoves;