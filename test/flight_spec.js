var helper = require("node-red-node-test-helper");
var flightGet = require("../flight-get.js");

describe('flight-get Node', function () {

  afterEach(function () {
    helper.unload();
  });

  it('should be loaded', function (done) {
    var flow = [{ id: "n1", type: "flight-get", name: "test name" }];
    helper.load(flightGet, flow, function () {
      var n1 = helper.getNode("n1");
      n1.should.have.property('name', 'test name');
      done();
    });
  });

  it('should make payload ICAO', function (done) {
    var flow = [{ id: "n1", type: "flight-get", name: "test name",wires:[["n2"]] },
    { id: "n2", type: "helper" }];
    helper.load(flightGet, flow, function () {
      var n2 = helper.getNode("n2");
      var n1 = helper.getNode("n1");
      n2.on("input", function (msg) {
        msg.should.have.property('payload', 'flightget');
        done();
      });
      n1.receive({ payload: "FlightGet" });
    });
  });
});