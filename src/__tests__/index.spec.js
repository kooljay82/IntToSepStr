import {
  checkIsNumber,
  toStringOfNumber,
  checkIsValidLength,
  splitNum,
  addSeparator,
} from '../index';

describe('IntegerCommaAdder 테스트', () => {
  const numberWithString = '123pw';
  const number = 123;
  const stringButNumber = '123';
  const startWithString = 'pw123';
  const exponential = 1e21;
  const emptyStr = '';
  const validStrLength = '12';
  const validNumLength = 1234;
  const validLongNum = 12341234;
  const notValidNumLength = 1111111111111111;
  const tooLong = '123123123123123123';

  describe('checkIsNumber 스펙', () => {
    it('유효하지 않은 타입의 매개변수를 전달할 경우 false를 반환한다', () => {
      expect(checkIsNumber(numberWithString)).toBe(false);
      expect(checkIsNumber(startWithString)).toBe(false);
    });
    it('유효한 타입의 매개변수를 전달할 경우 true를 반환한다', () => {
      expect(checkIsNumber(number)).toBe(true);
      expect(checkIsNumber(stringButNumber)).toBe(true);
    });
    it('지수 표기법의 매개변수를 전달할 경우 false를 반환한다', () => {
      expect(checkIsNumber(exponential)).toBe(false);
    });
  });

  describe('toStringOfNumber 스펙', () => {
    it('유효하지 않은 타입의 매개변수를 전달할 경우 빈 문자열을 반환한다', () => {
      expect(toStringOfNumber(numberWithString)).toBe(emptyStr);
      expect(toStringOfNumber(startWithString)).toBe(emptyStr);
      expect(toStringOfNumber(exponential)).toBe(emptyStr);
    });
    it('유효한 타입의 매개변수를 전달할 경우 문자열로 변환된 매개변수를 반환한다', () => {
      expect(toStringOfNumber(number)).toBe('123');
      expect(toStringOfNumber(stringButNumber)).toBe('123');
    });
  });

  describe('checkIsValidLength 스펙', () => {
    it('유효하지 않은 길이의 매개변수를 전달할 경우 빈 문자열을 반환한다', () => {
      expect(checkIsValidLength(emptyStr)).toBe(emptyStr);
      expect(checkIsValidLength(tooLong)).toBe(emptyStr);
      expect(checkIsValidLength(notValidNumLength)).toBe(emptyStr);
      expect(checkIsValidLength(false)).toBe(emptyStr);
    });
    it('유효한 길이의 매개변수를 전달할 경우', () => {
      expect(checkIsValidLength(validStrLength)).toBe('12');
      expect(checkIsValidLength(validNumLength)).toBe('1234');
    });
  });

  describe('splitNum 스펙', () => {
    it('유효하지 않은 매개변수를 전달할 경우 빈 배열을 반환한다', () => {
      expect(splitNum(numberWithString)).toEqual([]);
    });

    it('유효한 매개변수를 전달할 경우 split된 숫자의 배열을 반환한다', () => {
      expect(splitNum(validNumLength)).toEqual(['1', '2', '3', '4']);
    });
  });

  describe('addSeparator 스펙', () => {
    it('unit 보다 적은 길이의 num은 문자열 그대로 반환한다', () => {
      expect(addSeparator(validNumLength, 5)).toBe('1234');
    });

    it('unit 보다 긴 길이의 num은 구분자가 찍힌 문자열로 반환한다', () => {
      expect(addSeparator(validNumLength, 3)).toBe('1,234');
      expect(addSeparator(validLongNum, 3)).toBe('12,341,234');
    });

    it('구분자를 매개변수에 추가하면 해당 구분자가 찍힌 문자열로 반환한다', () => {
      expect(addSeparator(validNumLength, 3, '.')).toBe('1.234');
      expect(addSeparator(validLongNum, 3, ' ')).toBe('12 341 234');
    });
  });
});
