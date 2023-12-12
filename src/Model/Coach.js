export default class Coach {
  #name;
  #dislikedMenus = [];

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
}