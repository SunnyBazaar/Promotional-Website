import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  AudioLines,
  Building2,
  Calendar,
  CarFront,
  CheckCircle2,
  Clapperboard,
  GraduationCap,
  Headphones,
  Image as ImageIcon,
  MapPin,
  Megaphone,
  Mic,
  Phone,
  Rocket,
  Sparkles,
  Star,
  Stethoscope,
  Store,
  Timer,
  Video,
  Volume2,
  Wallet,
} from "lucide-react";
import { Navbar } from "@/components/lmw/Navbar";
import { FloatingWhatsApp } from "@/components/lmw/FloatingWhatsApp";
import { PricingCard } from "@/components/lmw/PricingCard";
import { MediaPlayer } from "@/components/lmw/MediaPlayer";
import { Faq } from "@/components/lmw/Faq";
import { useReveal } from "@/hooks/use-reveal";
import {
  audioPlans,
  GENERAL_WA,
  packages,
  TEL,
  videoPlans,
  wa,
  type MediaKind,
  type Plan,
} from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Local Marketing wala – Digital Promotion for Local Businesses" },
      {
        name: "description",
        content:
          "Local Marketing wala – Digital marketing, audio & video promotion, and yearly branding packages for local businesses in Rampur Jaunpur (U.P).",
      },
      { property: "og:title", content: "Local Marketing wala – Digital Promotion" },
      {
        property: "og:description",
        content:
          "Affordable audio, video & yearly branding packages for local shops, clinics, coaching centers & showrooms.",
      },
    ],
  }),
  component: Index,
});

const audiences = [
  { icon: Store, label: "Local shops & retailers" },
  { icon: GraduationCap, label: "Coaching centers & institutes" },
  { icon: Stethoscope, label: "Clinics & healthcare services" },
  { icon: Building2, label: "Agencies & service businesses" },
  { icon: CarFront, label: "Showrooms & dealerships" },
];

const whatWeDo = [
  { icon: ImageIcon, label: "Digital creatives (posters, social media graphics)" },
  { icon: Volume2, label: "Promotional audio jingles for local announcements" },
  { icon: Video, label: "Promotional videos for branding & offers" },
  { icon: Calendar, label: "Yearly marketing support & packages" },
];

const why = [
  { icon: Wallet, title: "Affordable pricing", desc: "Small businesses ke liye reasonable packages, clear costing bina hidden charges." },
  { icon: MapPin, title: "Local business focused", desc: "Shopkeepers, institutes, clinics, agencies aur retailers ke liye specially designed content." },
  { icon: Timer, title: "Fast delivery", desc: "Simple process, fast turnaround time – promotional content jaldi ready." },
  { icon: Sparkles, title: "Custom marketing content", desc: "Aapke business ke hisaab se customized audio, video & graphics." },
  { icon: Megaphone, title: "WhatsApp support", desc: "Direct WhatsApp par service details, samples aur booking support." },
  { icon: Calendar, title: "Yearly branding solutions", desc: "Long-term packages jo aapke brand ko local audience me top-of-mind rakhte hain." },
];

const audioIcons = [Volume2, Mic, Headphones];
const videoIcons = [Video, Clapperboard, Sparkles];

function SectionHeading({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <div className="reveal mx-auto mb-12 max-w-2xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary-dark">
        {kicker}
      </span>
      <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">{title}</h2>
      {sub && <p className="mt-3 text-muted-foreground">{sub}</p>}
    </div>
  );
}

function Index() {
  useReveal();
  const [player, setPlayer] = useState<{ kind: MediaKind; title: string } | null>(null);

  const openPreview = (kind: MediaKind, plan: Plan) =>
    setPlayer({ kind, title: plan.title });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingWhatsApp />

      {/* HERO */}
      <section id="hero" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute -right-24 top-24 h-96 w-96 rounded-full bg-secondary/15 blur-3xl" />
        </div>
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:py-24 lg:grid-cols-[1.15fr_1fr]">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-primary-dark">
              <Sparkles className="h-3.5 w-3.5" /> Local Business Digital Promotion
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">
              Apne Local Business ko{" "}
              <span className="text-gradient-brand">Digital Promotion</span> do
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Hum aapke dukaan, coaching, clinic, showroom ya service business ke liye digital
              marketing creatives, promotional audio, promotional videos, aur yearly branding
              packages provide karte hain.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Audio | Video | Yearly Promotion Packages – local shopkeepers, institutes, agencies,
              clinics aur retailers ke liye specially designed.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={GENERAL_WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:-translate-y-0.5"
              >
                <Megaphone className="h-5 w-5" /> WhatsApp Now
              </a>
              <a
                href="#packages"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 font-semibold text-foreground transition hover:border-primary/50"
              >
                View Packages
              </a>
            </div>
          </div>

          <div className="reveal">
            <div className="glass rounded-3xl p-6 shadow-2xl sm:p-8">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-bold leading-snug">
                  Local Marketing wala
                  <span className="block text-sm font-medium text-muted-foreground">
                    Rampur Jaunpur (U.P)
                  </span>
                </h3>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-secondary-foreground">
                  <Megaphone className="h-3.5 w-3.5" /> A/V • Yearly
                </span>
              </div>
              <div className="mt-6 grid gap-3">
                {[
                  "Custom creatives for festivals, offers aur daily promotion",
                  "Ready-made promotional audio & video for local market branding",
                  "Yearly packages for consistent digital presence",
                ].map((t) => (
                  <div
                    key={t}
                    className="flex items-start gap-3 rounded-2xl border border-border bg-card/70 p-4 text-sm"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary-dark">
                <MapPin className="h-4 w-4" /> Proudly serving Rampur Jaunpur & nearby
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES / ABOUT */}
      <section id="services" className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            kicker="Hum kya karte hain"
            title="Simple, local-friendly marketing"
            sub="Local Marketing wala ek local-business focused digital promotion service hai, jo aapke business ko online aur audio/video ke through zyada visible banata hai."
          />
          <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
            <div className="reveal rounded-3xl border border-border bg-card p-7">
              <h3 className="text-xl font-bold">Easy-to-understand content</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Hum aapke shop, service ya institute ke liye easy digital marketing content tayar
                karte hain, taki aapko complicated technical cheezon me na jaana pade.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {whatWeDo.map((w) => (
                  <div key={w.label} className="flex items-start gap-3 rounded-2xl bg-surface p-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent">
                      <w.icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm">{w.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal rounded-3xl border border-border bg-card p-7">
              <p className="text-sm font-semibold text-muted-foreground">Suitable for:</p>
              <div className="mt-4 grid gap-3">
                {audiences.map((a) => (
                  <div
                    key={a.label}
                    className="flex items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-3 transition hover:border-primary/40"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary-dark">
                      <a.icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-medium">{a.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AUDIO */}
      <section id="audio" className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            kicker="Audio Services"
            title="Promotional audio jingles"
            sub="Professional audio jo aapke business ka naam, offer aur details ko clear aur attractive tarike se announce karta hai."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {audioPlans.map((p, i) => {
              const Icon = audioIcons[i];
              return (
                <PricingCard
                  key={p.id}
                  plan={p}
                  kind="audio"
                  icon={<Icon className="h-5 w-5" />}
                  onPreview={() => openPreview("audio", p)}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section id="video" className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            kicker="Video Services"
            title="Promotional brand videos"
            sub="Attractive videos jo aapke offers, services aur branding ko local audience tak strong tarike se pahunchate hain."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {videoPlans.map((p, i) => {
              const Icon = videoIcons[i];
              return (
                <PricingCard
                  key={p.id}
                  plan={p}
                  kind="video"
                  icon={<Icon className="h-5 w-5" />}
                  onPreview={() => openPreview("video", p)}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="bg-gradient-to-br from-primary/8 to-secondary/10 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            kicker="Yearly Packages"
            title="Year-round branding support"
            sub="Graphics, videos aur marketing support jo aapke business ko local market me consistently visible banata hai."
          />
          <div className="grid items-stretch gap-6 md:grid-cols-3">
            {packages.map((pkg) => (
              <article
                key={pkg.title}
                className={`reveal relative flex flex-col gap-3 rounded-3xl bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 ${
                  pkg.popular
                    ? "border-2 border-primary shadow-[0_28px_55px_-20px_rgba(255,122,0,0.5)] md:-translate-y-4 md:scale-[1.03]"
                    : "border border-border shadow-[0_14px_35px_-18px_rgba(0,0,0,0.18)]"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary-foreground shadow-md">
                    <Star className="h-3.5 w-3.5 fill-current" /> Most Popular
                  </span>
                )}
                <h3 className="mt-2 text-lg font-bold leading-snug">{pkg.title}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-secondary">{pkg.price}</span>
                  <span className="text-xs text-muted-foreground">/ year</span>
                </div>
                <p className="text-sm font-medium text-primary-dark">{pkg.subtitle}</p>
                <ul className="mt-2 grid gap-2.5 text-sm text-muted-foreground">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={wa(pkg.bookText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition hover:opacity-90 ${
                    pkg.popular
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  Get This Package
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            kicker="Why us"
            title="Kyōn choose karein Local Marketing wala?"
            sub="Practical, local-business focused services jo aapke budget aur ground reality ko dhyān me rakh kar design kiye gaye hain."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {why.map((w) => (
              <div
                key={w.title}
                className="reveal rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/12 text-accent">
                  <w.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-bold">{w.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-5">
          <SectionHeading kicker="Client feedback" title="Trust that grows your brand" />
          <figure className="reveal rounded-3xl border border-border bg-card p-8 shadow-sm">
            <div className="mb-4 flex gap-1 text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <blockquote className="text-lg leading-relaxed">
              “Local Marketing wala ne hamare coaching center ke liye regular graphics aur festive
              videos banaye. WhatsApp aur social media par branding kaafi improve hui hai.”
            </blockquote>
            <figcaption className="mt-5">
              <p className="font-semibold">Sample Client Name</p>
              <p className="text-sm text-muted-foreground">Coaching Center Owner, Rampur Jaunpur</p>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            kicker="FAQ"
            title="Frequently asked questions"
            sub="Kuch basic sawal jinka jawab yaha mil jayega. Detailed discussion ke liye direct WhatsApp par connect kar sakte hain."
          />
          <Faq />
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-secondary py-12 text-secondary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-secondary-foreground/70">
              Coming soon
            </p>
            <h2 className="mt-1 text-xl font-bold sm:text-2xl">
              Website / Software / Performance Marketing
            </h2>
          </div>
          <a
            href={`tel:${TEL}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-lg transition hover:-translate-y-0.5"
          >
            <Phone className="h-5 w-5" /> Call Now
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground py-14 text-background">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[1.3fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary-dark font-extrabold text-primary-foreground">
                LM
              </span>
              <span className="text-lg font-bold">Local Marketing wala</span>
            </div>
            <p className="mt-3 max-w-md text-sm text-background/60">
              Digital Marketing Services for Local Businesses.
            </p>
            <div className="mt-5 grid gap-1.5 text-sm text-background/80">
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> +91 8564965086
              </span>
              <span className="flex items-center gap-2">
                <Megaphone className="h-4 w-4" /> WhatsApp: 9198564965086
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Rampur Jaunpur (U.P)
              </span>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={GENERAL_WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                <Megaphone className="h-4 w-4" /> WhatsApp Now
              </a>
              <a
                href={`tel:${TEL}`}
                className="inline-flex items-center gap-2 rounded-full border border-background/25 px-4 py-2.5 text-sm font-semibold"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
          </div>
          <div className="grid content-start gap-4 text-sm text-background/70">
            <div className="flex items-start gap-3">
              <Rocket className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <p>
                <span className="font-semibold text-background">Services:</span> Digital creatives,
                promotional audio, promotional video, yearly branding packages aur aage chal kar
                website/software/performance marketing solutions.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <AudioLines className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <p>
                <span className="font-semibold text-background">Target:</span> Local shops, coaching
                centers, clinics, retailers, agencies, showrooms aur doosre small businesses.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-6xl border-t border-background/10 px-5 pt-6 text-center text-xs text-background/50">
          © {new Date().getFullYear()} Local Marketing wala – Local Market Digital Promotion Services
        </div>
      </footer>

      <MediaPlayer
        open={!!player}
        kind={player?.kind ?? "audio"}
        title={player?.title ?? ""}
        onClose={() => setPlayer(null)}
      />
    </div>
  );
}
