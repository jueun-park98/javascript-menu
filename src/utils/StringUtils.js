import { COMMA, EMPTY_LENGTH, MAX_MENUS_LENGTH, MAX_NAMES_LENGTH, MAX_NAME_LENGTH, MIN_NAMES_LENGTH, MIN_NAME_LENGTH } from '../constants.js';

const StringUtils = {
  isEmpty(string) {
    return string.trim().length === EMPTY_LENGTH;
  },

  isNumeric(string) {
    return !isNaN(Number(string));
  },

  hasSpecialCharacters(string) {
    let regex = /[^\w\s,ㄱ-ㅎㅏ-ㅣ가-힣]/;

    return regex.test(string);
  },

  hasNamesInLengthRange(string) {
    const names = string.split(COMMA);
    const conditions = names.map(name =>
      !(name.length < MIN_NAME_LENGTH) &&
      !(name.length > MAX_NAME_LENGTH)
      );
    
    if (conditions.some(condition => !condition)) {
      return false;
    }

    return true;
  },

  hasNameCountInRange(string) {
    const names = string.split(COMMA);

    return !(names.length < MIN_NAMES_LENGTH) && !(names.length > MAX_NAMES_LENGTH);
  },

  hasMenuCountInRange(string) {
    const menus = string.split(COMMA);

    return !(menus.length > MAX_MENUS_LENGTH);
  },

  parseResultInString(resultObject) {
    let resultString = '';

    Object.keys(resultObject).forEach(key => {
      resultString += `[ ${key} | ${resultObject[key].join(' | ')} ]\n`;
    });

    return resultString;
  }
}

export default StringUtils;