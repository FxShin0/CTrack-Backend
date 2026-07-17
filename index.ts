import express from "express";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
import { registerUser } from "./controllers/controllers";
import { registerValidator } from "./validators/auth/register.validator";
import { errorHandler } from "./middlewares/error-handler.middleware";

dotenv.config();
export const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Escuchando en PORT ${PORT}`);
});

//endpoints
app.post("/register", registerUser);

//global middlewares
app.use(errorHandler);
