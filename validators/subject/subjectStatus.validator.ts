import { body } from "express-validator";
import { ERRORS } from "../../errors/errorCodes";
import { subjectStatuses } from "../../prisma/data/subjectStatuses";

export const subjectStatusValidator = body("status")
  .notEmpty()
  .withMessage(ERRORS.SUBJECT_STATUS_EMPTY)
  .bail()
  .isIn(subjectStatuses)
  .withMessage(ERRORS.SUBJECT_STATUS_NOT_VALID);
