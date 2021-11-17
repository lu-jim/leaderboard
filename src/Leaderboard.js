import { Score } from './Score.js';

class Leaderboard {
  static test = () => 'leaderboard OK';

  static createNode = (type, nodeClass) => {
    const node = document.createElement(type);
    if (nodeClass) node.className = nodeClass;
    return node;
  };

  static addScore = (newItem, list) => [...list, new Score(newItem)];

  static showScore = (Score) => {
    const board = document.getElementById('board');
    const row = Leaderboard.createNode('div', 'score');
    row.innerHTML = `<p class="w-100 d-flex justify-content-between p-2 m-0"> ${Score.name}: ${Score.result} </p>
    `;
    board.appendChild(row);
  };

  static showBoard = (list) => {
    list.forEach((Score) => {
      Leaderboard.showScore(Score);
    });
  };
}

export { Leaderboard as default };
