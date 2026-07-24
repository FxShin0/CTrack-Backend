import express from "express";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
import {
  getCareersFromUniversity,
  getSubjectsFromCareer,
  getUniversities,
  registerLogin,
  registerUser,
  setUserSubjectStatus,
} from "./controllers/controllers";
import { registerValidator } from "./validators/auth/register.validator";
import { errorHandler } from "./middlewares/error-handler.middleware";
import { loginValidator } from "./validators/auth/login.validator";
import cookieParser from "cookie-parser";
import { universityAliasValidator } from "./validators/university/universityAlias.validator";
import { careerIdValidator } from "./validators/career/careerId.validator";
import { subjectIdValidator } from "./validators/subject/subjectId.validator";
import { validateJwt } from "./middlewares/validate-jwt.middleware";
import { setUserSubjectStatusValidator } from "./validators/tracker/setUserSubjectStatus.validator";

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
app.get(
  "/universities/:alias/careers",
  universityAliasValidator,
  getCareersFromUniversity,
);
app.get("/careers/:id/subjects", careerIdValidator, getSubjectsFromCareer);

app.put(
  "/users/me/subjects/:id",
  setUserSubjectStatusValidator,
  validateJwt,
  setUserSubjectStatus,
);

//global middlewares
app.use(errorHandler);
