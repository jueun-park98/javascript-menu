import { Console } from '@woowacourse/mission-utils';
import { END_MESSAGE, RESULT_MESSAGE, START_MESSAGE } from '../constants.js';
import StringUtils from '../utils/StringUtils.js';

const OutputView = {
  print(message) {
    Console.print(message);
  },

  printStartMessage() {
    this.print(START_MESSAGE);
  },

  printEndMessage() {
    this.print(END_MESSAGE);
  },

  printResult(categories, result) {
    this.print(RESULT_MESSAGE);
    this.print(StringUtils.parseCategoriesInString(categories));
    this.print(StringUtils.parseResultInString(result));
  }
}

export default OutputView;