import assert from 'power-assert';
import sum from '../src/sum';

describe("sum", () => {
  it("2 + 2 = 4", () => {
    assert(sum(2, 2) === 4);
  });
});

