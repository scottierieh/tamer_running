import { MEMBERS } from "@/lib/data";

export default function Crew() {
  return (
    <section id="crew" className="relative bg-ink-soft py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-flame">
              THE CREW
            </p>
            <h2 className="display text-5xl text-white md:text-7xl">MEET TAMER</h2>
          </div>
          <p className="max-w-sm text-white/60">
            각자의 트랙을 이끄는 테이머 크루. 계정을 팔로우하고 매주 세션 소식을
            받아보세요.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MEMBERS.map((m) => (
            <a
              key={m.handle}
              href={m.url}
              target="_blank"
              rel="noreferrer"
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-ink p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-flame/60"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-flame display text-2xl text-ink">
                  {m.name.charAt(0)}
                </div>
                <span className="text-white/30 transition-colors group-hover:text-flame">
                  ↗
                </span>
              </div>
              <div className="mt-10">
                <h3 className="display text-3xl text-white">{m.name}</h3>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-widest text-flame">
                  {m.role}
                </p>
                <p className="mt-3 text-sm text-white/50 transition-colors group-hover:text-white/80">
                  {m.handle}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
