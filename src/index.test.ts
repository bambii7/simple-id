import simpleId from './index';

describe('simple-id', () => {
  test('returns a string', () => {
    const result = simpleId();
    expect(typeof result).toBe('string');
  });
});
