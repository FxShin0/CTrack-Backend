export interface ApiError {
  code: string;
  message: string;
}

export class AppError extends Error {
  constructor(
    public status: number,
    public errors: ApiError[],
  ) {
    super(errors[0]?.message ?? "Unknown error");
    this.name = "AppError";

    Object.setPrototypeOf(this, AppError.prototype);
  }
}
