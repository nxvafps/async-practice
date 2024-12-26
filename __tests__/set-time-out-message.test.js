const delay = require("../main/set-time-out-message");

describe("set time out message", () => {
  it("logs a message after a 2 second delay", () => {
    jest.useFakeTimers();
    console.log = jest.fn();

    delay();

    jest.runAllTimers();

    expect(console.log).toHaveBeenCalledWith("this is shown after 2 seconds");
  });
});
