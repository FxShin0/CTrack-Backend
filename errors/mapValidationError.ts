import { ValidationError } from "express-validator";
import { ApiError } from "./AppError";

export const mapValidationError = (error: ValidationError): ApiError => {
  return {
    code: error.msg.code,
    message: error.msg.message,
  };
};
