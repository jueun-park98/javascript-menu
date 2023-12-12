import { Console } from '@woowacourse/mission-utils';
import { COACH_NAMES_INPUT_MESSAGE, DISLIKED_MENUS_INPUT_MESSAGE } from '../constants.js';

const InputView = {
  async readCoachNames() {
    const nameInput = await Console.readLineAsync(COACH_NAMES_INPUT_MESSAGE);

    return nameInput;
  },

  async readDislikedMenus(coachName) {
    const dislikedMenuInput = await Console.readLineAsync(`${coachName}${DISLIKED_MENUS_INPUT_MESSAGE}`);

    return dislikedMenuInput;
  }
}

export default InputView;