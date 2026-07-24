import { param } from "express-validator";
import { ERRORS } from "../../errors/errorCodes";

export const subjectIdValidator = param("id")
  .trim()
  .notEmpty()
  .withMessage(ERRORS.SUBJECT_ID_EMPTY)
  .bail()
  .isInt()
  .withMessage(ERRORS.SUBJECT_ID_NOT_VALID);
