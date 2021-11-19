import Leaderboard from './Leaderboard.js';

const getBoard = async () => {
  try {
    return await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/iY1b10i36owa57OM6eVR/scores/')
      .then((response) => response.json())
      .then((json) => {
        Leaderboard.showBoard(json.result);
      });
  } catch (e) {
    return null;
  }
};

export { getBoard as default };
