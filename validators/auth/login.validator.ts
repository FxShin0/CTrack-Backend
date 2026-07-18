import { validateFields } from "../../middlewares/validate-fields.middleware";
import { passwordValidator } from "../shared/password.validator";
import { usernameValidator } from "../shared/username.validator";

export const loginValidator = [
  usernameValidator,
  passwordValidator,
  validateFields,
];
