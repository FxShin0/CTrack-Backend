import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { mapValidationError } from "../errors/mapValidationError";

export function validateFields(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array().map(mapValidationError),
    });
  }

  next();
}
