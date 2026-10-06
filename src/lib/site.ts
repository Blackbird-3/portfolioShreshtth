/**
 * Reading this as: a personal portfolio for hiring managers. Lynn Fisher's
 * paper index for the shell. Mahnoor Rana's proof card for the three pieces.
 *
 * Dials: DESIGN_VARIANCE 5, MOTION_INTENSITY 5, VISUAL_DENSITY 2.
 * Locks: paper beige, near-black ink, red ink in the dark, one bronze figure,
 * sharp corners.
 * Type: Cormorant Garamond for the name, titles, and figures. Newsreader to read.
 *
 * Facts come from the career export. Do not add metrics that are not in
 * that export. Do not link https://shreshtth.me.
 */

export const site = {
  name: "Shreshtth Kumar Agarwaal",
  shortName: "Shreshtth",
  displayLines: ["Shreshtth", "Kumar", "Agarwaal"] as const,
  roleLine: "AI engineer · master’s student",
  email: "agarwalshreshth3@gmail.com",
  phone: "+49 15123606101",
  phoneHref: "tel:+4915123606101",
  linkedin: "https://www.linkedin.com/in/shreshtth-kumar-agarwaal/",
  github: "https://github.com/Blackbird-3",
  edition: "v. I",
} as const;

export const index = [
  { href: "/work", label: "Work", numeral: "I" },
  { href: "/about", label: "About", numeral: "II" },
] as const;

export type Piece = {
  index: string;
  title: string;
  sentence: string;
  figure?: { value: string; label: string };
  stack: string[];
};

/** Three cards. One recorded figure each, except EduQuery, which has none. */
export const pieces: Piece[] = [
  {
    index: "01",
    title: "Enterprise AI Voice",
    sentence:
      "A production voice platform for customer calls, with latency under 500 ms.",
    figure: { value: "35%", label: "shorter call handling" },
    stack: ["Python", "FastAPI", "LiveKit", "Gemini"],
  },
  {
    index: "02",
    title: "COVID-19 Detection",
    sentence: "Chest X-ray classification with Grad-CAM explanations.",
    figure: { value: "20,000+", label: "chest X-ray images" },
    stack: ["Python", "Grad-CAM", "Computer Vision"],
  },
  {
    index: "03",
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
