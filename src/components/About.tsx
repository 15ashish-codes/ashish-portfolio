"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Lightbulb,
  Code2,
  Rocket,
  Sparkles,
} from "lucide-react";

const features = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Creative Thinking",
    description:
      "I approach every project with curiosity, fresh ideas and a focus on creating meaningful digital experiences.",
  },
  {
    number: "02",
    icon: Code2,
    title: "Thoughtful Development",
    description:
      "I build modern, responsive and scalable digital products with attention to detail and performance.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Results That Matter",
    description:
      "My goal is to turn business challenges into practical digital solutions that create real value.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/[0.06] py-28 md:py-36"
    >
      <div className="section-container relative z-10">

        {/* SECTION LABEL */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex items-center gap-3"
        >
          <span className="h-px w-10 bg-[#C6FF5E]" />

          <span className="text-xs uppercase tracking-[0.3em] text-[#C6FF5E]">
            A Little About Me
          </span>
        </motion.div>

        {/* MAIN CONTENT */}

        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">

          {/* LEFT */}

          <div>

            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold leading-[1.05] tracking-[-0.055em] md:text-7xl"
            >
              More than just
              <br />
              writing code.
              <br />
              <span className="accent-gradient">
                Creating impact.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-10 max-w-xl text-lg leading-9 text-[#92929b]"
            >
              I'm Ashish Choudhary, a developer passionate about
              building digital products that combine creativity,
              technology and purpose.

              <br />
              <br />

              I enjoy turning ideas into reality — from designing
              beautiful interfaces to developing functional web
              applications. I believe great digital experiences
              should not only look impressive but also solve
              meaningful problems.
            </motion.p>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="group mt-9 inline-flex items-center gap-3 border-b border-[#C6FF5E]/40 pb-2 text-sm font-medium text-white transition-colors hover:text-[#C6FF5E]"
            >
              Let's create something together

              <ArrowUpRight
                size={17}
                className="text-[#C6FF5E] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </motion.a>

          </div>

          {/* RIGHT VISUAL */}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative flex min-h-[390px] items-center justify-center overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#111113] p-8"
          >

            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#C6FF5E]/10 blur-[100px]" />

            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#A78BFA]/10 blur-[100px]" />

            <div className="relative z-10 text-center">

              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-[2rem] border border-[#C6FF5E]/20 bg-[#C6FF5E]/10"
              >
                <Sparkles
                  size={48}
                  className="text-[#C6FF5E]"
                />
              </motion.div>

              <p className="text-4xl font-bold tracking-tight md:text-5xl">
                IDEAS INTO
              </p>

              <p className="mt-2 text-4xl font-bold tracking-tight text-[#C6FF5E] md:text-5xl">
                REALITY.
              </p>

              <p className="mt-6 text-xs tracking-[0.3em] text-[#92929b]">
                THINK · DESIGN · DEVELOP
              </p>

            </div>

            <div className="absolute left-6 top-6 h-3 w-3 rounded-full border border-[#C6FF5E]" />

            <div className="absolute bottom-6 right-6 h-3 w-3 rounded-full bg-[#C6FF5E]" />

          </motion.div>

        </div>

        {/* FEATURE CARDS */}

        <div className="mt-24 grid gap-5 md:grid-cols-3">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                whileHover={{ y: -8 }}
                className="group rounded-2xl border border-white/[0.08] bg-[#111113] p-7 transition-colors duration-300 hover:border-[#C6FF5E]/30"
              >

                <div className="mb-10 flex items-center justify-between">

                  <span className="text-xs tracking-widest text-[#62626b]">
                    {feature.number}
                  </span>

                  <Icon
                    size={23}
                    className="text-[#C6FF5E] transition-transform duration-300 group-hover:scale-110"
                  />

                </div>

                <h3 className="text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#92929b]">
                  {feature.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}