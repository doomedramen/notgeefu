//var assert = require("chai").assert;

var request = require("supertest");
describe("loading express", function () {
  var app;
  beforeEach(function () {
    app = require("../app");
  });
  afterEach(function () {
    app.close();
  });
  it("responds to /", function testSlash(done) {
    request(app)
      .get("/")
      .expect(200, done);
  });
});