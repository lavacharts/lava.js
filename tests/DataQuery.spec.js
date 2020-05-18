/** @test {DataQuery} */
describe("DataQuery", () => {
  const sheetRoot = "https://docs.google.com/spreadsheets/d/";
  const id = "1NrwfHVE0qn3O8HcLDFd71_LepjSDIbrJMglkHZIEifI";
  const queryStr = "/gviz/tq?range=A1:B6";

  const dataUri = sheetRoot + id + queryStr;

  /** @test {DataQuery#constructor} */
  describe("constructor", () => {
    it("Should create a new DataQuery from a sheet ID and range.", () => {
      const dataQuery = window.lava.query({
        sheetId: "1NrwfHVE0qn3O8HcLDFd71_LepjSDIbrJMglkHZIEifI",
        range: "A1:B6"
      });

      expect(dataQuery.url).to.equal(dataUri);
      expect(dataQuery.opts).to.equals({ sendMethod: "auto" });
      expect(dataQuery.query).to.be.undefined;
    });

    it("Should create a new DataQuery from a config object.", () => {
      const dataQuery = lava.query({
        url: dataUri,
        opts: { option: "value" },
        query: q => q
      });

      expect(dataQuery.url).to.equal(dataUri);
      expect(dataQuery.opts)
        .to.be.an("object")
        .that.include({ option: "value" });
      expect(dataQuery.query).to.be.a("function");
    });

    it("Should throw an Error if the url is not a string.", () => {
      expect(() => {
        lava.query(["Bananas"]);
      }).to.throw();
    });

    it("Should throw an Error if the url key is not present in the config object.", () => {
      expect(() => {
        lava.query({
          thereIs: "noUrlHere"
        });
      }).to.throw();
    });

    it("Should throw an Error if the url is not a string in the config object.", () => {
      expect(() => {
        lava.query({
          url: ["Tacos"]
        });
      }).to.throw();
    });
  });

  /** @test {DataQuery#send} */
  describe("send", () => {
    //it('Should receive a valid response.', function (done) {
    //    var dataQuery = lava.query(dataUri);
    //
    //});
    //it('Should fail when sending a request to a bad url.', function (done) {
    //    var dataQuery = lava.query('http://i.am.not.real/and/there/is/nothing/here');
    //    //var dataQuerySpy = sinon.spy(dataQuery, 'send');
    //
    //    return lava.run().then(function () {
    //        return dataQuery.send().catch(function (response) {
    //            done(response.getDetailedMessage());
    //        });
    //    });
    //
    //});
  });
});
