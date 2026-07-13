import { Separator } from "@/components/ui/separator";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer>
      <Separator />
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {site.name}
        </p>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <span>{site.email}</span>
          <span>{site.phone}</span>
          {site.socials.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-foreground"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
