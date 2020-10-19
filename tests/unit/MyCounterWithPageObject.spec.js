import MyCounterPageObject from "../PageObjects/MyCounterPageObject";

describe("Given the counter page", () => {
  let counterPageObject;
  describe("when initializing", () => {
    beforeEach(() => {
      counterPageObject = new MyCounterPageObject();
    });
    it("then the counter 0 is displayed", () => {
      expect(counterPageObject.counterStatus).toBe(0);
    });
    it("then a plus button is displayed", () => {
      expect(counterPageObject.plusButtonExists).toBe(true);
    });
    it("then a minus button is displayed", () => {
      expect(counterPageObject.minusButtonExists).toBe(true);
    });
  });
  it("when clicking the plus button, then the counter goes up", async done => {
    const counterBeforeClick = counterPageObject.counterStatus;
    counterPageObject.clickPlusButton().then(()=>{
      expect(counterPageObject.counterStatus).toBe(counterBeforeClick + 1);
      done();
    })
  });
  it("when clicking the minus button, then the counter goes up", async done => {
    const counterBeforeClick = counterPageObject.counterStatus;
    counterPageObject.clickMinusButton().then(()=>{
      expect(counterPageObject.counterStatus).toBe(counterBeforeClick - 1);
      done();
    })
  });
});
