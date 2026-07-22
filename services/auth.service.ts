import bcrypt from "bcryptjs";
import { prisma } from "..";
import { ERRORS } from "../errors/errorCodes";
import { RegisterDto } from "../dtos/auth/register.dto";
import { AppError } from "../errors/AppError";
import { LoginDto } from "../dtos/auth/login.dto";
import jwt from "jsonwebtoken";

const register = async (dto: RegisterDto) => {
  const { username, name, email, password } = dto;
  const encryptedPassword = await (async () => {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(password, salt);
  })();
  const userExists = await prisma.appUser.findUnique({
    where: { username: username },
  });
  if (userExists) throw new AppError(409, [ERRORS.USERNAME_ALREADY_EXISTS]);

  const emailExists = await prisma.appUser.findUnique({
    where: { email: email },
  });

  if (emailExists) throw new AppError(409, [ERRORS.EMAIL_ALREADY_EXISTS]);

  const user = await prisma.appUser.create({
    data: {
      username: username,
      name: name,
      email: email,
      password: encryptedPassword,
      verified: true, //For now as nodemailer system isn't implemented yet, TO DO: email verification.
    },
  });
  return { username: user.username, name: user.name, email: user.email };
};

const login = async (dto: LoginDto) => {
  const { username, password } = dto;

  const user = await prisma.appUser.findUnique({
    where: {
      username: username,
    },
  });

  if (!user) throw new AppError(404, [ERRORS.USERNAME_NOT_FOUND]);

  if (!user.verified) throw new AppError(401, [ERRORS.USER_NOT_VERIFIED]);

  const isCorrectPassword = await (() => {
    return bcrypt.compare(password, user.password);
  })();

  if (!isCorrectPassword) throw new AppError(401, [ERRORS.INCORRECT_PASSWORD]);

  const signedToken = jwt.sign(
    { username: user.username, id: user.id, role: user.role },
    process.env.SECRET as string,
    { expiresIn: "8h" },
  );

  return signedToken;
};

export const authService = {
  register,
  login,
};
