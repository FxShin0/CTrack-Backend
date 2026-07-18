export const ERRORS = {
  USERNAME_ALREADY_EXISTS: {
    code: "USERNAME_ALREADY_EXISTS",
    message: (username: string) => {
      return `Username '${username}' is already taken.`;
    },
  },
  EMAIL_ALREADY_EXISTS: {
    code: "EMAIL_ALREADY_EXISTS",
    message: (email: string) => {
      return `Email '${email}' is already in use.`;
    },
  },
  USERNAME_NOT_FOUND: {
    code: "USERNAME_NOT_FOUND",
    message: (username: string) => {
      return `Username '${username}' doesn't exist.`;
    },
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
};
