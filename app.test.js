const request = require("supertest");
const app = require("./app");

describe("/", () => {
  it("should return Thank you for using the server", () => {
    return request(app)
      .get("/")
      .expect(200);
  });
});
