import { Score } from './Score.js';

class Leaderboard {
  static test = () => 'leaderboard OK';

  static addScore = (newItem, list) => [...list, new Score(newItem)];

  static showScore = (Score) => {
    const board = document.getElementById('board');
    const row = document.createElement('div');
    row.className = 'score';
    row.innerHTML = `<p class="w-100 d-flex justify-content-between p-2 m-0"> ${Score.user}: ${Score.score} </p>`;
    board.appendChild(row);
  };

  static showBoard = (list) => {
    list.forEach((Score) => {
      Leaderboard.showScore(Score);
    });
  };
}

export { Leaderboard as default };
