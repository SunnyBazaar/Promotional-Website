import { useEffect, useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { GENERAL_WA } from "@/lib/site";

const links = [
  { href: "#services", label: "Services" },
  { href: "#audio", label: "Audio" },
  { href: "#video", label: "Video" },
  { href: "#packages", label: "Packages" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: (el as HTMLElement).offsetTop - 76, behavior: "smooth" });
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-sm" : "bg-background/0"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a href="#hero" onClick={(e) => go(e, "#hero")} className="flex min-w-0 items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary-dark font-extrabold text-primary-foreground shadow-md shadow-primary/30">
            LM
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-sm font-extrabold sm:text-base">
              Local Marketing wala
            </span>
            <span className="block truncate text-[11px] text-muted-foreground">
              Digital Promotion for Local Businesses
            </span>
          </span>
        </a>

        <div className="flex items-center gap-1">
          <nav className="mr-2 hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => go(e, l.href)}
                className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href={GENERAL_WA}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/30 transition hover:-translate-y-0.5 hover:shadow-lg sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Now
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-xl text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border glass px-5 pb-5 pt-2 lg:hidden">
          <nav className="grid gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => go(e, l.href)}
                className="rounded-xl px-3 py-3 text-sm font-medium text-foreground transition hover:bg-muted"
              >
                {l.label}
              </a>
            ))}
            <a
              href={GENERAL_WA}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}