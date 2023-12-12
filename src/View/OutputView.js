import { Console } from '@woowacourse/mission-utils';
import { END_MESSAGE, START_MESSAGE } from '../constants';

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
}

export default OutputView;