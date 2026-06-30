import Logo from "./Logo";
import { SITE } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-14 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <div className="text-3xl text-white">
            <Logo />
          </div>
          <p className="mt-3 text-sm text-white/50">
            Running should be FUN · 러닝의 새로운 재미
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs font-semibold uppercase tracking-widest text-white/60">
          <a href="#programs" className="hover:text-flame">
            Programs
          </a>
          <a href="#sessions" className="hover:text-flame">
            Sessions
          </a>
          <a href="#crew" className="hover:text-flame">
            Crew
          </a>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noreferrer"
            className="hover:text-flame"
          >
            Instagram
          </a>
        </div>
      </div>
      <div className="border-t border-white/5 px-5 py-6 text-center text-[11px] uppercase tracking-widest text-white/30 md:px-8">
        © {new Date().getFullYear()} TAMER RUNNING. RUN · TRAIN · SPRINT.
      </div>
    </footer>
  );
}
