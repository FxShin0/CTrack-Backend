import { prisma } from "..";
import { getSubjectsFromCareerDto } from "../dtos/subjects/getSubjectsFromCareer.dto";
import { AppError } from "../errors/AppError";
import { ERRORS } from "../errors/errorCodes";

const getSubjectsFromCareer = async (dto: getSubjectsFromCareerDto) => {
  const { id } = dto;
  const career = await prisma.career.findUnique({
    where: { id },

    select: {
      name: true,

      subjects: {
        select: {
          id: true,
          code: true,
          name: true,
          year: true,
          period: true,
          weeklyHours: true,

          periodType: {
            select: {
              name: true,
            },
          },

          subjectType: {
            select: {
              name: true,
            },
          },

          subjectCategory: {
            select: {
              name: true,
            },
          },

          prerequisites: {
            select: {
              requiredSubject: {
                select: {
                  id: true,
                  code: true,
                  name: true,
                },
              },
            },
          },
        },
      },
    },
  });

  if (!career) throw new AppError(404, [ERRORS.CAREER_ID_NOT_FOUND]);

  const response = career.subjects.map((subject) => {
    return {
      id: subject.id,
      code: subject.code,
      name: subject.name,
      year: subject.year,
      period: subject.period,
      weeklyHours: subject.weeklyHours,

      periodType: subject.periodType?.name ?? null,
      subjectType: subject.subjectType.name,
      subjectCategory: subject.subjectCategory.name,

      prerequisites: subject.prerequisites.map((p) => ({
        id: p.requiredSubject.id,
        code: p.requiredSubject.code,
        name: p.requiredSubject.name,
      })),
    };
  });

  return response;
};

export const subjectService = {
  getSubjectsFromCareer,
};
