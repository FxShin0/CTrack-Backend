import { body } from "express-validator";
const MIN_PASSWORD_LENGTH = 5;
const MAX_PASSWORD_LENGTH = 128;
export const passwordValidator = body("password")
  .trim()
  .notEmpty()
  .withMessage("Password field cannot be empty")
  .bail()
  .isLength({ min: MIN_PASSWORD_LENGTH, max: MAX_PASSWORD_LENGTH })
  .bail()
  .withMessage(
    `Password should be ${MIN_PASSWORD_LENGTH} to ${MAX_PASSWORD_LENGTH} characters long.`,
  );
