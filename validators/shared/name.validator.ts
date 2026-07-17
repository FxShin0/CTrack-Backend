import { body } from "express-validator";

export const nameValidator = body("name")
  .trim()
  .notEmpty()
  .withMessage("Name field cannot be empty")
  .bail()
  .matches(/^[\p{L}]+(?:['-][\p{L}]+)*(?: [\p{L}]+(?:['-][\p{L}]+)*)*$/u)
  .withMessage("Name field does not have a valid format");
