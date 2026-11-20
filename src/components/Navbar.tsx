"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Services", href: "#services" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed left-0 top-0 z-50 w-full px-5 pt-5 md:px-10"
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between rounded-2xl border border-white/[0.08] bg-[#111113]/85 px-5 py-4 backdrop-blur-xl md:px-8">

        {/* BRAND */}
        <Link
          href="#home"
          className="group flex items-center gap-2"
          onClick={() => setMenuOpen(false)}
        >
          <span className="text-2xl font-bold tracking-[-1.5px]">
            ASHISH
            <span className="text-[#C6FF5E]">.</span>
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative text-sm text-[#92929b] transition-colors duration-300 hover:text-white"
            >
              {link.name}

              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#C6FF5E] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden items-center gap-6 lg:flex">

          <div className="flex items-center gap-2 text-xs text-[#92929b]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C6FF5E] opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#C6FF5E]" />
            </span>

            Available for projects
          </div>

          <Link
            href="#contact"
            className="group flex items-center gap-2 rounded-full bg-[#A8D83F] px-5 py-3 text-sm font-bold text-[#09090b] shadow-[0_0_15px_rgba(168,216,63,0.10)] transition-all duration-300 hover:bg-[#C6FF5E]"
          >
            Let's Talk

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="rounded-lg border border-white/10 p-2 text-white lg:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-3 max-w-[1400px] overflow-hidden rounded-2xl border border-white/10 bg-[#111113] p-6 shadow-2xl lg:hidden"
          >
            <div className="flex flex-col gap-6">

              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-lg font-medium text-white transition-colors hover:text-[#C6FF5E]"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <div className="h-px bg-white/10" />

              <div className="flex items-center gap-2 text-xs text-[#92929b]">
                <span className="h-2 w-2 rounded-full bg-[#C6FF5E]" />
                Available for projects
              </div>

              <Link
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-[#A8D83F] px-5 py-3 font-bold text-[#09090b] hover:bg-[#C6FF5E]"
              >
                Let's Talk
                <ArrowUpRight size={17} />
              </Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.header>
  );
}