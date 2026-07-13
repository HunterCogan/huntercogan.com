import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { site } from "@/data/site";
import { skills } from "@/data/skills";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <section className="flex flex-col-reverse items-start gap-10 py-20 sm:flex-row sm:items-center sm:justify-between sm:py-28">
        <div className="flex flex-col gap-6">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            {site.title}
          </p>
          <h1 className="max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Hi, I&apos;m {site.name}.
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">{site.summary}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button size="lg" nativeButton={false} render={<Link href="/experience" />}>
              View Experience
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={<Link href="/projects" />}
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="ghost"
              nativeButton={false}
              render={<Link href="/Resume.pdf" download target="_blank" />}
            >
              Download Resume
            </Button>
          </div>
        </div>

        <Avatar className="h-36 w-36 shrink-0 sm:h-44 sm:w-44">
          <AvatarImage src="/profilePic.JPEG" alt={`Portrait of ${site.name}`} />
          <AvatarFallback className="text-2xl">HC</AvatarFallback>
        </Avatar>
      </section>

      <Separator />

      <section className="py-12">
        <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Skills
        </h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="outline" className="h-auto px-4 py-1.5 text-sm">
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      <Separator />

      <section className="py-12">
        <p className="text-sm text-muted-foreground">
          Based in {site.location}. Get in touch on the{" "}
          <Link
            href="/contact"
            className="text-accent underline-offset-4 hover:underline"
          >
            contact page
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
