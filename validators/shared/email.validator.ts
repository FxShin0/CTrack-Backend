import { body } from "express-validator";
import { ERRORS } from "../../errors/errorCodes";

export const emailValidator = body("email")
  .trim()
  .notEmpty()
  .withMessage(ERRORS.EMAIL_EMPTY)
  .bail()
  .isEmail()
  .withMessage(ERRORS.EMAIL_NOT_VALID);
