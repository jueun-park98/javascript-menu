import { Random } from '@woowacourse/mission-utils';
import { COMMA, EMPTY_CHARACTER, FIRST_ARRAY_INDEX, INCREMENT, MENU_CARD, WHITESPACE } from '../constants.js';

export default class Recommendation {
  #dislikedMenus;
  #menuRecommendation = [];

  constructor(dislikedMenus) {
    this.#dislikedMenus = dislikedMenus;
  }

  generateMenuRecommendation(categoryNumber) {
    const menuRecommendationSet = new Set(this.#menuRecommendation);
    const menuCardInArray = Object
      .values(MENU_CARD)[categoryNumber]
      .replaceAll(WHITESPACE, EMPTY_CHARACTER)
      .split(COMMA);

    while (menuRecommendationSet.size < this.#menuRecommendation.length + INCREMENT) {
      const newIndex = Random.shuffle(Array.from(menuCardInArray.keys()))[FIRST_ARRAY_INDEX];
      const menu = menuCardInArray[newIndex];

      if (!this.#menuRecommendation.includes(menu) && !this.#dislikedMenus.includes(menu)) {
        menuRecommendationSet.add(menu);
      }
    }

    this.#menuRecommendation = Array.from(menuRecommendationSet);
  }

  getMenuRecommendation() {
    return this.#menuRecommendation;
  }
}