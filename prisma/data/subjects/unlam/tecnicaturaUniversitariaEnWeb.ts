import { CAREER_NAMES } from "../../careers";
import { UNIVERSITY_ALIASES } from "../../universities";

//NOTE: Prerequisites is an array of subjectCodes

export const unlamTecnicaturaUniversitariaEnWeb = {
  subjects: [
    //YEAR 1
    {
      subjectData: {
        code: "2619",
        name: "Programacion Basica I",
        year: 1,
        period: 1,
        weeklyHours: 8,
      },
      subjectMaps: {
        subjectTypeName: "Obligatoria",
        subjectCategoryName: "Especifica",
        periodTypeName: "Cuatrimestral",
      },
      prerequisites: [],
    },
    {
      subjectData: {
        code: "2620",
        name: "Informatica General",
        year: 1,
        period: 1,
        weeklyHours: 4,
      },
      subjectMaps: {
        subjectTypeName: "Obligatoria",
        subjectCategoryName: "Especifica",
        periodTypeName: "Cuatrimestral",
      },
      prerequisites: [],
    },
    {
      subjectData: {
        code: "2621",
        name: "Matematica General",
        year: 1,
        period: 1,
        weeklyHours: 8,
      },
      subjectMaps: {
        subjectTypeName: "Obligatoria",
        subjectCategoryName: "Especifica",
        periodTypeName: "Cuatrimestral",
      },
      prerequisites: [],
    },
    {
      subjectData: {
        code: "2622",
        name: "Ingles Tecnico I",
        year: 1,
        period: 1,
        weeklyHours: 4,
      },
      subjectMaps: {
        subjectTypeName: "Obligatoria",
        subjectCategoryName: "Especifica",
        periodTypeName: "Cuatrimestral",
      },
      prerequisites: [],
    },
    {
      subjectData: {
        code: "2623",
        name: "Programacion Basica II",
        year: 1,
        period: 2,
        weeklyHours: 4,
      },
      subjectMaps: {
        subjectTypeName: "Obligatoria",
        subjectCategoryName: "Especifica",
        periodTypeName: "Cuatrimestral",
      },
      prerequisites: ["2619"],
    },
    {
      subjectData: {
        code: "2624",
        name: "Programacion Web I",
        year: 1,
        period: 2,
        weeklyHours: 4,
      },
      subjectMaps: {
        subjectTypeName: "Obligatoria",
        subjectCategoryName: "Especifica",
        periodTypeName: "Cuatrimestral",
      },
      prerequisites: ["2619", "2620"],
    },
    {
      subjectData: {
        code: "2625",
        name: "Bases de Datos I",
        year: 1,
        period: 2,
        weeklyHours: 8,
      },
      subjectMaps: {
        subjectTypeName: "Obligatoria",
        subjectCategoryName: "Especifica",
        periodTypeName: "Cuatrimestral",
      },
      prerequisites: ["2619", "2620", "2621"],
    },
    {
      subjectData: {
        code: "2626",
        name: "Introduccion al Diseño Grafico en la Web",
        year: 1,
        period: 2,
        weeklyHours: 4,
      },
      subjectMaps: {
        subjectTypeName: "Obligatoria",
        subjectCategoryName: "Especifica",
        periodTypeName: "Cuatrimestral",
      },
      prerequisites: ["2620"],
    },
    {
      subjectData: {
        code: "2627",
        name: "Ingles Tecnico II",
        year: 1,
        period: 2,
        weeklyHours: 4,
      },
      subjectMaps: {
        subjectTypeName: "Obligatoria",
        subjectCategoryName: "Especifica",
        periodTypeName: "Cuatrimestral",
      },
      prerequisites: ["2622"],
    },
    //YEAR 2
    {
      subjectData: {
        code: "2628",
        name: "Programacion Web II",
        year: 2,
        period: 1,
        weeklyHours: 8,
      },
      subjectMaps: {
        subjectTypeName: "Obligatoria",
        subjectCategoryName: "Especifica",
        periodTypeName: "Cuatrimestral",
      },
      prerequisites: ["2623", "2624", "2625"],
    },
    {
      subjectData: {
        code: "2629",
        name: "Diseños de Aplicaciones Web",
        year: 2,
        period: 1,
        weeklyHours: 8,
      },
      subjectMaps: {
        subjectTypeName: "Obligatoria",
        subjectCategoryName: "Especifica",
        periodTypeName: "Cuatrimestral",
      },
      prerequisites: ["2623", "2624", "2625"],
    },
    {
      subjectData: {
        code: "2630",
        name: "Visualizaciones e Interfaces",
        year: 2,
        period: 1,
        weeklyHours: 4,
      },
      subjectMaps: {
        subjectTypeName: "Obligatoria",
        subjectCategoryName: "Especifica",
        periodTypeName: "Cuatrimestral",
      },
      prerequisites: ["2624", "2626"],
    },
    {
      subjectData: {
        code: "2631",
        name: "Taller Web I",
        year: 2,
        period: 1,
        weeklyHours: 4,
      },
      subjectMaps: {
        subjectTypeName: "Obligatoria",
        subjectCategoryName: "Especifica",
        periodTypeName: "Cuatrimestral",
      },
      prerequisites: ["2623", "2624", "2625"],
    },
    {
      subjectData: {
        code: "2632",
        name: "Base de Datos II",
        year: 2,
        period: 2,
        weeklyHours: 4,
      },
      subjectMaps: {
        subjectTypeName: "Obligatoria",
        subjectCategoryName: "Especifica",
        periodTypeName: "Cuatrimestral",
      },
      prerequisites: ["2625", "2629"],
    },
    {
      subjectData: {
        code: "2633",
        name: "Programacion Web III",
        year: 2,
        period: 2,
        weeklyHours: 8,
      },
      subjectMaps: {
        subjectTypeName: "Obligatoria",
        subjectCategoryName: "Especifica",
        periodTypeName: "Cuatrimestral",
      },
      prerequisites: ["2628", "2629", "2630"],
    },
    {
      subjectData: {
        code: "2634",
        name: "Tecnologia de Redes",
        year: 2,
        period: 2,
        weeklyHours: 4,
      },
      subjectMaps: {
        subjectTypeName: "Obligatoria",
        subjectCategoryName: "Especifica",
        periodTypeName: "Cuatrimestral",
      },
      prerequisites: ["2630"],
    },
    {
      subjectData: {
        code: "2635",
        name: "Taller Web II",
        year: 2,
        period: 2,
        weeklyHours: 4,
      },
      subjectMaps: {
        subjectTypeName: "Obligatoria",
        subjectCategoryName: "Especifica",
        periodTypeName: "Cuatrimestral",
      },
      prerequisites: ["2631"],
    },
    {
      subjectData: {
        code: "2636",
        name: "Seguridad y Calidad en Aplicaciones Web",
        year: 2,
        period: 2,
        weeklyHours: 4,
      },
      subjectMaps: {
        subjectTypeName: "Obligatoria",
        subjectCategoryName: "Especifica",
        periodTypeName: "Cuatrimestral",
      },
      prerequisites: ["2628", "2629"],
    },
    //YEAR 3
    {
      subjectData: {
        code: "2637",
        name: "Introduccion a la Administracion de Proyectos",
        year: 3,
        period: 1,
        weeklyHours: 4,
      },
      subjectMaps: {
        subjectTypeName: "Obligatoria",
        subjectCategoryName: "Especifica",
        periodTypeName: "Cuatrimestral",
      },
      prerequisites: ["2632", "2633", "2634"],
    },
    {
      subjectData: {
        code: "2638",
        name: "Taller Practico Integrador",
        year: 3,
        period: 1,
        weeklyHours: 8,
      },
      subjectMaps: {
        subjectTypeName: "Obligatoria",
        subjectCategoryName: "Especifica",
        periodTypeName: "Cuatrimestral",
      },
      prerequisites: ["2632", "2633", "2634", "2635", "2636"],
    },
  ],
  careerName: CAREER_NAMES.UNLAM.TECNICATURA_UNIVERSITARIA_EN_WEB,
  universityAlias: UNIVERSITY_ALIASES.UNLAM,
};
