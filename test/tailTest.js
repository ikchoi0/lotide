const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it('returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), [
      "Lighthouse",
      "Labs",
    ]);
  });
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
  it("returns [1] for []", () => {
    assert.deepEqual(tail([1]), []);
  });
  it("returns [1, 2] for [2]", () => {
    assert.deepEqual(tail([1, 2]), [2]);
  });
});
