export interface ProjectEntry {
  title: string;
  description: string;
  tags: string[];
  company?: string;
  startDate?: string;
  endDate?: string;
  repoUrl?: string;
  liveUrl?: string;
}

export const projects: ProjectEntry[] = [
  {
    title: "MixGit",
    description:
      "An educational platform that introduces version control and collaborative coding to beginner programmers learning Scratch block-coding. Students upload .sb3 projects (JSON), create student-friendly \"remixes\" instead of branches, collaborate on projects in real time, and get AI-powered code feedback from Claude tuned for younger readers.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Claude API",
    ],
    liveUrl: "https://mixgit.tech/",
    repoUrl: "https://github.com/HunterCogan/mixgit",
  },
  {
    title: "Legacy Healthcare App — Front-End Rebuild",
    description:
      "Rebuilt the front end for a component of a legacy Java healthcare application into a modern, responsive web interface. A private, client-owned system behind authentication, no public demo available.",
    tags: ["jQuery", "Webpack", "Semantic UI"],
    company: "BridgeGate",
    startDate: "2020",
    endDate: "2022",
  },
  {
    title: "Legacy Healthcare App — React Rebuild",
    description:
      "Led the next phase of the same legacy Java healthcare application's conversion, rebuilding it in React with Redux Toolkit for state management and Material UI for the component library. A private, client-owned system behind authentication, no public demo available.",
    tags: ["React", "Redux Toolkit", "Material UI"],
    company: "Vorro",
    startDate: "2022",
    endDate: "2025",
  },
];
