import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/site";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto grid max-w-2xl gap-3">
      {faqs.map((f, i) => {
        const active = open === i;
        return (
          <div
            key={i}
            className="reveal overflow-hidden rounded-2xl border border-border bg-card transition-colors"
          >
            <button
              onClick={() => setOpen(active ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5"
              aria-expanded={active}
            >
              <span className="text-sm font-semibold leading-snug sm:text-base">{f.q}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-primary-dark transition-transform duration-300 ${
                  active ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className="grid transition-all duration-300 ease-out"
              style={{ gridTemplateRows: active ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="px-4 pb-5 text-sm leading-relaxed text-muted-foreground sm:px-5">{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
