import {
  MAX_PASSWORD_LENGTH,
  MAX_USER_CHAR,
  MIN_PASSWORD_LENGTH,
  MIN_USER_CHAR,
} from "../config/auth/auth";

export const ERRORS = {
  USERNAME_ALREADY_EXISTS: {
    code: "USERNAME_ALREADY_EXISTS",
    message: `Username is already taken.`,
  },
  EMAIL_EMPTY: {
    code: "EMAIL_EMPTY",
    message: "Email field cannot be empty",
  },
  EMAIL_NOT_VALID: {
    code: "EMAIL_NOT_VALID",
    message: "Email is not in a valid format",
  },
  EMAIL_ALREADY_EXISTS: {
    code: "EMAIL_ALREADY_EXISTS",
    message: `Email is already in use.`,
  },
  NAME_EMPTY: {
    code: "NAME_EMPTY",
    message: "Name field cannot be empty",
  },
  NAME_NOT_VALID: {
    code: "NAME_NOT_VALID",
    message: "Name field does not have a valid format",
  },
  USERNAME_EMPTY: {
    code: "USERNAME_EMPTY",
    message: "Username field cannot be empty",
  },
  USERNAME_LENGTH_NOT_VALID: {
    code: "USERNAME_LENGTH_NOT_VALID",
    message: `Username should be ${MIN_USER_CHAR} to ${MAX_USER_CHAR} characters long.`,
  },
  USERNAME_NOT_VALID: {
    code: "USERNAME_NOT_VALID",
    message: "Username can only contain letters, numbers and underscores",
  },
  USERNAME_NOT_FOUND: {
    code: "USERNAME_NOT_FOUND",
    message: `Username doesn't exist.`,
  },
  PASSWORD_EMPTY: {
    code: "PASSWORD_EMPTY",
    message: "Password field cannot be empty",
  },
  PASSWORD_LENGTH_NOT_VALID: {
    code: "PASSWORD_NOT_VALID",
    message: `Password should be ${MIN_PASSWORD_LENGTH} to ${MAX_PASSWORD_LENGTH} characters long.`,
  },
  INCORRECT_PASSWORD: {
    code: "INCORRECT_PASSWORD",
    message: "The indicated password isn't correct.",
  },
  USER_NOT_VERIFIED: {
    code: "USER_NOT_VERIFIED",
    message:
      "Cannot login since user isn't verified, complete email verification and then try again.",
  },
  UNIVERSITY_ALIAS_NOT_FOUND: {
    code: "UNIVERSITY_ALIAS_NOT_FOUND",
    message: `Indicated alias doesn't exist`,
  },
  CAREER_ID_EMPTY: {
    code: "CAREER_ID_EMPTY",
    message: "careerId has to be sent as a param, it cannot be empty.",
  },
  CAREER_ID_IS_NOT_INTEGER: {
    code: "CAREER_ID_IS_NOT_INTEGER",
    message: "careerId has to be an integer number",
  },
  UNIVERSITY_ALIAS_EMPTY: {
    code: "UNIVERSITY_ALIAS_EMPTY",
    message: "University alias has to be sent as a param, it cannot be empty",
  },
  UNIVERSITY_ALIAS_IS_NOT_UPPERCASE_LETTERS: {
    code: "UNIVERSITY_ALIAS_IS_NOT_UPPERCASE_LETTERS",
    message:
      "University Alias can only be uppercase letters from A-Z. IE: 'UNLAM'.",
  },
};
