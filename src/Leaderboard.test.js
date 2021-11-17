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
      name: 'Sn1per1',
      result: 1804,
    };
    document.body.innerHTML = '<div id="board"></div>';
    Leaderboard.showScore(dummyScore);
    const board = document.getElementById('board');
    expect(board.childNodes.length).toBeTruthy();
  });
  it('Show board in home', () => {
    const dummyBoard = [
      {
        name: 'Sn1per1',
        result: 1804,
      },
      {
        name: 'Oh ill Nam',
        result: 1722,
      },
      {
        name: 'wx mjm978244659',
        result: 1656,
      },
      {
        name: 'winstxn',
        result: 1570,
      },
      {
        name: 'I am Súnlight',
        result: 1499,
      },
    ];
    document.body.innerHTML = '<div id="board"></div>';
    Leaderboard.showBoard(dummyBoard);
    const board = document.getElementById('board');
    expect(board.childNodes.length).toBeTruthy();
  });
});
