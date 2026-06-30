import { PROGRAMS } from "@/lib/data";

export default function Programs() {
  return (
    <section id="programs" className="relative bg-ink-soft py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-flame">
              WHAT WE DO
            </p>
            <h2 className="display text-5xl text-white md:text-7xl">PROGRAMS</h2>
          </div>
          <p className="max-w-sm text-white/60">
            세 가지 컨셉으로 매주 다른 강도의 세션을 운영합니다. 오늘의 나에게
            맞는 트랙을 골라보세요.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {PROGRAMS.map((p) => (
            <article
              key={p.title}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-ink p-8 transition-all duration-300 hover:-translate-y-2 hover:border-flame/60"
            >
              <div className="absolute -right-6 -top-8 display text-9xl text-white/5 transition-colors group-hover:text-flame/10">
                {p.tag}
              </div>
              <h3 className="display relative text-4xl text-white transition-colors group-hover:text-flame md:text-5xl">
                {p.title}
              </h3>
              <p className="relative mt-4 flex-1 text-white/60">{p.desc}</p>
              <ul className="relative mt-6 flex flex-col gap-2">
                {p.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex items-center gap-3 text-sm text-white/80"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-flame" />
                    {pt}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
