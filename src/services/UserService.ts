import { User } from "../models/User";
import bcrypt from "bcrypt";

export const createUser = async (email: string, password: string) => {
  const hasUser = await User.findOne({ where: { email } });
  if (!hasUser) {
    const passwordHash = bcrypt.hashSync(password, 10);
    return await User.create({ email, passwordHash });
  } else {
    return new Error("E-mail já existe");
  }
};

export const findUserByEmail = async (email: string) => {
  return await User.findOne({ where: { email } });
};

export const matchPassword = (passwordText: string, encrypted: string) => {
  return bcrypt.compare(passwordText, encrypted);
};

export const all = async () => {
  return await User.findAll();
};
