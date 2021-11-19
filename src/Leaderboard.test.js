/**
 * @jest-environment jsdom
 */
import Leaderboard from './Leaderboard.js';

describe('Initial setup', () => {
  it('Happy Path', () => {
    expect(Leaderboard.test()).toBe('leaderboard OK');
  });
});

describe('Board is shown', () => {
  it('Show item on board', () => {
    const dummyScore = {
      user: 'Sn1per1',
      score: 1804,
    };
    document.body.innerHTML = '<div id="board"></div>';
    Leaderboard.showScore(dummyScore);
    const board = document.getElementById('board');
    expect(board.childNodes.length).toBeTruthy();
  });
  it('Show board in home', () => {
    const dummyBoard = [
      {
        user: 'Sn1per1',
        score: 1804,
      },
      {
        user: 'Oh ill Nam',
        score: 1722,
      },
      {
        user: 'wx mjm978244659',
        score: 1656,
      },
      {
        user: 'winstxn',
        score: 1570,
      },
      {
        user: 'I am Súnlight',
        score: 1499,
      },
    ];
    document.body.innerHTML = '<div id="board"></div>';
    Leaderboard.showBoard(dummyBoard);
    const board = document.getElementById('board');
    expect(board.childNodes.length).toBeTruthy();
  });
});
