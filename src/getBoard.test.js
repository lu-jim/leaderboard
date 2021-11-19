/**
 * @jest-environment jsdom
 */
import getBoard from './getBoard.js';
import Leaderboard from './Leaderboard.js';

jest.mock('./getBoard.js');
// Mocking fetch behavior
global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({
    user: 'Sn1per1',
    score: 1804,
  }),
}));

describe('The Refresh feature is working', () => {
  it('Getting a response from the API', async () => {
    const score = await getBoard();
    const dummyScore = {
      score: 1804,
      user: 'Sn1per1',
    };
    expect(score).toStrictEqual(dummyScore);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
  it('Updating the scores with the API data', async () => {
    const score = [await getBoard()];
    document.body.innerHTML = '<div id="board"></div>';
    const board = document.getElementById('board');
    Leaderboard.showBoard(score);
    expect(board.childNodes.length).toBe(1);
    expect(board.firstChild.firstChild.innerHTML).toBe(' Sn1per1: 1804 ');
  });
});
