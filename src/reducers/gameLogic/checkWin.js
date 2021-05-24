// Check to see if someone has won by checking if their opponent has zero checkers left
const checkWin = (locations) => {
    if (!locations.includes("Blue") && !locations.includes("Blue King")) {
        return "Black";
    } else if (!locations.includes("Black") && !locations.includes("Black King")) {
        return "Blue";
    }
    return null;
}

export default checkWin;