import { Score } from './Score.js';

const postScore = async (user, score) => {
  const newScore = new Score(user, score);
  try {
    return await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/iY1b10i36owa57OM6eVR/scores/', {
      method: 'POST',
      body: JSON.stringify(newScore),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => json);
  } catch (e) {
    return null;
  }
};

export { postScore as default };
