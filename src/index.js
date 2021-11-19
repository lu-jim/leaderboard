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
  const isValid = userField.value && scoreField.value && Number.isInteger(+scoreField.value);
  if (isValid && +scoreField.value < 10000) {
    postScore(userField.value, scoreField.value);
    alertField.innerHTML = '';
    alertField.className = 'd-none';
    userField.value = '';
    scoreField.value = '';
  } else {
    alertField.className = 'danger py-2 alert alert-danger';
    alertField.innerHTML = 'Please enter a valid entry:</br> No empty fields - Score must be a number between 0 and 9999';
  }
});
