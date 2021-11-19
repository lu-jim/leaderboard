import getBoard from './getBoard.js';
import postScore from './postScore.js';
import clearBoard from './clearBoard.js';
import './styles.css';

const refresh = document.getElementById('refresh');
const scoreForm = document.getElementById('score-form');
const userField = document.getElementById('user');
const scoreField = document.getElementById('score');
const alertField = document.getElementById('submit-alert');

document.addEventListener('DOMContentLoaded', getBoard());
refresh.addEventListener('click', () => {
  clearBoard();
  getBoard();
});

scoreForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (userField.value && scoreField.value) {
    postScore(userField.value, scoreField.value);
    alertField.innerHTML = '';
    userField.value = '';
    scoreField.value = '';
  } else if (!userField && scoreField) alertField.innerHTML = 'Please enter a valid user';
  else if (!scoreField && userField) alertField.innerHTML = 'Please enter a valid score';
  else alertField.innerHTML = 'Please enter a valid submission';
});
