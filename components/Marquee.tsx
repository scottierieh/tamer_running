const WORDS = [
  "RUN",
  "SPRINT",
  "TRAIN",
  "COMBINE",
  "SPEED",
  "FUN",
  "TAMER",
];

export default function Marquee() {
  const row = [...WORDS, ...WORDS, ...WORDS, ...WORDS];
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-flame py-4">
      <div className="flex w-max animate-marquee-fast">
        {row.map((w, i) => (
          <span
            key={i}
            className="display mx-6 flex items-center gap-6 text-2xl text-ink md:text-3xl"
          >
            {w}
            <span className="text-ink/50">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
