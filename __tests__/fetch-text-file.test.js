const fetchTextFile = require("../main/fetch-text-file");

describe("fetchTextFile", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("correctly fetches text files", async () => {
    const mockResponse = "this is the content of the text file";
    global.fetch.mockResolvedValue({
      ok: true,
      text: jest.fn().mockResolvedValue(mockResponse),
    });
    console.log = jest.fn();

    const url = "https://example.com/path/to/textfile.txt";
    const data = await fetchTextFile(url);

    expect(fetch).toHaveBeenCalledWith(url);
    expect(console.log).toHaveBeenCalledWith(mockResponse);
    expect(data).toBe(mockResponse);
  });

  it("handles fetch error", async () => {
    global.fetch.mockResolvedValue({
      ok: false,
    });
    const url = "https://example.com/path/to/textfile.txt";

    await expect(fetchTextFile(url)).rejects.toThrow(
      "Network response was not ok"
    );
  });

  it("handles network error", async () => {
    global.fetch.mockRejectedValue(new Error("Network error"));
    const url = "https://example.com/path/to/textfile.txt";
    await expect(fetchTextFile(url)).rejects.toThrow("Network error");
  });
});
