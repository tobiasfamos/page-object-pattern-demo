import MyCounter from "@/MyCounter";
import { mount } from "@vue/test-utils";

describe("Given the counter page", () => {
  let wrapper;
  describe("when initializing", () => {
    beforeEach(() => {
      wrapper = mount(MyCounter);
    });
    it("then the counter 0 is displayed", () => {
      const counterNumber = wrapper.findAll(".col-sm").wrappers[1];
      expect(counterNumber.text()).toBe("0");
    });
    it("then a plus button is displayed", () => {
      const plusButton = wrapper.findAll(".col-sm").wrappers[0];
      expect(plusButton.text()).toBe("+");
    });
    it("then a minus button is displayed", () => {
      const plusButton = wrapper.findAll(".col-sm").wrappers[2];
      expect(plusButton.text()).toBe("-");
    });
  });
  it("when clicking the plus button, then the counter goes up", async done => {
    const counterBeforeClick = Number(
      wrapper.findAll(".col-sm").wrappers[1].text()
    );
    wrapper
      .findAll("button")
      .wrappers[0].trigger("click")
      .then(() => {
        const counterAfterClick = Number(
          wrapper.findAll(".col-sm").wrappers[1].text()
        );
        expect(counterAfterClick).toBe(counterBeforeClick + 1);
        done();
      });
  });
  it("when clicking the minus button, then the counter goes up", async done => {
    const counterBeforeClick = Number(
      wrapper.findAll(".col-sm").wrappers[1].text()
    );
    wrapper
      .findAll("button")
      .wrappers[0].trigger("click")
      .then(() => {
        const counterAfterClick = Number(
          wrapper.findAll(".col-sm").wrappers[1].text()
        );
        expect(counterAfterClick).toBe(counterBeforeClick + 1);
        done();
      });
  });
});
