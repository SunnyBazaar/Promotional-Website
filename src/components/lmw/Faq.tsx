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
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={active}
            >
              <span className="font-semibold">{f.q}</span>
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
                <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
