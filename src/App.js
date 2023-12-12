import { Random } from '@woowacourse/mission-utils';
import Coach from './Model/Coach.js';
import Validator from './Validator.js';
import InputView from './View/InputView.js';
import OutputView from './View/OutputView.js';
import { COMMA, MAX_RANDOM_NUMBER, MAX_RECOMMENDATION_SIZE, MAX_SAME_CATEGORY_SELECTIONS_PER_WEEK, MIN_RANDOM_NUMBER } from './constants.js';

class App {
  #coaches = [];
  #categories = [];
  #result = {};

  async play() {
    OutputView.printStartMessage();
    await this.initializeCoachs();
    await this.initializeDislikedMenus();
    this.generateCategories();
    this.generateAllMenuRecommendations();
    this.saveResult();
    OutputView.printResult(this.#categories, this.#result);
    OutputView.printEndMessage();
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
          coach.initializeRecommendation();
        });
      }, Promise.resolve());
    } catch (error) {
      OutputView.print(error);
      await this.initializeDislikedMenus();
    }
  }

  generateCategories() {
    while (this.#categories.length < MAX_RECOMMENDATION_SIZE) {
      const category = Random.pickNumberInRange(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);

      if (!(
        this.#categories.filter(value => value === category).length >=
        MAX_SAME_CATEGORY_SELECTIONS_PER_WEEK
      )) {
        this.#categories.push(category);
      }
    }
  }

  generateAllMenuRecommendations() {
    this.#categories.forEach(category => {
      this.#coaches.forEach(coach => {
        coach.generateOneMenuRecommendation(category);
      });
    });
  }

  saveResult() {
    this.#coaches.forEach(coach => {
      this.#result[coach.getName()] = coach.getMenuRecommendation();
    });
  }
}

const app = new App();
app.play();

export default App;