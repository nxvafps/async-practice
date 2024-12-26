const getGreeting = require("../main/async-greeting");

describe("asyncGreeting", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.restoreAllMocks();
    jest.resetAllMocks();
  });
  it("should return the message after 1 second", async () => {
    const promise = getGreeting();
    jest.runAllTimers();
    const message = await promise;
    expect(message).toBe(`this is displayed after 1 second`);
  });
});
