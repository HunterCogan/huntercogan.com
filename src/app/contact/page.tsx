import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact | Hunter Cogan",
  description:
    "Get in touch with Hunter Cogan by email, LinkedIn, or GitHub, or download his resume.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        Contact
      </h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Reach out by email, connect on LinkedIn, or check out my code on
        GitHub.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <Card>
          <CardContent className="flex flex-col gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="text-base">{site.email}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Phone</p>
              <p className="text-base">{site.phone}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="text-base">{site.location}</p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                nativeButton={false}
                render={<Link href="/Resume.pdf" download target="_blank" />}
              >
                Download Resume
              </Button>
              {site.socials.map((social) => (
                <Button
                  key={social.href}
                  variant="outline"
                  nativeButton={false}
                  render={
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                    />
                  }
                >
                  {social.label}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Send a message</CardTitle>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
