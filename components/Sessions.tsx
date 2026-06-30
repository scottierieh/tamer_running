import { SESSIONS, SITE } from "@/lib/data";

const STATUS = {
  open: { label: "신청 가능", cls: "bg-flame text-ink" },
  soon: { label: "오픈 예정", cls: "bg-white/10 text-white/70" },
  closed: { label: "마감", cls: "bg-white/5 text-white/40" },
} as const;

export default function Sessions() {
  return (
    <section id="sessions" className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <div className="mb-14">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-flame">
          UPCOMING
        </p>
        <h2 className="display text-5xl text-white md:text-7xl">SESSIONS</h2>
      </div>

      <div className="flex flex-col gap-3">
        {SESSIONS.map((s) => {
          const st = STATUS[s.status];
          const open = s.status === "open";
          return (
            <div
              key={s.date + s.title}
              className="group grid grid-cols-2 items-center gap-4 rounded-2xl border border-white/10 bg-ink-soft p-6 transition-colors hover:border-flame/50 md:grid-cols-[140px_1fr_1fr_auto] md:gap-8 md:p-8"
            >
              <div className="flex flex-col">
                <span className="display text-4xl text-flame md:text-5xl">
                  {s.date}
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-white/40">
                  {s.day}
                </span>
              </div>

              <div className="col-span-2 order-last md:order-none md:col-span-1">
                <h3 className="display text-2xl text-white md:text-3xl">
                  {s.title}
                </h3>
                <span className="mt-1 inline-block text-xs font-bold uppercase tracking-[0.3em] text-flame">
                  CONCEPT · {s.concept}
                </span>
              </div>

              <div className="text-right md:text-left">
                <p className="text-sm text-white/80">{s.place}</p>
                <p className="mt-1 text-xs text-white/45">{s.capacity}</p>
              </div>

              <div className="flex items-center justify-start md:justify-end">
                {open ? (
                  <a
                    href={SITE.joinForm}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-flame !px-6 !py-3"
                  >
                    신청 →
                  </a>
                ) : (
                  <span
                    className={`rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider ${st.cls}`}
                  >
                    {st.label}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-8 text-sm text-white/40">
        * 일정과 장소는 인스타그램{" "}
        <a
          href={SITE.instagram}
          target="_blank"
          rel="noreferrer"
          className="text-flame underline-offset-4 hover:underline"
        >
          {SITE.instagramHandle}
        </a>
        에서 매주 공지됩니다.
      </p>
    </section>
  );
}
