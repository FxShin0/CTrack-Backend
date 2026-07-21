import express from "express";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
import {
  getUniversities,
  registerLogin,
  registerUser,
} from "./controllers/controllers";
import { registerValidator } from "./validators/auth/register.validator";
import { errorHandler } from "./middlewares/error-handler.middleware";
import { loginValidator } from "./validators/auth/login.validator";
import cookieParser from "cookie-parser";

dotenv.config();
export const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cookieParser());

app.listen(PORT, () => {
  console.log(`Escuchando en PORT ${PORT}`);
});

//endpoints
app.post("/register", registerValidator, registerUser);
app.post("/login", loginValidator, registerLogin);

app.get("/universities", getUniversities);

//global middlewares
app.use(errorHandler);
