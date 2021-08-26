// Generate an array where value = index and shuffle it

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const getRandomSquarePermutation = () => {
  let squares = new Array(64).fill(1).map((j,k) => {return k});
  return shuffleArray(squares);
};

export default getRandomSquarePermutation;
