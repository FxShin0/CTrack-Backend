import { prisma } from "..";
import { getCareersByUniversityAliasDto } from "../dtos/careers/getCareersByUniversityAlias.dto";
import { AppError } from "../errors/AppError";
import { ERRORS } from "../errors/errorCodes";

const getCareersByUniversityAlias = async (
  dto: getCareersByUniversityAliasDto,
) => {
  const { alias } = dto;

  const universityWithCareers = await prisma.university.findUnique({
    where: {
      alias,
    },
    include: {
      careers: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  if (!universityWithCareers)
    throw new AppError(404, [ERRORS.UNIVERSITY_ALIAS_NOT_FOUND]);
  return universityWithCareers.careers;
};

export const careerService = {
  getCareersByUniversityAlias,
};
