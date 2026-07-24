import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";
import { ERRORS } from "../errors/errorCodes";
import jwt from "jsonwebtoken";
export interface JwtPayload {
  id: number;
  username: string;
  role: string;
}
declare global {
  namespace Express {
    interface Request {
      user: JwtPayload;
    }
  }
}

export function validateJwt(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies.refreshToken;
  if (!token) throw new AppError(401, [ERRORS.TOKEN_EMPTY]);
  try {
    const payload: JwtPayload = jwt.verify(
      token,
      process.env.SECRET as string,
    ) as JwtPayload;
    req.user = {
      id: payload.id,
      username: payload.username,
      role: payload.role,
    };
  } catch (e) {
    throw new AppError(401, [ERRORS.TOKEN_NOT_VALID]);
  }
  next();
}
