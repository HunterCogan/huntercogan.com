export interface ExperienceEntry {
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  highlights: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: "Full-Stack Software Engineering Apprentice",
    company: "Flatiron School",
    location: "Remote",
    startDate: "2026-04",
    highlights: [
      "Apprenticing in full-stack development with a focus on AI-assisted engineering workflows.",
      "Serve as Team Lead for a 3-person team, owning repo setup and branching strategy.",
      "Drive architecture decisions and manage task creation and sprint planning.",
    ],
  },
  {
    role: "Web Developer / Front-end Team Lead",
    company: "BridgeGate / Vorro",
    location: "Jacksonville, FL",
    startDate: "2020-11",
    endDate: "2025-12",
    highlights: [
      "Led front-end development for a healthcare legacy system conversion, migrating a Java application to a modern responsive web app.",
      "Directed a developer team through two major builds: a 2021 jQuery/Webpack/Semantic UI release, followed by a 2022-2025 rebuild in React and Redux Toolkit.",
      "Owned code review process, enforcing quality and coding standards before merges to main.",
      "Recruited and technically evaluated new developers, including React skills assessments.",
    ],
  },
  {
    role: "Web Developer",
    company: "Greyscale Technology",
    location: "Jacksonville, FL",
    startDate: "2019-12",
    endDate: "2020-11",
    highlights: [
      "Built WordPress websites focused on user experience.",
      "Resolved client-side issues across multiple concurrent web projects.",
      "Collaborated directly with clients on updates and enhancements.",
    ],
  },
];
