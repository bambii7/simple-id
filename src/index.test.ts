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
});
