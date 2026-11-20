"use client";

import Link from "next/link";
import { Code2, AtSign, Mail, ArrowUpRight } from "lucide-react";

const navigation = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

export default function Sidebar() {
  return (
    <aside className="flex flex-col justify-between">
      <div>
        <Link href="#home">
          <h1 className="text-4xl font-bold tracking-tight text-[#e2e8f0]">
            Ashish Choudhary
          </h1>
        </Link>

        <h2 className="mt-4 text-xl font-semibold text-[#e2e8f0]">
          Full Stack Developer
        </h2>

        <p className="mt-4 max-w-sm text-base leading-7 text-[#94a3b8]">
          I build accessible, engaging and functional digital
          experiences that bring ideas to life.
        </p>

        <nav className="mt-16 flex flex-col gap-6">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group flex w-fit items-center gap-4 text-xs font-bold tracking-[0.2em] text-[#64748b] transition-all hover:text-[#5eead4]"
            >
              <span className="h-px w-8 bg-[#64748b] transition-all group-hover:w-16 group-hover:bg-[#5eead4]" />
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mt-16 flex items-center gap-6">
        <a
          href="https://github.com/15ashish-codes"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-[#94a3b8] transition-colors hover:text-[#5eead4]"
        >
          <Code2 size={22} />
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="text-[#94a3b8] transition-colors hover:text-[#5eead4]"
        >
          <AtSign size={22} />
        </a>

        <a
          href="mailto:your-email@example.com"
          aria-label="Email"
          className="text-[#94a3b8] transition-colors hover:text-[#5eead4]"
        >
          <Mail size={22} />
        </a>

        <a
          href="#contact"
          className="flex items-center gap-1 text-sm font-medium text-[#5eead4] hover:underline"
        >
          Let's talk <ArrowUpRight size={15} />
        </a>
      </div>
    </aside>
  );
}