import { ASIAN, CHINESE, COMMA, EMPTY_CHARACTER, EMPTY_LENGTH, JAPANESE, KOREAN, MAX_MENUS_LENGTH, MAX_NAMES_LENGTH, MAX_NAME_LENGTH, MAX_SAME_CATEGORY_SELECTIONS_PER_WEEK, MENU_CARD, MIN_NAMES_LENGTH, MIN_NAME_LENGTH, WESTERN, WHITESPACE } from '../constants.js';

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

  hasMenusInMenuCard(string) {
    const menus = string.split(COMMA);
    const conditions = menus.map(menu => this.isInMenuCard(menu));

    return !conditions.some(condition => !condition);
  },

  isInMenuCard(menuString) {
    const menuCardInFlatArray = Object.values(MENU_CARD).map(
      category => category.replaceAll(WHITESPACE, EMPTY_CHARACTER).split(COMMA)
    ).flat();

    if (this.isEmpty(menuString)) {
      return true;
    }

    return menuCardInFlatArray.some(menuInCard => menuInCard === menuString);
  },

  parseResultInString(resultObject) {
    let resultString = '';

    Object.keys(resultObject).forEach(key => {
      resultString += `[ ${key} | ${resultObject[key].join(' | ')} ]\n`;
    });

    return resultString;
  },

  parseCategoriesInString(categories) {
    const categoryMap = {
      0: JAPANESE,
      1: KOREAN,
      2: CHINESE,
      3: ASIAN,
      4: WESTERN
    };
    const parsedCategories = categories.map(categoryNumber => categoryMap[categoryNumber]);

    return `[ 카테고리 | ${parsedCategories.join(' | ')} ]`;
  }
}

export default StringUtils;