import { MessageCircle } from "lucide-react";
import { GENERAL_WA, SITE_NAME } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={GENERAL_WA}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`WhatsApp chat with ${SITE_NAME}`}
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2"
    >
      <span className="pointer-events-none hidden translate-x-2 rounded-full bg-foreground px-3 py-1.5 text-xs font-semibold text-background opacity-0 shadow-lg transition-all group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        Chat with us
      </span>
      <span className="grid h-14 w-14 animate-pulse-ring place-items-center rounded-full bg-whatsapp text-white shadow-xl transition hover:scale-105 active:scale-95">
        <MessageCircle className="h-7 w-7" />
      </span>
    </a>
  );
}
