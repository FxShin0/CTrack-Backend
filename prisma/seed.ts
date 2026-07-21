import {
  Career,
  PeriodType,
  PrismaClient,
  Subject,
  SubjectCategory,
  SubjectStatus,
  SubjectType,
  University,
} from "@prisma/client";
import { data } from "./data";
import { getCareerKey, getSubjectKey } from "./keyGenerators";
import { careerSubjectData } from "./data/subjects";

const prisma = new PrismaClient();

async function main() {
  const universitiesMap = new Map<string, University>(); //using alias as key
  for (const university of data.universities) {
    universitiesMap.set(
      university.alias,
      await prisma.university.upsert({
        where: { alias: university.alias },
        update: university,
        create: university,
      }),
    );
  }

  const periodTypesMap = new Map<string, PeriodType>(); //using name of periodType as key
  for (const periodType of data.periodTypes) {
    periodTypesMap.set(
      periodType,
      await prisma.periodType.upsert({
        where: { name: periodType },
        update: { name: periodType },
        create: { name: periodType },
      }),
    );
  }

  const subjectTypesMap = new Map<string, SubjectType>();
  for (const subjectType of data.subjectTypes) {
    subjectTypesMap.set(
      subjectType,
      await prisma.subjectType.upsert({
        where: { name: subjectType },
        update: { name: subjectType },
        create: { name: subjectType },
      }),
    );
  }

  const subjectCategoriesMap = new Map<string, SubjectCategory>();
  for (const subjectCategory of data.subjectCategories) {
    subjectCategoriesMap.set(
      subjectCategory,
      await prisma.subjectCategory.upsert({
        where: { name: subjectCategory },
        update: { name: subjectCategory },
        create: { name: subjectCategory },
      }),
    );
  }

  const subjectStatusesMap = new Map<string, SubjectStatus>();
  for (const subjectStatus of data.subjectStatuses) {
    subjectStatusesMap.set(
      subjectStatus,
      await prisma.subjectStatus.upsert({
        where: { name: subjectStatus },
        update: { name: subjectStatus },
        create: { name: subjectStatus },
      }),
    );
  }

  const careersMap = new Map<string, number>();
  for (const career of data.careers) {
    let universityId = universitiesMap.get(career.universityAlias)!.id;
    let careerBD = await prisma.career.upsert({
      where: {
        universityId_name: {
          name: career.data.name,
          universityId,
        },
      },
      update: { ...career.data },
      create: {
        ...career.data,
        universityId,
      },
    });

    careersMap.set(
      getCareerKey(career.universityAlias, career.data.name),
      careerBD.id,
    );
  }

  const subjectsIdMap = new Map<string, number>();
  for (const career of careerSubjectData) {
    for (const subject of career.subjects) {
      let periodTypeId = periodTypesMap.get(
        subject.subjectMaps.periodTypeName,
      )!.id;
      let subjectCategoryId = subjectCategoriesMap.get(
        subject.subjectMaps.subjectCategoryName,
      )!.id;
      let subjectTypeId = subjectTypesMap.get(
        subject.subjectMaps.subjectTypeName,
      )!.id;
      let careerId = careersMap.get(
        getCareerKey(career.universityAlias, career.careerName),
      )!;

      let subjectBD = await prisma.subject.upsert({
        where: {
          careerId_code: { careerId: careerId, code: subject.subjectData.code },
        },
        create: {
          ...subject.subjectData,
          periodTypeId,
          subjectCategoryId,
          subjectTypeId,
          careerId,
        },
        update: {
          ...subject.subjectData,
          periodTypeId,
          subjectCategoryId,
          subjectTypeId,
          careerId,
        },
      });

      subjectsIdMap.set(
        getSubjectKey(subject.subjectData.code, careerId),
        subjectBD.id,
      );
    }
  }

  for (const career of data.careerSubjectData) {
    for (const subject of career.subjects) {
      for (const prerequisite of subject.prerequisites) {
        let careerId = careersMap.get(
          getCareerKey(career.universityAlias, career.careerName),
        )!;
        let subjectId = subjectsIdMap.get(
          getSubjectKey(subject.subjectData.code, careerId),
        )!;
        let requiredSubjectId = subjectsIdMap.get(
          getSubjectKey(prerequisite, careerId),
        )!;

        await prisma.subjectPrerequisite.upsert({
          where: {
            subjectId_requiredSubjectId: {
              subjectId,
              requiredSubjectId,
            },
          },
          create: { subjectId, requiredSubjectId },
          update: { subjectId, requiredSubjectId },
        });
      }
    }
  }
}
main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
