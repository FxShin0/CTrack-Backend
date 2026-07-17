import { validateFields } from "../../middlewares/validate-fields.middleware";
import { emailValidator } from "../shared/email.validator";
import { nameValidator } from "../shared/name.validator";
import { passwordValidator } from "../shared/password.validator";
import { usernameValidator } from "../shared/username.validator";

export const registerValidator = [
  usernameValidator,
  nameValidator,
  emailValidator,
  passwordValidator,
  validateFields,
];
