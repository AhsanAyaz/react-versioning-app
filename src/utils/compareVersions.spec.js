const { default: compareVersions } = require('./compareVersions');

describe('compareVersions method', () => {
  it('should return 1 when the newVersion is greater than the oldVersion', () => {
    expect(compareVersions('2.0.0', '1.0.0')).toBe(1);
    expect(compareVersions('1.0.0', '2.0.0')).toBe(-1);
    expect(compareVersions('1.1.0', '1.0.1')).toBe(1);

    expect(compareVersions('0.0.1', '0.0.0')).toBe(1);
    expect(compareVersions('2.1.1', '2.1.1')).toBe(0);
  });
});
