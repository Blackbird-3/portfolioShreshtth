/**
 * Design read: developer portfolio for hiring managers, playful editorial
 * craft with one signature interaction, outcome proof, and a sparse
 * experiments strip. Tailwind utilities, Geist, forest-green accent.
 *
 * Dials: DESIGN_VARIANCE 8, MOTION_INTENSITY 6, VISUAL_DENSITY 3.
 * Locks: forest green accent only, sharp corners, one page theme.
 * Type: Cormorant Garamond for the name, chapters, and figures.
 * Source Sans 3 for reading. IBM Plex Mono for dates.
 *
 * Facts are taken from the career export. Do not add metrics that are
 * not in that export. Do not link https://shreshtth.me.
 * Ranges use a hyphen.
 */

export const site = {
  name: "Shreshtth Kumar Agarwaal",
  shortName: "Shreshtth",
  roleLine: "M.Sc. student, OTH Amberg-Weiden",
  email: "agarwalshreshth3@gmail.com",
  phone: "+49 15123606101",
  phoneHref: "tel:+4915123606101",
  linkedin: "https://www.linkedin.com/in/shreshtth-kumar-agarwaal/",
  github: "https://github.com/Blackbird-3",
  githubHandle: "Blackbird-3",
  program: "M.Sc. Artificial Intelligence for Industrial Applications",
  school: "OTH Amberg-Weiden",
  place: "Amberg, Bavaria",
  degreeWindow: "Mar 2026 - Mar 2028",
  priorDegree: "B.Tech Computer Science and Engineering",
  priorSchool: "BML Munjal University",
  priorWindow: "Aug 2021 - Jul 2025",
  cgpa: "7.9",
  hourCap: "20 hours a week during term, 40 during the semester break",
} as const;

export const contents = [
  { href: "#work", label: "Work" },
  { href: "#figures", label: "Figures" },
  { href: "#experiments", label: "Experiments" },
  { href: "#experience", label: "Path" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Write" },
] as const;

export const nav = [
  { href: "#work", label: "Work" },
  { href: "#experiments", label: "Experiments" },
  { href: "#experience", label: "Path" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Write" },
] as const;

export type ProofStat = {
  value: string;
  label: string;
  detail: string;
};

/** Recorded figures only. The first item is the lead number. */
export const proof: ProofStat[] = [
  {
    value: "35%",
    label: "shorter average call handling",
    detail: "Voice platform, Sftwtrs.ai",
  },
  {
    value: "<500 ms",
    label: "voice interaction latency",
    detail: "Voice platform, Sftwtrs.ai",
  },
  {
    value: "30%",
    label: "faster development cycle",
    detail: "Budgeting tool, MetLife",
  },
  {
    value: "20,000+",
    label: "chest X-ray images",
    detail: "Explainable AI study",
  },
];

export type WorkItem = {
  title: string;
  dates: string;
  org: string;
  summary: string;
  metric: { value: string; label: string };
  facts: { value: string; label: string }[];
  stack: string[];
};

export const work: WorkItem[] = [
  {
    title: "Enterprise AI Voice Automation Platform",
    dates: "Jul 2025 - Sep 2025",
    org: "Sftwtrs.ai, Gurugram",
    summary:
      "Production voice platform that connects telephony with realtime models for customer calls.",
    metric: { value: "35%", label: "shorter average call handling" },
    facts: [
      { value: "5+", label: "concurrent calls supported" },
      { value: "<500 ms", label: "voice interaction latency" },
    ],
    stack: [
      "Python",
      "FastAPI",
      "LiveKit",
      "Gemini API",
      "PostgreSQL",
      "Docker",
    ],
  },
  {
    title: "AuditAI",
    dates: "Jan 2025 - May 2025",
    org: "GlobalLogic, Noida",
    summary:
      "Generative AI audit MVP for scoring, maturity assessment, and summary generation, with PII anonymization.",
    metric: { value: "3+", label: "audit domains supported" },
    facts: [
      { value: "3", label: "automated assessment tasks" },
      { value: "End-to-end", label: "audit workflow automated" },
    ],
    stack: ["Python", "FastAPI", "React", "spaCy", "Microsoft Presidio"],
  },
  {
    title: "Healthcare Conversational AI Platform",
    dates: "2025",
    org: "Sftwtrs.ai, Gurugram",
    summary:
      "Deployed conversational AI for US healthcare professionals, including conversations for people with Down syndrome.",
    metric: { value: "Deployed", label: "production healthcare assistant" },
    facts: [],
    stack: ["Dialogflow CX", "Google Cloud Platform"],
  },
];

export type Experiment = {
  title: string;
  year: string;
  summary: string;
  figure?: { value: string; label: string };
  stack: string[];
};

export const experiments: Experiment[] = [
  {
    title: "Knowledge Graph Integration",
    year: "2025",
    summary:
      "Merged separate knowledge bases and drew the connections as an interactive graph.",
    stack: ["Neo4j", "FalkorDB", "Cypher", "Next.js"],
  },
  {
    title: "AI Recruitment Solution",
    year: "2025",
    summary:
      "Proof of concept for CV matching, scoring, interview requests, and an AI avatar.",
    stack: ["LangGraph", "LangChain", "FastAPI", "Ollama", "Chroma"],
  },
  {
    title: "Sound Slice",
    year: "2024",
    summary:
      "Mobile app for AI music source separation, with a Flutter client and cloud inference.",
    stack: ["Flutter", "FlutterFlow", "Demucs", "Firebase"],
  },
  {
    title: "Explainable AI for COVID-19",
    year: "2024",
    summary:
      "CNN classification of chest X-rays, with Grad-CAM heatmaps across four classes.",
    figure: { value: "20,000+", label: "chest X-ray images" },
    stack: ["Python", "Grad-CAM", "Computer Vision"],
  },
  {
    title: "EduQuery",
    year: "2024",
    summary:
      "Retrieval-augmented app for questions grounded in university policy documents.",
    stack: ["Flask", "React", "Pinecone", "Hugging Face"],
  },
];

export type Role = {
  title: string;
  organization: string;
  place: string;
  dates: string;
  summary: string;
};

export const experience: Role[] = [
  {
    title: "AI Research Engineer",
    organization: "Sftwtrs.ai",
    place: "Gurugram, India",
    dates: "Jun 2025 - Feb 2026",
    summary:
      "Production systems for voice automation, healthcare conversations, and enterprise tools, from model integration through backend and telephony.",
  },
  {
    title: "GenAI and Full Stack Development Intern",
    organization: "GlobalLogic",
    place: "Noida, India",
    dates: "Jan 2025 - May 2025",
    summary:
      "Built the AuditAI MVP: prompts, assessment workflows, a domain-configurable architecture, and the React and FastAPI app.",
  },
  {
    title: "Data Analysis and Visualization Intern",
    organization: "KPMG India",
    place: "Gurugram, India",
    dates: "Jun 2024 - Aug 2024",
    summary:
      "ETL pipelines, Power BI, and DAX for customer and sales data. 5+ dashboards. 20% estimated improvement in decision-making efficiency.",
  },
  {
    title: "Full Stack Development Intern",
    organization: "MetLife Global Shared Services",
    place: "Noida, India",
    dates: "May 2023 - Jul 2023",
    summary:
      "Budgeting tool inside the existing ERP for allocation, monthly accrual, expense mapping, and live budget visibility. Development cycle accelerated 30%.",
  },
];

export const languages = [
  { name: "English", detail: "C1, TOEFL" },
  { name: "German", detail: "B1, currently learning" },
  { name: "Hindi", detail: "Native" },
] as const;
