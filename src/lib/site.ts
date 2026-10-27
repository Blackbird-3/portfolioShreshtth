/**
 * Facts come from the career export. Do not add metrics, links, or
 * employers that are not in that export or in this file already.
 * Do not link https://shreshtth.me.
 */

export const site = {
  name: "Shreshtth Kumar Agarwaal",
  displayLines: ["Shreshtth", "Kumar", "Agarwaal"] as const,
  roleLine: "AI research engineer · software engineer",
  email: "agarwalshreshth3@gmail.com",
  linkedin: "https://www.linkedin.com/in/shreshtth-kumar-agarwaal/",
  github: "https://github.com/Blackbird-3",
  cv: "/cv/shreshtth-agarwaal-cv.pdf",
} as const;

export const nav = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;

export type Piece = {
  id: string;
  title: string;
  kicker: string;
  sentence: string;
  figure?: { value: string; label: string };
  stack: string[];
  problem: string;
  built: string;
  decisions: string[];
  steps?: string[];
  cover: string;
};

export const pieces: Piece[] = [
  {
    id: "auditai",
    title: "AuditAI",
    cover: "/media/clouds.jpg",
    kicker: "GlobalLogic · internship",
    sentence: "An audit platform that drafts the assessment, then waits for a person before the report ships.",
    stack: ["React", "FastAPI", "spaCy", "Presidio"],
    problem:
      "Audit work repeats the same assessment, scoring, and write-up, and two reviewers can score the same answer differently.",
    built:
      "I built the MVP. A domain holds its own question bank. An LLM scores a response, suggests a maturity level, writes a summary, and asks a follow-up when the answer is thin. A reviewer still signs off.",
    decisions: [
      "One configurable domain model, so IT, compliance, and finance audits do not each need a new app.",
      "Names and other personal data are stripped with spaCy and Microsoft Presidio before the model sees the text.",
      "The report stays a draft until someone reviews it.",
    ],
  },
  {
    id: "ai-call-automation",
    title: "AI Call Automation",
    cover: "/media/cover-voice.jpg",
    kicker: "Sftwtrs.ai · client work",
    sentence: "A production voice system for customer calls, built for a client, not as a side project.",
    stack: ["LiveKit", "SIP", "FastAPI", "PostgreSQL", "Supabase", "Docker"],
    problem:
      "The client needed phone calls handled in real time, on the telephony they already use, without a long pause between turns.",
    built:
      "I worked on the call path: LiveKit for the media session, SIP and Tata SmartFlo for the dialer, and a FastAPI service that keeps the conversation in PostgreSQL through Supabase. Docker carries the production setup.",
    decisions: [
      "Speech stays on a streaming path, with barge-in, so the caller can interrupt.",
      "Session state lives in the database, not in the process, so a call can be recovered.",
    ],
  },
  {
    id: "eduquery",
    title: "EduQuery",
    cover: "/media/cover-eduquery.jpg",
    kicker: "University policy search",
    sentence: "Students ask a question and get an answer taken from the college’s own documents.",
    stack: ["Flask", "React", "Pinecone", "Hugging Face", "AWS"],
    problem:
      "Policy documents are long, and a model that answers from memory will invent a rule the college never wrote.",
    built:
      "Documents are split, embedded with Hugging Face, and stored in Pinecone. Flask retrieves the closest passages and puts them in the prompt. React is the chat, with Appwrite for sign-in. The app was deployed on AWS.",
    decisions: [
      "The model only sees retrieved passages, so an institution-specific answer has a source.",
      "Sign-in sits in front of the documents.",
    ],
    steps: ["Documents", "Chunks", "Embeddings", "Pinecone", "Flask", "Answer"],
  },
];

export type Role = {
  id: string;
  title: string;
  org: string;
  dates: string;
  points: { before?: string; href?: string; label?: string; after?: string; text?: string }[];
};

export const roles: Role[] = [
  {
    id: "sftwtrs",
    title: "AI Research Engineer",
    org: "Sftwtrs.ai",
    dates: "June 2025 – January 2026",
    points: [
      {
        before: "",
        href: "#ai-call-automation",
        label: "AI call automation",
        after: " for client work, with LiveKit, SIP, and Tata SmartFlo.",
      },
      { text: "Backend services and the database behind the calls: PostgreSQL, Supabase, and Docker." },
      { text: "Production infrastructure, technical notes, and day-to-day work with the engineering team." },
    ],
  },
  {
    id: "globallogic",
    title: "GenAI and Full Stack Development Intern",
    org: "GlobalLogic",
    dates: "January 2025 – May 2025",
    points: [
      {
        before: "Built ",
        href: "#auditai",
        label: "AuditAI",
        after: " in React and FastAPI, with a workflow that can be reconfigured per audit domain.",
      },
      { text: "Anonymization with spaCy and Microsoft Presidio, and a human review step before a report is final." },
    ],
  },
  {
    id: "kpmg",
    title: "Data Analysis and Visualization Intern",
    org: "KPMG India",
    dates: "June 2024 – August 2024",
    points: [
      { text: "ETL pipelines that pulled, cleaned, and joined data from more than one source." },
      { text: "Power BI dashboards and DAX over customer and sales data." },
    ],
  },
  {
    id: "metlife",
    title: "Full Stack Development Intern",
    org: "MetLife Global Shared Services",
    dates: "May 2023 – July 2023",
    points: [
      { text: "Angular, .NET MVC, and Microsoft SQL Server inside an existing ERP." },
      { text: "Automated team budget allocation, monthly accrual, and the report people actually opened." },
    ],
  },
];

export const research = {
  lead: "The master’s at OTH Amberg-Weiden is the place I am taking this further. I have not published from it. When a university project is far enough along to show, it belongs here.",
  interests: [
    "Generative AI and RAG",
    "LLM systems and AI-assisted software engineering",
    "Computer vision and explainable AI",
    "Agentic workflows",
    "Robotics and AI experiments",
  ],
};

export const education = [
  {
    id: "oth",
    degree: "M.Sc. Artificial Intelligence for Industrial Applications",
    school: "OTH Amberg-Weiden",
    place: "Amberg, Germany",
    dates: "March 2026 – Present",
  },
  {
    id: "bmu",
    degree: "B.Tech. Computer Science and Engineering",
    school: "BML Munjal University",
    place: "Gurugram, India",
    dates: "August 2021 – July 2025",
  },
] as const;

export const otherProjects = [
  {
    id: "sound-slice",
    title: "Sound Slice",
    sentence: "A Flutter app that separates a song into stems. Audio goes up, Demucs runs through an inference API, and the stems come back.",
    stack: ["Flutter", "Firebase", "Demucs"],
  },
  {
    id: "style-transfer",
    title: "Neural Image and Video Style Transfer",
    sentence: "A deep learning project that transfers a visual style onto images and video.",
    stack: ["Neural style transfer"],
  },
  {
    id: "covid-19-detection",
    title: "Explainable AI for COVID Detection",
    sentence:
      "A CNN on chest X-rays, with Grad-CAM so you can see where the model was looking. It is a study on the COVID-19 Radiography Database, not a diagnostic tool.",
    stack: ["Python", "Grad-CAM", "20,000+ images"],
  },
] as const;

export const skillGroups = [
  {
    label: "Programming Languages",
    items: ["Python", "Java", "C", "C++", "C#", "JavaScript", "TypeScript", "Dart"],
  },
  {
    label: "AI / ML",
    items: [
      "RAG",
      "LLM integration",
      "Hugging Face Transformers",
      "LangChain",
      "spaCy",
      "Microsoft Presidio",
      "Computer vision",
      "Explainable AI",
    ],
  },
  { label: "Backend", items: ["FastAPI", "Flask", "Node.js", ".NET MVC"] },
  { label: "Frontend", items: ["React", "Angular", "Flutter", "Tailwind CSS", "Shadcn"] },
  {
    label: "Databases and Data",
    items: ["PostgreSQL", "Microsoft SQL Server", "Supabase", "Pinecone", "Chroma", "Firestore", "SQL", "Power BI"],
  },
  { label: "Infrastructure and Tools", items: ["Docker", "AWS", "Git", "GitHub", "Vercel", "Postman"] },
] as const;

export const contact = [
  { href: `mailto:${site.email}`, kicker: "Email", label: site.email },
  { href: site.linkedin, kicker: "LinkedIn", label: "in/shreshtth-kumar-agarwaal" },
  { href: site.github, kicker: "GitHub", label: "Blackbird-3" },
  { href: site.cv, kicker: "CV", label: "PDF" },
] as const;
