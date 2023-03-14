import { faker } from "@faker-js/faker";
import UserRepository from "../../../src/repositories/user.repository";

describe("User Repository", () => {
  let newUser: any;
  beforeEach(() => {
    newUser = {
      email: faker.internet.email().toLowerCase(),
      password: "password1"
    };
  });

  it("should create user", async () => {
    const user = await UserRepository.create(newUser);
    expect(user.email).toMatch(newUser.email);
  });
});