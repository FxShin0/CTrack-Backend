import { Request, Response, NextFunction } from "express";

export const isValidEmail = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  //validates email
  const { email } = req.body;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(email)) {
    res.status(400).json({
      msg: "Email is not valid",
    });
    return;
  }
  next();
};
