import { body } from "express-validator";

export const emailValidator = body("email")
  .trim()
  .notEmpty()
  .withMessage("Email field cannot be empty")
  .bail()
  .isEmail()
  .withMessage("Email is not valid");
