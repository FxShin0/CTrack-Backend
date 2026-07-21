export const getCareerKey = (universityAlias: string, careerName: string) => {
  return `${universityAlias}:${careerName}`;
};

export const getSubjectKey = (subjectCode: string, careerId: number) => {
  return `${careerId}:${subjectCode}`;
};
