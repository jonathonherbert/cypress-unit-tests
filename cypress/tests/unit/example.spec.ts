import { isTrue, returnObj, returnPromise } from "../../../src/example";

describe("sync", () => {
  it("can assert on the output of imported functions", () => {
    expect(isTrue(true)).to.be.equal(true);
  });

  it("fails when the assertions fail", () => {
    expect(isTrue(true)).to.be.equal(false);
  });

  it("can compare objects", () => {
    expect(returnObj()).to.deep.equal({
      unitTesting: "it's more likely than you think",
    });
  });
});

describe("async, w/ chai-as-promised", () => {
  it("can handle promises that succeed with chai-as-promised", () => {
    const result = returnPromise();
    return expect(result).to.eventually.contain("async is ok");
  });

  it("fails when async assertions fail", () => {
    const result = returnPromise();
    return expect(result).to.eventually.contain(
      "this is not what I was promised"
    );
  });

  it("can handle promises that throw, and test what's thrown", () => {
    const result = returnPromise(false);

    // I'd love to use chai-as-promised's eventually.be.rejected here,
    // but it seems to catch the error being thrown and treat it as
    // an error in the test itself. E.g.
    //
    // `return expect(result).to.eventually.be.rejected;`
    //
    // fails the test with "Error: 'oh, no 😭'" in the test runner.

    return result.catch(e => expect(e.message).to.equal("oh, no 😭"))
  });

  it("fails when assertions that expect a failure, fail", () => {
    const result = returnPromise(false);

    return result.catch(e => expect(e.message).to.equal("I didn't fail this way"))
  });
});
