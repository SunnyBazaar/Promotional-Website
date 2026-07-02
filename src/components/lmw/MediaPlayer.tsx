import { useEffect, useRef, useState } from "react";
import { Pause, Play, X, AudioLines, Clapperboard } from "lucide-react";
import { wa, type MediaKind } from "@/lib/site";

interface Props {
  open: boolean;
  onClose: () => void;
  kind: MediaKind;
  title: string;
}

export function MediaPlayer({ open, onClose, kind, title }: Props) {
  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (open) {
      setPlaying(true);
      setProgress(0);
    }
  }, [open, title]);

  useEffect(() => {
    if (!open || !playing) return;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      setProgress((p) => (p + dt / 24) % 1);
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [open, playing]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const bars = Array.from({ length: 28 });
  const total = 24;
  const cur = Math.floor(progress * total);
  const fmt = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} preview`}
    >
      <button
        aria-label="Close preview"
        onClick={onClose}
        className="absolute inset-0 bg-foreground/50 backdrop-blur-sm animate-[reveal-up_.3s_ease]"
      />
      <div className="relative w-full max-w-lg origin-bottom animate-[reveal-up_.45s_cubic-bezier(.22,1,.36,1)] rounded-t-3xl border border-border bg-card p-4 shadow-2xl sm:rounded-3xl sm:p-8">
        <div className="mx-auto mb-5 h-1.5 w-12 rounded-full bg-muted sm:hidden" />
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition hover:bg-muted hover:text-foreground"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary-dark">
            {kind === "audio" ? (
              <AudioLines className="h-6 w-6" />
            ) : (
              <Clapperboard className="h-6 w-6" />
            )}
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              {kind} preview
            </p>
            <h3 className="truncate text-lg font-bold">{title}</h3>
          </div>
        </div>

        {/* Visualizer */}
        <div className="mt-6 overflow-hidden rounded-2xl bg-gradient-to-br from-secondary to-primary-dark p-4 sm:p-6">
          {kind === "video" && (
            <div className="mb-4 grid aspect-video w-full place-items-center rounded-xl bg-foreground/20 text-primary-foreground/70">
              <Clapperboard className="h-10 w-10" />
            </div>
          )}
          <div className="flex h-20 items-end justify-center gap-0.5 sm:gap-1">
            {bars.map((_, i) => {
              const h = playing ? 20 + Math.abs(Math.sin(i * 0.6 + progress * 18)) * 78 : 24;
              return (
                <span
                  key={i}
                  className="w-1 rounded-full bg-primary-foreground/80 transition-[height] duration-150 sm:w-1.5"
                  style={{ height: `${h}%` }}
                />
              );
            })}
          </div>
        </div>

        {/* Progress */}
        <div className="mt-5 flex items-center gap-3">
          <span className="text-xs tabular-nums text-muted-foreground">{fmt(cur)}</span>
          <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-primary"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
          <span className="text-xs tabular-nums text-muted-foreground">{fmt(total)}</span>
        </div>

        <div className="mt-6 grid gap-3 sm:flex sm:items-center sm:justify-between">
          <button
            onClick={() => setPlaying((p) => !p)}
            className="mx-auto grid h-14 w-14 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition hover:scale-105 active:scale-95 sm:mx-0"
            aria-label={playing ? "Pause" : "Play"}
          >
            {playing ? <Pause className="h-6 w-6" /> : <Play className="ml-0.5 h-6 w-6" />}
          </button>
          <a
            href={wa(`Hello, I would like to book ${title}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-0 flex-1 rounded-full bg-secondary px-5 py-3 text-center text-sm font-semibold text-secondary-foreground transition hover:opacity-90"
          >
            Book {title} on WhatsApp
          </a>
        </div>
        <p className="mt-3 text-center text-xs text-muted-foreground">
          Demo visualizer - actual samples are shared on WhatsApp after consultation.
        </p>
      </div>
    </div>
  );
}
