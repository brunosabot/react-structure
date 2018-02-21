import { fetchGet, fetchPost, fetchGetAuth, fetchPostAuth } from "./fetch";

const URL = "https://www.example.com";
const CORS = { credentials: "include", mode: "cors" };
const GET = { method: "GET" };
const POST = {
  body: '{"test":"test"}',
  headers: { Accept: "application/json", "Content-Type": "application/json" },
  method: "POST"
};

describe("Test fetch library", () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation((url, args) => {
      const p = new Promise(resolve => {
        resolve({ json: () => ({ url, args }) });
      });

      return p;
    });
  });

  it("Should fetch GET", async () => {
    const result = await fetchGet(URL);
    expect(result.json()).toEqual({
      url: URL,
      args: GET
    });
  });

  it("Should fetch POST", async () => {
    const result = await fetchPost(URL, { test: "test" });
    expect(result.json()).toEqual({
      args: POST,
      url: URL
    });
  });

  it("Should fetch GET with auth", async () => {
    const result = await fetchGetAuth(URL);
    expect(result.json()).toEqual({
      args: { ...GET, ...CORS },
      url: URL
    });
  });

  it("Should fetch POST with auth", async () => {
    const result = await fetchPostAuth(URL, { test: "test" });
    expect(result.json()).toEqual({
      args: { ...POST, ...CORS },
      url: URL
    });
  });
});
