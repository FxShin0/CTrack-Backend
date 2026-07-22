import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";

export function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (err instanceof AppError) {
    return res.status(err.status).json({
      success: false,
      errors: err.errors,
    });
  }

  console.error(err);

  return res.status(500).json({
    success: false,
    errors: [
      {
        code: "INTERNAL_SERVER_ERROR",
        message: "Ha ocurrido un error inesperado del servidor.",
      },
    ],
  });
}
