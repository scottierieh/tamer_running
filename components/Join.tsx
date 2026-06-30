import { SITE } from "@/lib/data";

export default function Join() {
  return (
    <section id="join" className="relative overflow-hidden bg-flame py-24 md:py-36">
      <div className="speed-grid absolute inset-0 opacity-30 mix-blend-overlay" />
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-[100px]" />

      <div className="relative mx-auto max-w-5xl px-5 text-center md:px-8">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.5em] text-ink/70">
          READY · SET
        </p>
        <h2 className="display text-6xl leading-[0.85] text-ink sm:text-7xl md:text-[8rem]">
          LET&apos;S
          <br />
          <span className="italic">RUN TOGETHER</span>
        </h2>
        <p className="mx-auto mt-7 max-w-xl text-base text-ink/75 md:text-lg">
          다음 세션의 자리는 선착순으로 채워집니다. 운동화 끈 묶고, 지금 바로
          신청하세요.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={SITE.joinForm}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-9 py-4 text-sm font-bold uppercase tracking-wider text-white transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            세션 신청하기 →
          </a>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/30 px-9 py-4 text-sm font-bold uppercase tracking-wider text-ink transition-colors hover:bg-ink/10"
          >
            {SITE.instagramHandle}
          </a>
        </div>
      </div>
    </section>
  );
}
