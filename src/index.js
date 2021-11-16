import Leaderboard from './Leaderboard.js';
import Score from './Score.js';
import './styles.css';

const dummyLeader = [
  ['Sn1per1', 1804],
  ['Oh ill Nam', 1722],
  ['wx mjm978244659', 1656],
  ['winstxn', 1570],
  ['I am Súnlight', 1499],
];
const dummyList = dummyLeader.map((entry) => new Score(...entry));

document.addEventListener('DOMContentLoaded', Leaderboard.showBoard(dummyList));
