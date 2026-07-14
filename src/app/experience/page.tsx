import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { experience } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience | Hunter Cogan",
  description:
    "Hunter Cogan's professional experience, including front-end and full-stack development roles, healthcare legacy system conversions, and an AI-focused apprenticeship.",
};

function formatDate(value: string) {
  const [year, month] = value.split("-").map(Number);
  return new Date(year, month - 1).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        Experience
      </h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Where I&apos;ve worked and what I&apos;ve led.
      </p>

      <div className="mt-12 flex flex-col gap-6">
        {experience.map((entry) => (
          <Card key={`${entry.company}-${entry.startDate}`}>
            <CardHeader>
              <CardTitle className="text-lg">{entry.role}</CardTitle>
              <CardDescription>
                {entry.company} · {entry.location}
              </CardDescription>
              <Badge variant="outline" className="mt-1 w-fit">
                {formatDate(entry.startDate)} –{" "}
                {entry.endDate ? formatDate(entry.endDate) : "Present"}
              </Badge>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                {entry.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
