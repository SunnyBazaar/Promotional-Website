import { Play } from "lucide-react";
import { wa, type MediaKind, type Plan } from "@/lib/site";

interface Props {
  plan: Plan;
  kind: MediaKind;
  icon: React.ReactNode;
  onPreview: () => void;
}

export function PricingCard({ plan, kind, icon, onPreview }: Props) {
  return (
    <article className="reveal group flex flex-col gap-4 rounded-3xl border border-border bg-card p-6 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_24px_45px_-18px_rgba(255,122,0,0.35)]">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary-dark transition group-hover:bg-primary group-hover:text-primary-foreground">
            {icon}
          </span>
          <div className="min-w-0">
            <h3 className="truncate font-bold">{plan.title}</h3>
            <p className="truncate text-xs text-muted-foreground">{plan.tagline}</p>
          </div>
        </div>
        <span className="shrink-0 text-xl font-extrabold text-secondary">{plan.price}</span>
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">{plan.desc}</p>
      <div className="mt-auto grid gap-2 pt-2">
        <button
          onClick={onPreview}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-4 py-2.5 text-sm font-semibold text-foreground transition hover:border-primary/50 hover:text-primary-dark"
        >
          <Play className="h-4 w-4" /> Play Preview
        </button>
        <a
          href={wa(`Namaste, mujhe ${plan.id} book karna hai.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-secondary px-4 py-2.5 text-sm font-semibold text-secondary-foreground transition hover:opacity-90"
        >
          Book on WhatsApp
        </a>
      </div>
    </article>
  );
}