import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import { prisma } from "..";
import { ERRORS } from "../errors/errorCodes";
import { authService } from "../services/auth.service";

export const registerUser = async (req: Request, res: Response) => {
  const { username, name, email, password } = req.body;
  const user = await authService.register({ username, email, name, password });

  res.status(201).json({
    success: true,
    data: user,
  });
};
