import { body } from "express-validator";
const MIN_USER_CHAR = 5;
const MAX_USER_CHAR = 32;
export const usernameValidator = body("username")
  .trim()
  .notEmpty()
  .withMessage("Username field cannot be empty")
  .bail()
  .isLength({ min: MIN_USER_CHAR, max: MAX_USER_CHAR })
  .withMessage(
    `Username should be ${MIN_USER_CHAR} to ${MAX_USER_CHAR} characters long.`,
  )
  .bail()
  .matches(/^[A-Za-z0-9_]+$/)
  .withMessage("Username can only contain letters, numbers and underscores");
