import { SITE } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24"
    >
      {/* background */}
      <div className="speed-grid absolute inset-0 opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/70 to-ink" />
      <div className="absolute -right-40 top-1/4 h-[480px] w-[480px] rounded-full bg-flame/25 blur-[120px]" />
      <div className="absolute -left-32 bottom-0 h-[360px] w-[360px] rounded-full bg-flame/10 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 md:px-8">
        <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.4em] text-flame animate-fade-up">
          <span className="inline-block h-px w-10 bg-flame" />
          러닝의 새로운 재미
        </p>

        <h1 className="display text-[19vw] leading-[0.82] text-white sm:text-[16vw] md:text-[13rem]">
          <span className="block animate-fade-up">RUNNING</span>
          <span
            className="block italic text-flame animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            should be FUN
          </span>
        </h1>

        <div
          className="mt-8 flex max-w-2xl flex-col gap-6 animate-fade-up sm:flex-row sm:items-center"
          style={{ animationDelay: "0.2s" }}
        >
          <p className="text-base text-white/70 sm:text-lg">
            RUN · TRAIN · SPRINT.
            <br />
            매주 함께 달리는 테이머 러닝 커뮤니티.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#join" className="btn-flame">
              세션 신청 →
            </a>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              인스타그램
            </a>
          </div>
        </div>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/40 md:flex">
        <span className="text-[10px] uppercase tracking-[0.3em]">scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-flame to-transparent" />
      </div>
    </section>
  );
}
