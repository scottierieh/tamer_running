"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { SITE } from "@/lib/data";

const LINKS = [
  { href: "#about", label: "ABOUT" },
  { href: "#programs", label: "PROGRAMS" },
  { href: "#sessions", label: "SESSIONS" },
  { href: "#crew", label: "CREW" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-ink/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="text-xl text-white md:text-2xl">
          <Logo />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-semibold uppercase tracking-widest text-white/70 transition-colors hover:text-flame"
            >
              {l.label}
            </a>
          ))}
          <a href="#join" className="btn-flame !px-6 !py-2.5">
            JOIN
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="menu"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-all ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-all ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-all ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* mobile menu */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-ink/95 backdrop-blur-md transition-all duration-300 md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-sm font-semibold uppercase tracking-widest text-white/80"
            >
              {l.label}
            </a>
          ))}
          <a
            href={SITE.joinForm}
            target="_blank"
            rel="noreferrer"
            className="btn-flame mt-2"
          >
            세션 신청하기
          </a>
        </div>
      </div>
    </header>
  );
}
