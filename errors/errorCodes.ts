import { STATUS_CODES } from "node:http";
import {
  MAX_PASSWORD_LENGTH,
  MAX_USER_CHAR,
  MIN_PASSWORD_LENGTH,
  MIN_USER_CHAR,
} from "../config/auth/auth";
import {
  SUBJECT_STATUSES,
  subjectStatuses,
} from "../prisma/data/subjectStatuses";

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
  CAREER_ID_NOT_FOUND: {
    code: "CAREER_ID_NOT_FOUND",
    message: "The indicated careerId is non existant",
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
  SUBJECT_ID_EMPTY: {
    code: "SUBJECT_ID_EMPTY",
    message: "Subject id has to be sent as a param, it cannot be empty",
  },
  SUBJECT_ID_NOT_FOUND: {
    code: "SUBJECT_ID_NOT_FOUND",
    message: "The indicated subject id is non existant",
  },
  SUBJECT_ID_NOT_VALID: {
    code: "SUBJECT_ID_NOT_VALID",
    message: "Subject id has to be an integer number",
  },
  TOKEN_EMPTY: {
    code: "TOKEN_EMPTY",
    message: "Token is required and should be sent to verify user.",
  },
  TOKEN_NOT_VALID: {
    code: "TOKEN_NOT_VALID",
    message: "Token is invalid",
  },
  SUBJECT_STATUS_EMPTY: {
    code: "STATUS_EMPTY",
    message: "Status field cannot be empty",
  },
  SUBJECT_STATUS_NOT_VALID: {
    code: "STATUS_NOT_VALID",
    message: `Status can only be one of the following: ${subjectStatuses
      .map((s) => {
        return `'${s}'`;
      })
      .join("-")}`,
  },
  SUBJECT_STATUS_NOT_FOUND: {
    code: "SUBJECT_STATUS_NOT_FOUND",
    message: "The indicated subject status doesn't exist",
  },
};
