import { Request, Response } from "express";

export const registerUser = (req: Request, res: Response) => {
  const { username, name, email, password } = req.body;
  //body content validation
  if (!username || !email || !password || !name) {
    res.status(400).json({
      msg: "Missing fields in request, must contain username, name, email and password.",
    });
    return;
  }
  //validates that the chosen username is composed of only letters, numbers and underscores.
  const usernameRegex = new RegExp("^[A-Za-z0-9_]+$");
  if (!usernameRegex.test(username)) {
    res.status(400).json({
      msg: "Username can only contain letters, numbers and underscores",
    });
    return;
  }
  //validates name
  const nameRegex =
    /^[\p{L}]+(?:['-][\p{L}]+)*(?: [\p{L}]+(?:['-][\p{L}]+)*)*$/u;
  if (!nameRegex.test(name)) {
    res.status(400).json({
      msg: "Name is not valid",
    });
    return;
  }

  //validates email
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(email)) {
    res.status(400).json({
      msg: "Email is not valid",
    });
    return;
  }

  res.json({
    msg: "Usuario created... I think :p",
    accData: { username, email, password },
  });
};
