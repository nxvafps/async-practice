const promiseChain = require("../main/promise-chain");

describe("promiseChain", () => {
  beforeAll(() => {
    console.log = jest.fn();
    jest.useFakeTimers();
  });
  afterAll(() => {
    jest.clearAllTimers();
  });

  it("resolves and logs start, resolved value, and end", async () => {
    const promise = promiseChain();

    jest.advanceTimersByTime(1000);

    await promise;

    expect(console.log).toHaveBeenCalledWith("start");
    expect(console.log).toHaveBeenCalledWith("resolved value");
    expect(console.log).toHaveBeenCalledWith("end");
  });
});
