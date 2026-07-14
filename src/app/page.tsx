import { XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { site } from "@/data/site";
import { skills } from "@/data/skills";
import { projects } from "@/data/projects";

const featuredProject = projects.find((project) => project.title === "MixGit");

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.title,
  url: "https://huntercogan.com",
  email: site.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.location,
  },
  sameAs: site.socials.map((social) => social.href),
};

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

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
          </div>
        </div>

        <Dialog>
          <DialogTrigger className="cursor-pointer rounded-full outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            <Avatar className="h-36 w-36 shrink-0 sm:h-44 sm:w-44">
              <AvatarImage
                src="/profilePic.JPEG"
                alt={`Portrait of ${site.name}`}
              />
              <AvatarFallback className="text-2xl">HC</AvatarFallback>
            </Avatar>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg" showCloseButton={false}>
            <DialogTitle className="sr-only">
              Portrait of {site.name}
            </DialogTitle>
            <div className="relative">
              <Image
                src="/profilePic.JPEG"
                alt={`Portrait of ${site.name}`}
                width={800}
                height={800}
                className="h-auto w-full rounded-lg object-cover"
              />
              <DialogClose
                render={<Button variant="outline" size="icon" />}
                className="absolute top-3 right-3 rounded-full bg-background/90 shadow-sm backdrop-blur-sm"
              >
                <XIcon className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </DialogClose>
            </div>
          </DialogContent>
        </Dialog>
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

      {featuredProject && (
        <>
          <Separator />

          <section className="py-12">
            <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Featured Project
            </h2>
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">
                  {featuredProject.title}
                </CardTitle>
                <CardDescription>{featuredProject.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  {featuredProject.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {featuredProject.liveUrl && (
                    <Button
                      size="sm"
                      nativeButton={false}
                      render={
                        <Link
                          href={featuredProject.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                        />
                      }
                    >
                      Live Site
                    </Button>
                  )}
                  {featuredProject.repoUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      nativeButton={false}
                      render={
                        <Link
                          href={featuredProject.repoUrl}
                          target="_blank"
                          rel="noreferrer"
                        />
                      }
                    >
                      GitHub
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </section>
        </>
      )}

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
