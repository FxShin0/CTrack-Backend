import bcrypt from "bcryptjs";
import { prisma } from "..";
import { ERRORS } from "../errors/errorCodes";
import { RegisterDto } from "../dtos/auth/register.dto";
import { AppError } from "../errors/AppError";

export const authService = {
  register: async (dto: RegisterDto) => {
    const { username, name, email, password } = dto;
    const encryptedPassword = await (async () => {
      const salt = await bcrypt.genSalt();
      return await bcrypt.hash(password, salt);
    })();
    const userExists = await prisma.appUser.findUnique({
      where: { username: username },
    });
    if (userExists)
      throw new AppError(
        409,
        ERRORS.USERNAME_ALREADY_EXISTS.code,
        ERRORS.USERNAME_ALREADY_EXISTS.message(username),
      );

    const emailExists = await prisma.appUser.findUnique({
      where: { email: email },
    });

    if (emailExists)
      throw new AppError(
        409,
        ERRORS.EMAIL_ALREADY_EXISTS.code,
        ERRORS.EMAIL_ALREADY_EXISTS.message(email),
      );

    const user = await prisma.appUser.create({
      data: {
        username: username,
        name: name,
        email: email,
        password: encryptedPassword,
      },
    });
    return { username, name, email };
  },
};
