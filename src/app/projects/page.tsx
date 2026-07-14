import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects, type ProjectEntry } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Hunter Cogan",
  description:
    "A selection of projects Hunter Cogan has built and worked on, from client work to personal projects like MixGit.",
};

function formatPeriod(project: ProjectEntry) {
  if (!project.startDate) {
    return null;
  }
  return project.endDate
    ? `${project.startDate} – ${project.endDate}`
    : project.startDate;
}

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        Projects
      </h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        A mix of client work and things I&apos;ve built on my own. More on the
        way.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => {
          const meta = [project.company, formatPeriod(project)]
            .filter(Boolean)
            .join(" · ");

          return (
            <Card key={project.title} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                {meta && <CardDescription>{meta}</CardDescription>}
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-4">
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-2">
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      nativeButton={false}
                      render={
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                        />
                      }
                    >
                      Live Site
                    </Button>
                  )}
                  {project.repoUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      nativeButton={false}
                      render={
                        <Link
                          href={project.repoUrl}
                          target="_blank"
                          rel="noreferrer"
                        />
                      }
                    >
                      GitHub
                    </Button>
                  )}
                  {!project.liveUrl && !project.repoUrl && (
                    <Badge variant="secondary">Private client project</Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
