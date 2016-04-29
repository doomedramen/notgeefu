//var assert = require("chai").assert;

var request = require("supertest");
describe("loading express", function () {
  var app = require("../app");
  it("responds to /", function testSlash(done) {
    request(app)
      .get("/")
      .expect(200, done);
  });
});