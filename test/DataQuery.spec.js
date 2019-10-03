/** @test {DataQuery} */
describe("DataQuery", function() {
  const sheetRoot = "https://docs.google.com/spreadsheets/d/";
  const id = "1NrwfHVE0qn3O8HcLDFd71_LepjSDIbrJMglkHZIEifI";
  const queryStr = "/gviz/tq?range=A1:B6";

  const dataUri = sheetRoot + id + queryStr;

  /** @test {DataQuery#constructor} */
  describe("constructor", function() {
    it("Should create a new DataQuery from a url.", function() {
      const dataQuery = new lava.query(dataUri);

      expect(dataQuery.url).to.equal(dataUri);
      expect(dataQuery.opts).to.be.an("object").that.is.empty;
      expect(dataQuery.query).to.be.an("undefined");
    });

    it("Should create a new DataQuery from a config object.", function() {
      const dataQuery = lava.query({
        url: dataUri,
        opts: { option: "value" },
        query: function(q) {
          return q;
        }
      });

      expect(dataQuery.url).to.equal(dataUri);
      expect(dataQuery.opts)
        .to.be.an("object")
        .that.include({ option: "value" });
      expect(dataQuery.query).to.be.a("function");
    });

    it("Should throw an Error if the url is not a string.", function() {
      expect(function() {
        lava.query(["Bananas"]);
      }).to.throw();
    });

    it("Should throw an Error if the url key is not present in the config object.", function() {
      expect(function() {
        lava.query({
          thereIs: "noUrlHere"
        });
      }).to.throw();
    });

    it("Should throw an Error if the url is not a string in the config object.", function() {
      expect(function() {
        lava.query({
          url: ["Tacos"]
        });
      }).to.throw();
    });
  });

  /** @test {DataQuery#send} */
  describe("send", function() {
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
