import { Console } from '@woowacourse/mission-utils';
import { START_MESSAGE } from '../constants';

const OutputView = {
  print(message) {
    Console.print(message);
  },

  printStartMessage() {
    this.print(START_MESSAGE);
  }
}

export default OutputView;