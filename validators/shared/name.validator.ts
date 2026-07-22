import { body } from "express-validator";
import { ERRORS } from "../../errors/errorCodes";

export const nameValidator = body("name")
  .trim()
  .notEmpty()
  .withMessage(ERRORS.NAME_EMPTY)
  .bail()
  .matches(/^[\p{L}]+(?:['-][\p{L}]+)*(?: [\p{L}]+(?:['-][\p{L}]+)*)*$/u)
  .withMessage(ERRORS.NAME_NOT_VALID);
