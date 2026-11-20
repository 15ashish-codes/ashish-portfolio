"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Layers3,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const floatingItems = [
  {
    icon: Code2,
    label: "DEVELOPMENT",
    position: "top-8 -left-8 md:-left-16",
    delay: 0.2,
  },
  {
    icon: Layers3,
    label: "CREATIVE THINKING",
    position: "bottom-16 -right-8 md:-right-16",
    delay: 0.5,
  },
  {
    icon: Sparkles,
    label: "INNOVATION",
    position: "top-24 -right-5 md:-right-12",
    delay: 0.8,
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-36 md:px-10 md:pt-40"
    >
      {/* BACKGROUND GRID */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* BACKGROUND GLOW */}

      <div className="pointer-events-none absolute right-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-[#C6FF5E]/[0.06] blur-[140px]" />

      <div className="section-container relative z-10">

        {/* INTRO LABEL */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10 flex items-center gap-3"
        >
          <span className="h-[1px] w-10 bg-[#C6FF5E]" />

          <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#C6FF5E]">
            Independent Developer & Creative Thinker
          </span>
        </motion.div>

        {/* MAIN HERO GRID */}

        <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">

          {/* LEFT CONTENT */}

          <div>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-5 text-lg text-[#92929b] md:text-xl"
            >
              Hey, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-[clamp(4rem,10vw,9.5rem)] font-bold leading-[0.85] tracking-[-0.075em]"
            >
              ASHISH
              <span className="text-[#C6FF5E]">.</span>
              <br />

              <span className="text-white/20">
                CHOUDHARY
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 max-w-xl"
            >
              <h2 className="text-2xl font-medium leading-snug text-white md:text-3xl">
                I turn ideas into{" "}
                <span className="accent-gradient">
                  digital experiences
                </span>{" "}
                that make an impact.
              </h2>

              <p className="mt-5 max-w-lg text-base leading-8 text-[#92929b]">
                I design and develop modern websites, powerful web
                applications and digital solutions that help businesses
                stand out and grow.
              </p>
            </motion.div>

            {/* BUTTONS */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                href="#work"
                className="group flex items-center gap-3 rounded-full bg-[#C6FF5E] px-7 py-4 text-sm font-bold text-[#09090b] transition-all duration-300 hover:scale-105 hover:bg-white"
              >
                Explore My Work

                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="#contact"
                className="group flex items-center gap-3 rounded-full border border-white/15 px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:border-[#C6FF5E] hover:text-[#C6FF5E]"
              >
                Let's Talk

                <ArrowDownRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
                />
              </Link>
            </motion.div>

          </div>

          {/* RIGHT VISUAL */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="relative mx-auto flex aspect-square w-full max-w-[440px] items-center justify-center"
          >

            {/* OUTER ORBIT */}

            <div className="absolute inset-5 animate-[spin_35s_linear_infinite] rounded-full border border-dashed border-white/10" />

            {/* SECOND ORBIT */}

            <div className="absolute inset-14 animate-[spin_25s_linear_infinite_reverse] rounded-full border border-white/[0.07]" />

            {/* CENTER GLOW */}

            <div className="absolute h-[65%] w-[65%] rounded-full bg-[#C6FF5E]/10 blur-[75px]" />

            {/* MAIN CIRCLE */}

            <div className="relative flex h-[68%] w-[68%] items-center justify-center rounded-full border border-[#C6FF5E]/20 bg-gradient-to-br from-[#C6FF5E]/10 via-[#17191a] to-[#111113] shadow-[0_0_100px_rgba(198,255,94,0.08)]">

              <div className="absolute inset-3 rounded-full border border-white/[0.06]" />

              <div className="text-center">

                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    rotate: {
                      duration: 25,
                      repeat: Infinity,
                      ease: "linear",
                    },
                    scale: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-3xl border border-[#C6FF5E]/20 bg-[#C6FF5E]/10"
                >
                  <Code2 size={48} className="text-[#C6FF5E]" />
                </motion.div>

                <p className="text-3xl font-bold tracking-tight">
                  BUILD.
                </p>

                <p className="mt-1 text-3xl font-bold tracking-tight text-[#C6FF5E]">
                  CREATE.
                </p>

                <p className="mt-1 text-3xl font-bold tracking-tight">
                  INSPIRE.
                </p>

                <p className="mt-5 text-[10px] tracking-[0.35em] text-[#92929b]">
                  DIGITAL EXPERIENCES
                </p>

              </div>
            </div>

            {/* FLOATING ELEMENTS */}

            {floatingItems.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  animate={{ y: [0, -12, 0] }}
                  transition={{
                    duration: 4,
                    delay: item.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`absolute ${item.position} flex items-center gap-2 rounded-xl border border-white/10 bg-[#171719]/90 px-4 py-3 shadow-xl backdrop-blur-xl`}
                >
                  <Icon size={16} className="text-[#C6FF5E]" />

                  <span className="text-[9px] font-medium tracking-[0.15em] text-white/80">
                    {item.label}
                  </span>
                </motion.div>
              );
            })}

            {/* ORBIT DOT */}

            <div className="absolute right-[17%] top-[17%] h-3 w-3 rounded-full bg-[#C6FF5E] shadow-[0_0_20px_#C6FF5E]" />

            <div className="absolute bottom-[18%] left-[15%] h-2 w-2 rounded-full bg-[#A78BFA] shadow-[0_0_20px_#A78BFA]" />

          </motion.div>

        </div>

        {/* BOTTOM INFORMATION */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-24 flex flex-col justify-between gap-8 border-t border-white/10 pt-7 md:flex-row md:items-center"
        >

          <div className="flex items-center gap-3 text-xs tracking-widest text-[#92929b]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#C6FF5E]" />

            OPEN TO EXCITING OPPORTUNITIES
          </div>

          <Link
            href="#about"
            className="group flex items-center gap-3 text-xs tracking-[0.2em] text-[#92929b] transition-colors hover:text-[#C6FF5E]"
          >
            SCROLL TO EXPLORE

            <ArrowDown
              size={16}
              className="animate-bounce text-[#C6FF5E]"
            />
          </Link>

          <span className="hidden text-xs tracking-widest text-[#62626b] md:block">
            BASED IN INDIA · WORKING WORLDWIDE
          </span>

        </motion.div>

      </div>
    </section>
  );
}