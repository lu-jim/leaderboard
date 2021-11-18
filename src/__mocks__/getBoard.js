const getBoard = async () => fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/iY1b10i36owa57OM6eVR/scores/')
  .then((response) => response.json())
  .then((json) => json);
export { getBoard as default };
