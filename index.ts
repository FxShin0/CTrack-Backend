import express from "express";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
import { registerUser } from "./controllers/controllers";

dotenv.config();
export const prisma = new PrismaClient();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Escuchando en PORT ${PORT}`);
});

//endpoints
app.post("/register", registerUser);
