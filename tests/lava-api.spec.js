require("../src/lava.ts");

describe("lava.js", () => {
  const { lava } = window;

  it("should be defined on the window", () => {
    expect(lava).to.not.be.undefined;
  });

  describe("loading flags", () => {
    it("lava.googleReady is false", () => {
      expect(lava.googleReady).to.be.false;
    });

    it("lava.domReady is false", () => {
      expect(lava.domReady).to.be.false;
    });
  });

  describe("default options", () => {
    const { options } = lava;

    it(`autodraw is "false"`, () => {
      expect(options.autodraw).to.be.false;
    });

    it(`autoloadGoogle is "true"`, () => {
      expect(options.autoloadGoogle).to.be.true;
    });

    it(`chartPackages contains "corechart"`, () => {
      expect(options.chartPackages).to.contain("corechart");
    });

    it.skip(`datetimeFormat is ""`, () => {
      expect(options.datetimeFormat).to.equal("");
    });

    it(`debounceTimeout is 250`, () => {
      expect(options.debounceTimeout).to.equal(250);
    });

    it(`debug is "false"`, () => {
      expect(options.debug).to.be.false;
    });

    it(`language is "en"`, () => {
      expect(options.language).to.equal("en");
    });

    it(`mapsApiKey is ""`, () => {
      expect(options.mapsApiKey).to.equal("");
    });

    it(`responsive is "true"`, () => {
      expect(options.responsive).to.be.true;
    });

    it(`timezone is "America/Los_Angeles"`, () => {
      expect(options.timezone).to.equal("America/Los_Angeles");
    });
  });
});
