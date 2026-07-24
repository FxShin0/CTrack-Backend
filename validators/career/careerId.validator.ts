import { param } from "express-validator";
import { validateFields } from "../../middlewares/validate-fields.middleware";
import { ERRORS } from "../../errors/errorCodes";
const careerIdParamValidator = param("id")
  .trim()
  .notEmpty()
  .withMessage(ERRORS.CAREER_ID_EMPTY)
  .bail()
  .isInt()
  .withMessage(ERRORS.CAREER_ID_IS_NOT_INTEGER);

export const careerIdValidator = [careerIdParamValidator, validateFields];
