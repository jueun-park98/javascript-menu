import { COACH_ERROR_MESSAGE, MENU_ERROR_MESSAGE } from './constants';
import StringUtils from './utils/StringUtils';

const Validator = {
  validateCoachNames(input) {
    const conditions = [
      !StringUtils.isEmpty(input),
      !StringUtils.isNumeric(input),
      !StringUtils.hasSpecialCharacters(input),
      StringUtils.hasNamesInLengthRange(input),
      StringUtils.hasNameCountInRange(input)
    ];

    if (conditions.some(condition => !condition)) {
      throw COACH_ERROR_MESSAGE;
    }
  },

  validateDislikedMenus(input) {
    const conditions = [
      !StringUtils.isEmpty(input),
      !StringUtils.isNumeric(input),
      !StringUtils.hasSpecialCharacters(input),
      StringUtils.hasMenuCountInRange(input)
    ];

    if (conditions.some(condition => !condition)) {
      throw MENU_ERROR_MESSAGE;
    }
  }
}