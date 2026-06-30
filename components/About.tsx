import { STATS } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <div className="grid gap-14 md:grid-cols-2 md:gap-20">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-flame">
            ABOUT US
          </p>
          <h2 className="display text-5xl text-white md:text-7xl">
            달리는 건
            <br />
            <span className="outline-flame">즐거워야</span> 한다
          </h2>
        </div>
        <div className="flex flex-col justify-center gap-6 text-lg leading-relaxed text-white/70">
          <p>
            테이머 러닝은 기록만을 쫓지 않습니다. 트랙 위의 폭발적인 스피드,
            함께 땀 흘리는 트레이닝, 그리고 끝나고 나누는 하이파이브까지 —
            러닝의 모든 순간을 즐깁니다.
          </p>
          <p>
            초보부터 러너까지, 누구나 자신의 페이스로 한계를 넘습니다.
            <span className="text-flame"> Run. Train. Sprint.</span> 매주
            새로운 재미가 기다립니다.
          </p>
        </div>
      </div>

      {/* stats */}
      <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 md:grid-cols-4">
        {STATS.map((s) => (
          <div
            key={s.label}
            className="bg-ink/60 p-8 text-center transition-colors hover:bg-flame/10"
          >
            <div className="display text-5xl text-flame md:text-6xl">
              {s.value}
            </div>
            <div className="mt-2 text-[11px] font-semibold uppercase tracking-widest text-white/50">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
