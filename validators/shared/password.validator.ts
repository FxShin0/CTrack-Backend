import { body } from "express-validator";
import { ERRORS } from "../../errors/errorCodes";
import {
  MAX_PASSWORD_LENGTH,
  MIN_PASSWORD_LENGTH,
} from "../../config/auth/auth";
export const passwordValidator = body("password")
  .trim()
  .notEmpty()
  .withMessage(ERRORS.PASSWORD_EMPTY)
  .bail()
  .isLength({ min: MIN_PASSWORD_LENGTH, max: MAX_PASSWORD_LENGTH })
  .bail()
  .withMessage(ERRORS.PASSWORD_LENGTH_NOT_VALID);
