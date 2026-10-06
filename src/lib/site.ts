/**
 * Reading this as: a personal portfolio for hiring managers, with Lynn
 * Fisher's narrow column and Mahnoor's proof on a few projects.
 *
 * Dials: DESIGN_VARIANCE 6, MOTION_INTENSITY 5, VISUAL_DENSITY 2.
 * Locks: one ink color (red in dark mode), sharp corners, one theme.
 * Type: Bricolage Grotesque for the name and figures. Newsreader for reading.
 *
 * Facts come from the career export. Do not add metrics that are not in
 * that export. Do not link https://shreshtth.me.
 */

export const site = {
  name: "Shreshtth Kumar Agarwaal",
  shortName: "Shreshtth",
  roleLine: "AI / ML engineer, master's student at OTH Amberg-Weiden",
  email: "agarwalshreshth3@gmail.com",
  phone: "+49 15123606101",
  phoneHref: "tel:+4915123606101",
  linkedin: "https://www.linkedin.com/in/shreshtth-kumar-agarwaal/",
  github: "https://github.com/Blackbird-3",
} as const;

export type Piece = {
  title: string;
  sentence: string;
  figure?: { value: string; label: string };
  stack: string[];
};

/** Three pieces. One recorded figure each, except EduQuery, which has none. */
export const pieces: Piece[] = [
  {
    title: "Enterprise AI Voice Platform",
    sentence:
      "A production voice platform for customer calls, with latency under 500 ms.",
    figure: { value: "35%", label: "shorter average call handling" },
    stack: ["Python", "FastAPI", "LiveKit", "Gemini"],
  },
  {
    title: "Explainable AI for COVID-19 Detection",
    sentence: "Chest X-ray classification with Grad-CAM explanations.",
    figure: { value: "20,000+", label: "chest X-ray images" },
    stack: ["Python", "Grad-CAM"],
  },
  {
    title: "EduQuery",
    sentence: "Retrieval over university policy documents.",
    stack: ["Flask", "React", "Pinecone"],
  },
];

export const craft = {
  title: "Sound Slice",
  sentence: "A small mobile app that separates a song into stems.",
} as const;
