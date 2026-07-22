import { param } from "express-validator";
import { validateFields } from "../../middlewares/validate-fields.middleware";
import { ERRORS } from "../../errors/errorCodes";
const universityAliasParamValidator = param("alias")
  .trim()
  .notEmpty()
  .withMessage(ERRORS.UNIVERSITY_ALIAS_EMPTY)
  .bail()
  .matches(/^[A-Z]+$/)
  .withMessage(ERRORS.UNIVERSITY_ALIAS_IS_NOT_UPPERCASE_LETTERS);

export const universityAliasValidator = [
  universityAliasParamValidator,
  validateFields,
];
