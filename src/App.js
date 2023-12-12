import Coach from './Model/Coach.js';
import Validator from './Validator.js';
import InputView from './View/InputView.js';
import OutputView from './View/OutputView.js';
import { COMMA } from './constants.js';

class App {
  #coaches = [];

  async play() {
    OutputView.printStartMessage();
    await this.initializeCoachs();
    await this.initializeDislikedMenus();
  }

  async initializeCoachs() {
    try {
      const coachNames = await InputView.readCoachNames();
      const nameArray = coachNames.split(COMMA);

      Validator.validateCoachNames(coachNames);
      nameArray.forEach((name) => {
        this.#coaches.push(new Coach(name));
      });
    } catch (error) {
      OutputView.print(error);
      await this.initializeCoachs();
    }
  }

  async initializeDislikedMenus() {
    try {
      await this.#coaches.reduce(async (promise, coach) => {
        await promise;
        const menuNames = await InputView.readDislikedMenus(coach.getName());
        const menuArray = menuNames.split(COMMA);
  
        Validator.validateDislikedMenus(menuNames);
        menuArray.forEach((menu) => {
          coach.addDislikedMenu(menu);
        });
      }, Promise.resolve());
    } catch (error) {
      OutputView.print(error);
      await this.initializeDislikedMenus();
    }
  }
}

const app = new App();
app.play();

export default App;