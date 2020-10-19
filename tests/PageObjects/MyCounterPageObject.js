import MyCounter from "@/MyCounter";
import { mount } from "@vue/test-utils";

class MyCounterPageObject {
  constructor() {
    this._wrapper = mount(MyCounter);
  }

  get wrapper() {
    return this._wrapper;
  }

  get plusButton() {
    return this.wrapper.find("#button-counter-up");
  }
  get minusButton() {
    return this.wrapper.find("#button-counter-down");
  }

  get plusButtonExists() {
    return this.plusButton.exists();
  }

  get minusButtonExists() {
    return this.minusButton.exists();
  }

  get counterStatus() {
    return Number(this.wrapper.findAll(".col-sm").wrappers[1].text());
  }

  clickPlusButton() {
    return this.plusButton.trigger("click");
  }
  clickMinusButton() {
    return this.minusButton.trigger("click");
  }
}

export default MyCounterPageObject;
