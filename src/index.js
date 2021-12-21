// kurly util kit / IntToSepStr

export const RULES = {
  MIN_LENGTH: 1,
  MAX_LENGTH: 15,
};

export const checkIsNumber = (num) => {
  if (String(num).toLowerCase().indexOf('e') > -1 || isNaN(num)) return false;
  return true;
};

export const toStringOfNumber = (num) => {
  return checkIsNumber(num) ? `${num}` : '';
};

export const checkIsValidLength = (num) => {
  const strOfNum = toStringOfNumber(num);
  const lengthIsGood = ((len) => {
    return len >= RULES.MIN_LENGTH && len <= RULES.MAX_LENGTH;
  })(strOfNum.length || 0);
  return lengthIsGood ? strOfNum : '';
};

export const splitNum = (num) => {
  const validStr = checkIsValidLength(num);
  return validStr.split('');
};

export const addSeparator = (num, unit = 3, sep = ',') => {
  const validArr = splitNum(num);
  if (unit >= validArr.length) {
    return validArr.join('');
  } else {
    let AddedSepStr = '';
    validArr.reverse().forEach((v, i) => {
      if (i > 0 && i % unit === 0) {
        AddedSepStr = `${v}${sep}${AddedSepStr}`;
      } else {
        AddedSepStr = `${v}${AddedSepStr}`;
      }
    });
    return AddedSepStr;
  }
};

export default addSeparator;
