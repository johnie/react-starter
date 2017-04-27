import
{ isUndefined,
  isNumeric,
  numberFormat
}
from './utils';

describe('Utils', () => {
  const nullVal = null;

  describe('isUndefined', () => {
    test('null is undefined', () => {
      expect(isUndefined(nullVal)).toBe(true);
    });

    test('undefined is undefined', () => {
      const x = undefined;
      expect(isUndefined(x)).toBe(true);
    });

    test('empty object is not undefined', () => {
      const x = {};
      expect(isUndefined(x)).toBe(false);
    });
  });

  describe('isNumeric', () => {
    test('null is not numeric', () => {
      expect(isNumeric(nullVal)).toBe(false);
    });

    test('zero is numeric', () => {
      const x = 0;
      expect(isNumeric(x)).toBe(true);
    });

    test('string is not numeric', () => {
      const x = '2';
      expect(isNumeric(x)).toBe(false);
    });

    test('number is numeric', () => {
      const x = 10;
      expect(isNumeric(x)).toBe(true);
    });

    test('infinty is not numeric', () => {
      expect(isNumeric(Infinity)).toBe(false);
    });

    test('NaN is not numeric', () => {
      expect(isNumeric(NaN)).toBe(false);
    });

    test('undefined is not numeric', () => {
      expect(isNumeric(undefined)).toBe(false);
    });

    test('bool is not numeric', () => {
      expect(isNumeric(true)).toBe(false);
    });
  });

  describe('numberFormat', () => {
    test('format number with countrycode', () => {
      expect(numberFormat(5500, 'en-EN')).toBe('5,500');
    });

    test('NaN should not be formatted', () => {
      expect(numberFormat('5000')).toBe(false);
    });
  });
});
