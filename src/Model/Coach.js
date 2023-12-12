import Recommendation from './Recommendation.js';

export default class Coach {
  #name;
  #dislikedMenus = [];
  #recommendation;

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  addDislikedMenu(menu) {
    this.#dislikedMenus.push(menu);
  }

  getDislikedMenus() {
    return this.#dislikedMenus;
  }

  getMenuRecommendation() {
    return this.#recommendation.getMenuRecommendation();
  }

  initializeRecommendation() {
    this.#recommendation = new Recommendation(this.#dislikedMenus);
  }

  generateOneMenuRecommendation(categoryNumber) {
    this.#recommendation.generateMenuRecommendation(categoryNumber);
  }
}