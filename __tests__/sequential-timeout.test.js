const sequentialTimeout = require("../main/sequential-timeout");

describe("sequential timeout", () => {
  beforeEach(() => {
    console.log = jest.fn();
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.clearAllTimers();
  });
  it("sequentialTimer", () => {
    sequentialTimeout();

    jest.advanceTimersByTime(1000);
    expect(console.log).toHaveBeenCalledWith("hello");

    jest.advanceTimersByTime(1000);
    expect(console.log).toHaveBeenCalledWith("world");
  });
});
