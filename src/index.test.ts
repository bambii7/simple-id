import simpleId from './index';

// assign global crypto object
const crypto = require('crypto');
global.crypto = crypto.webcrypto;

describe('simple-id', () => {
  test('returns a string', () => {
    const result = simpleId();
    expect(typeof result).toBe('string');
  });
  test('creates unique ids', () => {
    const id1 = simpleId();
    const id2 = simpleId();
    expect(id1).not.toBe(id2);
  });
  test('there are no collisions', () => {
    // much more than 10,000 slows down tests.
    // But if you're interested you can increase the number generated to test statistical significance
    const length = 10000
    const emptyList = new Array(length).fill(0)
    const onlyUnique = (value, index, self) => self.indexOf(value) === index
    const keyList = emptyList.map(k => simpleId()).filter(onlyUnique)

    expect(keyList.length).toEqual(length);
  });
});
