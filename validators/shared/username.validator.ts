import { body } from "express-validator";
import { MAX_USER_CHAR, MIN_USER_CHAR } from "../../config/auth/auth";
import { ERRORS } from "../../errors/errorCodes";
export const usernameValidator = body("username")
  .trim()
  .notEmpty()
  .withMessage(ERRORS.USERNAME_EMPTY)
  .bail()
  .isLength({ min: MIN_USER_CHAR, max: MAX_USER_CHAR })
  .withMessage(ERRORS.USERNAME_LENGTH_NOT_VALID)
  .bail()
  .matches(/^[A-Za-z0-9_]+$/)
  .withMessage(ERRORS.USERNAME_NOT_VALID);
