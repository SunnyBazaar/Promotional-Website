import { MessageCircle } from "lucide-react";
import { GENERAL_WA, SITE_NAME } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={GENERAL_WA}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`WhatsApp chat with ${SITE_NAME}`}
      className="group fixed bottom-4 right-4 z-50 flex items-center gap-2 sm:bottom-5 sm:right-5"
    >
      <span className="pointer-events-none hidden translate-x-2 rounded-full bg-foreground px-3 py-1.5 text-xs font-semibold text-background opacity-0 shadow-lg transition-all group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        Chat with us
      </span>
      <span className="grid h-12 w-12 animate-pulse-ring place-items-center rounded-full bg-whatsapp text-white shadow-xl transition hover:scale-105 active:scale-95 sm:h-14 sm:w-14">
        <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
      </span>
    </a>
  );
}
