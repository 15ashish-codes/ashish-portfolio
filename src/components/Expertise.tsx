"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Palette,
  Workflow,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const expertise = [
  {
    number: "01",
    icon: Code2,
    title: "Frontend Development",
    description:
      "Building responsive, interactive and visually engaging websites with modern frontend technologies.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    number: "02",
    icon: Database,
    title: "Backend Development",
    description:
      "Creating reliable application architectures, database integrations and functional backend systems.",
    tags: ["Node.js", "PostgreSQL", "Supabase", "REST APIs"],
  },
  {
    number: "03",
    icon: Palette,
    title: "UI/UX & Creative Design",
    description:
      "Transforming ideas into intuitive interfaces with thoughtful layouts, visual storytelling and animations.",
    tags: ["Figma", "Responsive Design", "Framer Motion", "Prototyping"],
  },
  {
    number: "04",
    icon: Workflow,
    title: "AI & Automation",
    description:
      "Exploring intelligent workflows and automation to simplify repetitive tasks and improve productivity.",
    tags: ["AI Tools", "n8n", "Workflow Design", "Integrations"],
  },
];

const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Supabase",
  "Git",
  "GitHub",
  "Figma",
  "Framer Motion",
  "n8n",
];

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="relative border-t border-white/[0.06] py-28 md:py-36"
    >
      <div className="section-container">

        {/* SECTION HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-10 bg-[#C6FF5E]" />

            <span className="text-xs uppercase tracking-[0.3em] text-[#C6FF5E]">
              What I Bring To The Table
            </span>
          </div>

          <h2 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-[-0.055em] md:text-7xl">
            My expertise.
            <br />
            <span className="accent-gradient">
              Your next advantage.
            </span>
          </h2>

          <p className="mt-7 max-w-xl text-base leading-8 text-[#92929b]">
            A combination of creative thinking, modern technologies
            and problem-solving to build digital products that
            make a difference.
          </p>
        </motion.div>

        {/* EXPERTISE CARDS */}

        <div className="grid gap-5 md:grid-cols-2">

          {expertise.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111113] p-8 transition-colors duration-300 hover:border-[#C6FF5E]/30 md:p-10"
              >

                {/* HOVER GLOW */}

                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#C6FF5E]/[0.04] blur-[70px] transition-all duration-500 group-hover:bg-[#C6FF5E]/10" />

                <div className="relative z-10">

                  <div className="mb-10 flex items-center justify-between">

                    <span className="text-xs tracking-[0.2em] text-[#62626b]">
                      / {item.number}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#C6FF5E]/15 bg-[#C6FF5E]/[0.06]">
                      <Icon
                        size={23}
                        className="text-[#C6FF5E]"
                      />
                    </div>

                  </div>

                  <div className="flex items-center justify-between gap-3">

                    <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                      {item.title}
                    </h3>

                    <ArrowUpRight
                      size={22}
                      className="shrink-0 text-[#62626b] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#C6FF5E]"
                    />

                  </div>

                  <p className="mt-5 max-w-lg text-sm leading-8 text-[#92929b]">
                    {item.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">

                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-2 text-xs text-[#92929b] transition-colors group-hover:border-white/[0.13]"
                      >
                        {tag}
                      </span>
                    ))}

                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>

        {/* TECHNOLOGY STACK */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 rounded-3xl border border-white/[0.08] bg-[#111113] p-8 md:p-12"
        >

          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-center">

            <div>
              <div className="mb-4 flex items-center gap-2">
                <Sparkles
                  size={17}
                  className="text-[#C6FF5E]"
                />

                <span className="text-xs uppercase tracking-[0.25em] text-[#92929b]">
                  My Digital Toolkit
                </span>
              </div>

              <h3 className="text-3xl font-bold tracking-tight md:text-4xl">
                Technologies I work with.
              </h3>
            </div>

            <span className="text-sm text-[#62626b]">
              Constantly learning. Always evolving.
            </span>

          </div>

          <div className="flex flex-wrap gap-3">

            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.04,
                }}
                whileHover={{
                  scale: 1.06,
                  borderColor: "rgba(198,255,94,0.5)",
                  color: "#C6FF5E",
                }}
                className="cursor-default rounded-xl border border-white/[0.08] bg-white/[0.02] px-5 py-4 text-sm font-medium text-[#92929b] transition-colors"
              >
                {tech}
              </motion.div>
            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
}