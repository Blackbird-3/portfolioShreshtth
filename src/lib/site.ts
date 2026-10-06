/**
 * Design read: solo developer / AI engineer portfolio for hiring managers,
 * with a calm editorial-minimal language, leaning toward Tailwind utilities
 * + restrained motion + strong typography.
 *
 * Dials: DESIGN_VARIANCE 6, MOTION_INTENSITY 5, VISUAL_DENSITY 4.
 * Locks: copper accent only (hue stays, value shifts for contrast),
 * corner radius 0, one page-level theme (light / dark / system).
 *
 * Edit this file to add real projects, roles, and an email.
 * Use a hyphen for ranges. Do not add https://shreshtth.me.
 */

export const site = {
  name: "Shreshtth Kumar Agarwaal",
  shortName: "Shreshtth",
  roleLine: "M.Sc. student, OTH Amberg-Weiden",
  linkedin: "https://www.linkedin.com/in/shreshtth-kumar-agarwaal/",
  email: "",
  program: "M.Sc. Artificial Intelligence for Industrial Applications",
  school: "OTH Amberg-Weiden",
  place: "Amberg, Bavaria",
  studyPlanUrl:
    "https://www.oth-aw.de/en/studies/study-offers/study-programmes/master/artificial-intelligence-industrial-applications/structure/",
} as const;

export const nav = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;

export type Role = {
  title: string;
  organization: string;
  dates: string;
  summary: string;
};

/** Leave empty until there is a real position to list. */
export const experience: Role[] = [];

export type Project = {
  title: string;
  summary: string;
  href: string;
};

/**
 * Empty title renders an open-project placeholder.
 * Example:
 * { title: "Project name", summary: "One sentence on what you built.", href: "https://example.com" }
 */
export const projects: Project[] = [
  { title: "", summary: "", href: "" },
  { title: "", summary: "", href: "" },
  { title: "", summary: "", href: "" },
];

export const openProjectCopy = [
  "Add a name, a one-line summary, and a link.",
  "A second project can go here.",
  "A third project can go here.",
] as const;

/** Compulsory modules from the published OTH Amberg-Weiden study plan. */
export const studyGroups = [
  {
    title: "Vision and robotics",
    modules: ["Deep Learning", "Computer Vision and AI"],
  },
  {
    title: "Data and language",
    modules: [
      "Machine Learning",
      "Modern Databases and NoSQL",
      "Natural Language Processing and Information Retrieval",
    ],
  },
  {
    title: "Applications",
    modules: ["AI Project", "Interdisciplinary Topic"],
  },
  {
    title: "Scientific training",
    modules: [
      "AI Conference",
      "Scientific Research and Methods",
      "Master thesis",
    ],
  },
] as const;

export const languages = [
  { name: "German", detail: "B1" },
  { name: "English", detail: "Working language of this site" },
] as const;
