import { Prisma } from "@prisma/client";
import { prisma } from "..";
import { setUserSubjectStatusDto } from "../dtos/tracker/setUserSubjectStatus.dto";
import { SUBJECT_STATUSES } from "../prisma/data/subjectStatuses";
import { stat } from "node:fs";
import { AppError } from "../errors/AppError";
import { ERRORS } from "../errors/errorCodes";

const setUserSubjectStatus = async (dto: setUserSubjectStatusDto) => {
  const { userId, subjectId, status } = dto;
  const statusRecord = await prisma.subjectStatus.findUnique({
    where: {
      name: status,
    },
  })!;
  if (statusRecord === null)
    throw new AppError(404, [ERRORS.SUBJECT_STATUS_NOT_FOUND]);

  const newStatus = await prisma.userSubject.upsert({
    where: {
      userId_subjectId: {
        userId,
        subjectId,
      },
    },
    create: {
      userId,
      subjectId,
      statusId: statusRecord.id,
    },
    update: {
      userId,
      subjectId,
      statusId: statusRecord.id,
    },
  });

  return status;
};

export const trackerService = {
  setUserSubjectStatus,
};
