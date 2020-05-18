const expect = chai.expect;

describe("lava.js", function() {
  const { lava } = window;

  it("should be defined on the window", () => {
    expect(lava).to.not.be.undefined;
  });

  it("should not be initialized", () => {
    expect(lava.googleReady).to.be.false;
    expect(lava.domReady).to.be.false;
  });

  it("should have the default options set", () => {
    const { options } = lava;
    window.expect(options.autodraw).to.be.true;
    expect(options.autoloadGoogle).to.be.true;
    expect(options.chartPackages).to.contain("corechart");
    expect(options.datetimeFormat).to.equal("");
    expect(options.debounceTimeout).to.equal(250);
    expect(options.debug).to.be.false;
    expect(options.language).to.equal("en");
    expect(options.mapsApiKey).to.equal("");
    expect(options.responsive).to.be.true;
    expect(options.timezone).to.equal("America/Los_Angeles");
  });
});
