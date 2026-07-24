import { Request, Response } from "express";
import { authService } from "../services/auth.service";
import { universityService } from "../services/university.service";
import { careerService } from "../services/career.service";
import { subjectService } from "../services/subject.service";
import { trackerService } from "../services/tracker.service";

export const registerUser = async (req: Request, res: Response) => {
  const { username, name, email, password } = req.body;
  const user = await authService.register({ username, email, name, password });

  res.status(201).json({
    success: true,
    data: user,
  });
};

export const registerLogin = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const refreshToken = await authService.login({ username, password });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "PRODUCTION", //for testing in localhost it disables security
    sameSite: "strict",
    maxAge: 1000 * 60 * 60 * 8, //8hr just like the refreshToken
  });
  res.json({
    success: true,
  });
};

export const getUniversities = async (req: Request, res: Response) => {
  const universities = await universityService.getUniversities();
  res.json({
    success: true,
    universities,
  });
};

export const getCareersFromUniversity = async (req: Request, res: Response) => {
  const alias = req.params.alias as string;
  const careers = await careerService.getCareersByUniversityAlias({
    alias,
  });
  res.json({
    success: true,
    careers,
  });
};

export const getSubjectsFromCareer = async (req: Request, res: Response) => {
  const id = Number.parseInt(req.params.id as string);

  const data = await subjectService.getSubjectsFromCareer({ id });

  res.json({
    success: true,
    data,
  });
};

export const setUserSubjectStatus = async (req: Request, res: Response) => {
  const { id } = req.user;
  const { status } = req.body;
  const subjectId = Number.parseInt(req.params.id as string);

  const updatedStatus = await trackerService.setUserSubjectStatus({
    userId: id,
    subjectId,
    status,
  });

  res.json({
    success: true,
    data: {
      status: updatedStatus,
    },
  });
};
