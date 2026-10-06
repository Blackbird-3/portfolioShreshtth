/**
 * Reading this as: a personal portfolio for hiring managers, copied from
 * Lynn Fisher's v.XIX paper index, with one proof line on each work card.
 *
 * Dials: DESIGN_VARIANCE 5, MOTION_INTENSITY 5, VISUAL_DENSITY 2.
 * Locks: paper beige, near-black ink, red ink in the dark, sharp corners.
 * Type: Cormorant Garamond for the name and page titles. Newsreader to read.
 *
 * Facts come from the career export. Do not add metrics that are not in
 * that export. Do not link https://shreshtth.me.
 */

export const site = {
  name: "Shreshtth Kumar Agarwaal",
  shortName: "Shreshtth",
  displayLines: ["Shreshtth", "Agarwaal"] as const,
  roleLine: "AI engineer in Amberg",
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
  title: string;
  image: string;
  alt: string;
  proof?: string;
};

/** Three plates. Proof only where the export recorded a number. */
export const pieces: Piece[] = [
  {
    title: "Enterprise AI Voice",
    image: "/work/voice.svg",
    alt: "Black plate with white rings, marking the voice platform.",
    proof: "35% shorter call handling",
  },
  {
    title: "COVID-19 Detection",
    image: "/work/xray.svg",
    alt: "Gray plate with a circular frame, marking the chest X-ray study.",
    proof: "20,000+ chest X-rays",
  },
  {
    title: "EduQuery",
    image: "/work/eduquery.svg",
    alt: "A document plate for questions over university policy.",
  },
];

export const contact = [
  { href: "mailto:agarwalshreshth3@gmail.com", label: "Email" },
  { href: "https://www.linkedin.com/in/shreshtth-kumar-agarwaal/", label: "LinkedIn" },
  { href: "https://github.com/Blackbird-3", label: "GitHub" },
  { href: "tel:+4915123606101", label: "+49 15123606101" },
] as const;
