const app = require("../../src");
import { faker } from "@faker-js/faker";
import supertest = require("supertest");

describe("Auth Apis", () => {
  const fakeUser = {
    email: faker.internet.email().toLowerCase(),
    password: "password"
  };
  const serve = supertest(app);
  it("register", async () => {
    const response = await serve.post("/v1/auth/register").send(fakeUser);
    expect(response.body).toHaveProperty("id");
  });

  it("login", async () => {
    const response = await serve.post("/v1/auth/login").send(fakeUser);
    expect(response.body).toHaveProperty("token");
  });
});