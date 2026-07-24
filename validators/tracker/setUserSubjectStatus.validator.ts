import { validateFields } from "../../middlewares/validate-fields.middleware";
import { subjectIdValidator } from "../subject/subjectId.validator";
import { subjectStatusValidator } from "../subject/subjectStatus.validator";

export const setUserSubjectStatusValidator = [
  subjectIdValidator,
  subjectStatusValidator,
  validateFields,
];
