export default function Logo({
  className = "",
  stacked = false,
}: {
  className?: string;
  stacked?: boolean;
}) {
  return (
    <span
      className={`inline-flex select-none items-center ${
        stacked ? "flex-col items-start leading-none" : "gap-2"
      } ${className}`}
      aria-label="TAMER RUNNING"
    >
      <span className="display text-current tracking-[0.18em]">TAM​ER</span>
      <span
        className={`text-flame ${
          stacked ? "text-[0.5em]" : "text-[0.55em]"
        } font-bold uppercase tracking-[0.45em]`}
      >
        Running
      </span>
    </span>
  );
}
