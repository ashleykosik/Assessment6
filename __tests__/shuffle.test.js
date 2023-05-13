const shuffle = require("../src/shuffle");
const bots = require("../src/botsData");


describe("shuffle should...", () => {
  // CODE HERE
  test('shuffle returns an array', () => {
    expect(shuffle(bots).length).toBeGreaterThan(1);
  })
  test('items have been shuffled around', () => {
    expect(shuffle(bots)).not.toBe(shuffle(bots))
  })
});
