const delay = require("../main/set-time-out-message");

describe("set time out message", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.restoreAllMocks();
    jest.resetAllMocks();
  });
  it("logs a message after a 2 second delay", () => {
    console.log = jest.fn();

    delay();

    jest.runAllTimers();

    expect(console.log).toHaveBeenCalledWith("this is shown after 2 seconds");
  });
});
