export interface ProjectEntry {
  title: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
}

export const projects: ProjectEntry[] = [];
