/**
 * @jest-environment jsdom
 */
import postScore from './postScore.js';

jest.mock('./postScore.js');

describe('Score is posted', () => {
  it('Score is sent to the API', () => {
    let mockAPI = [];
    const dummyScore = JSON.stringify({ user: 'Sn1per1', score: 1804 });
    mockAPI = postScore(dummyScore, mockAPI);
    expect(mockAPI.length).toBeTruthy();
  });
  it('Score is sent as a JSON', () => {
    const dummyScore = JSON.stringify({ user: 'Sn1per1', score: 1804 });
    const isJSON = (str) => {
      try {
        const json = JSON.parse(str);
        if (Object.prototype.toString.call(json).slice(8, -1) !== 'Object') {
          return false;
        }
      } catch (e) {
        return false;
      }
      return true;
    };
    expect(isJSON(dummyScore).toBeTruthy);
  });
});
