/**
 * Reading this as: a personal portfolio for hiring managers.
 * Color and scale from Charlie Le Maignan on Refero (style 34aa811f):
 * obsidian #000000, bone white #ffffff, one alarm red #ed1c24 wall.
 * Work list from Doug-Alves: a name, one figure, fine print, hairline rules.
 *
 * Dials: DESIGN_VARIANCE 8, MOTION_INTENSITY 2, VISUAL_DENSITY 3.
 * Display: Antonio (Brasparz stand-in) at poster scale.
 * Body: Inter 19px, the Neue Haas stand-in.
 *
 * Facts come from the career export. Do not add metrics that are not in
 * that export. Do not link https://shreshtth.me.
 */

export const site = {
  name: "Shreshtth Kumar Agarwaal",
  displayLines: ["Shreshtth", "Kumar", "Agarwaal"] as const,
  roleLine: "AI engineer · master’s student",
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
    title: "Enterprise AI Voice",
    sentence:
      "A production voice platform for customer calls, with latency under 500 ms.",
    figure: { value: "35%", label: "shorter call handling" },
    stack: ["Python", "FastAPI", "LiveKit", "Gemini"],
  },
  {
    title: "COVID-19 Detection",
    sentence: "Chest X-ray classification with Grad-CAM explanations.",
    figure: { value: "20,000+", label: "chest X-ray images" },
    stack: ["Python", "Grad-CAM", "Computer Vision"],
  },
  {
    title: "EduQuery",
    sentence: "Questions answered from university policy documents.",
    stack: ["Flask", "React", "Pinecone", "Hugging Face"],
  },
];

export const contact = [
  { href: `mailto:${site.email}`, kicker: "Email", label: site.email },
  { href: site.linkedin, kicker: "LinkedIn", label: "in/shreshtth-kumar-agarwaal" },
  { href: site.github, kicker: "GitHub", label: "Blackbird-3" },
  { href: site.phoneHref, kicker: "Phone", label: site.phone },
] as const;
