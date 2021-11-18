import getBoard from './getBoard.js';
import clearBoard from './clearBoard.js';
import './styles.css';

const refresh = document.getElementById('refresh');

document.addEventListener('DOMContentLoaded', getBoard());
refresh.addEventListener('click', () => {
  clearBoard();
  getBoard();
});
