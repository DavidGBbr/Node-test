import { User, UserInstance } from "../models/User";
import * as UserService from "./UserService";

describe("Testing user service", () => {
  let email: "test@jest.com";
  let password: "test123";

  beforeAll(async () => {
    await User.sync({ force: true });
  });

  it("should create a new user", async () => {
    const user = (await UserService.createUser(
      email,
      password
    )) as UserInstance;
    expect(user).not.toBeInstanceOf(Error);
    expect(user).toHaveProperty("id");
    expect(user.email).toBe(email);
  });

  it("should not allow to create a user with existing email", async () => {
    const user = await UserService.createUser(email, password);
    expect(user).toBeInstanceOf(Error);
  });

  it("should find a user by the email", async () => {
    const foundUser = (await UserService.findUserByEmail(
      email
    )) as UserInstance;
    expect(foundUser?.email).toBe(email);
  });

  it("should match the password from database", async () => {
    const user = (await UserService.findUserByEmail(email)) as UserInstance;
    const match = UserService.matchPassword(password, user.password);
    expect(match).toBeTruthy();
  });

  it("should not match the password from database", async () => {
    const user = (await UserService.findUserByEmail(email)) as UserInstance;
    const match = UserService.matchPassword("invalid", user.password);
    expect(match).toBeFalsy();
  });

  it("should get a list of users", async () => {
    const users = await UserService.all();
    expect(users.length).toBeGreaterThan(1);
    users.forEach((user) => {
      expect(user).toBeInstanceOf(User);
    });
  });
});
