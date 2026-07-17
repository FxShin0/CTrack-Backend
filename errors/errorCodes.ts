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
};
