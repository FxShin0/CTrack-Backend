import { prisma } from "..";

const getUniversities = async () => {
  const universities = await prisma.university.findMany();
  return universities;
};

export const universityService = { getUniversities };
