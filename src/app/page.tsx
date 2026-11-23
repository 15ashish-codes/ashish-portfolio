"use client";

import { motion } from "framer-motion";
import CursorGlow from "@/components/CursorGlow";
import TiltCard from "@/components/TiltCard";
import ScrollProgress from "@/components/ScrollProgress";
import { useState, type FormEvent } from "react";
import Reveal from "@/components/Reveal";
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  AtSign,
  Sparkles,
  Menu,
  X
} from "lucide-react";

const reveal = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
const [formStatus, setFormStatus] = useState("");

async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  setIsSubmitting(true);
  setFormStatus("");

  const form = event.currentTarget;
  const formData = new FormData(form);

  const data = {
  name: formData.get("name"),
  email: formData.get("email"),
  subject: formData.get("subject"),
  message: formData.get("message"),
  website: formData.get("website"),
};

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Something went wrong.");
    }

    setFormStatus("Message sent successfully! I'll get back to you soon.");
    form.reset();
  } catch (error) {
    setFormStatus(
      error instanceof Error
        ? error.message
        : "Unable to send your message. Please try again."
    );
  } finally {
    setIsSubmitting(false);
  }
}
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#090b0a] text-[#f4f4ed]">
      <CursorGlow />
      <ScrollProgress />

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#c6ff4d]/10 blur-[150px]" />
        <div className="absolute -bottom-60 -left-40 h-[500px] w-[500px] rounded-full bg-[#c6ff4d]/5 blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* NAVBAR */}
      <nav className="fixed inset-x-0 top-0 z-50 mx-auto flex w-full items-center justify-between border-b border-white/10 bg-[#090b0a]/90 px-6 py-6 backdrop-blur-xl md:px-12">

        <a href="#home" className="text-xl font-bold tracking-tight">
          AC<span className="text-[#c6ff4d]">.</span>
        </a>

        <div className="hidden items-center gap-10 text-sm text-white/60 md:flex">
  {[
    ["Home", "#home"],
    ["About", "#about"],
    ["Journey", "#experience"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ].map(([label, href]) => (
    <a
      key={href}
      href={href}
      className="group relative py-2 transition-colors duration-300 hover:text-[#c6ff4d]"
    >
      {label}

      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#c6ff4d] transition-all duration-300 ease-out group-hover:w-full" />
    </a>
  ))}
</div>

<button
  onClick={() => setMenuOpen(!menuOpen)}
  className="text-[#c6ff4d] md:hidden"
  aria-label={menuOpen ? "Close menu" : "Open menu"}
  aria-expanded={menuOpen}
>
  {menuOpen ? <X size={26} /> : <Menu size={26} />}
</button>

{menuOpen && (
  <div className="absolute left-6 right-6 top-full z-50 mt-4 rounded-2xl border border-white/10 bg-[#111411] p-6 shadow-2xl md:hidden">
    {[
      ["Home", "#home"],
      ["About", "#about"],
      ["Journey", "#experience"],
      ["Projects", "#projects"],
      ["Contact", "#contact"],
    ].map(([label, href]) => (
      <a
        key={href}
        href={href}
        onClick={() => setMenuOpen(false)}
        className="block border-b border-white/10 py-4 text-sm text-white/70 transition hover:text-[#c6ff4d]"
      >
        {label}
      </a>
    ))}
  </div>
)}

        <a
  href="#contact"
  className="group flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm transition-all duration-300 hover:border-[#c6ff4d] hover:bg-[#c6ff4d] hover:text-black hover:shadow-[0_0_25px_rgba(198,255,77,0.2)]"
>
  Let's Talk
  <ArrowUpRight
    size={16}
    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
  />
</a>
      </nav>

      {/* HERO */}
      <section
        id="home"
       className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col justify-center px-6 pb-20 pt-32 md:px-12"
       >

        <motion.div
          variants={reveal}
          initial="hidden"
          animate="visible"
          className="mb-10 flex items-center gap-3"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c6ff4d] opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#c6ff4d]" />
          </span>

          <span className="text-xs font-medium uppercase tracking-[0.25em] text-white/60">
            Available for interesting projects
          </span>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.15 }}
          className="relative"
        >
          <motion.p
            variants={reveal}
            className="mb-2 text-lg text-white/50 md:text-2xl"
          >
            Hello, I'm Ashish Choudhary.
          </motion.p>

          <motion.h1
            variants={reveal}
            className="max-w-6xl text-[clamp(4rem,11vw,10rem)] font-black leading-[0.88] tracking-[-0.075em]"
          >
            BUILDING
            <br />
            <span className="text-[#c6ff4d]">DIGITAL</span>
            <br />
            EXPERIENCES<span className="text-[#c6ff4d]">.</span>
          </motion.h1>

          <motion.div
            variants={reveal}
            className="mt-10 flex flex-col justify-between gap-10 md:flex-row md:items-end"
          >
            <p className="max-w-xl text-base leading-8 text-white/50 md:text-lg">
              Full Stack Developer crafting modern web experiences,
              functional applications and digital products that
              turn ambitious ideas into reality.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group flex items-center gap-3 rounded-full bg-[#c6ff4d] px-7 py-4 text-sm font-bold text-black transition hover:scale-105"
              >
                Explore My Work
                <ArrowDownRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
                />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 text-sm font-medium transition hover:border-white hover:bg-white/5"
              >
                Get In Touch
                <ArrowUpRight size={18} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* DECORATIVE ELEMENT */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="pointer-events-none absolute right-10 top-1/2 hidden h-44 w-44 rounded-full border border-[#c6ff4d]/20 lg:block"
        >
          <div className="absolute -top-2 left-1/2 h-4 w-4 rounded-full bg-[#c6ff4d] shadow-[0_0_30px_#c6ff4d]" />
          <div className="absolute inset-5 rounded-full border border-dashed border-white/10" />
          <Sparkles className="absolute inset-0 m-auto text-[#c6ff4d]/70" size={30} />
        </motion.div>

        {/* BOTTOM BAR */}
        <div className="mt-24 flex flex-col justify-between gap-5 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.2em] text-white/30 sm:flex-row">
          <span>Based in India</span>
          <span>Design · Development · Innovation</span>
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/15ashish-codes"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="transition hover:text-[#c6ff4d]"
            >
              <Code2 size={18} />
            </a>

            <a
            href="https://www.linkedin.com/in/ashishpchoudhary/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition hover:text-[#c6ff4d]"
            >
              <AtSign size={18} />
            </a>
          </div>
        </div>
      </section>
            {/* ABOUT SECTION */}
      <section
        id="about"
        className="relative z-10 border-t border-white/10 px-6 py-32 md:px-12"
      >
        <Reveal className="mx-auto max-w-[1400px]">
          <div className="mb-16 flex items-center gap-4">
            <span className="h-px w-12 bg-[#c6ff4d]" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c6ff4d]">
              01 / About Me
            </span>
          </div>

          <div className="grid gap-16 lg:grid-cols-2">

            {/* LEFT SIDE */}
            <div>
              <h2 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
                NOT JUST
                <br />
                WRITING
                <br />
                <span className="text-[#c6ff4d]">CODE.</span>
              </h2>

              <p className="mt-10 max-w-md text-lg leading-8 text-white/40">
                I believe great digital products are built where
                technology, creativity and thoughtful problem-solving
                meet.
              </p>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col justify-center">

              <p className="text-xl leading-9 text-white/70 md:text-2xl">
                I'm Ashish Choudhary, a developer passionate about
                turning ideas into meaningful digital experiences.
                I enjoy building modern websites, developing
                applications and exploring how emerging technologies
                can solve real-world problems.
              </p>

              <p className="mt-7 text-base leading-8 text-white/40">
                From designing interfaces to integrating backend
                functionality, I enjoy understanding the complete
                development process and continuously improving
                my craft.
              </p>

              <div className="mt-12 border-t border-white/10 pt-8">
                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
                  Technologies I Work With
                </p>

                <div className="flex flex-wrap gap-3">
                  {[
                    "JavaScript",
                    "TypeScript",
                    "React",
                    "Next.js",
                    "Node.js",
                    "Tailwind CSS",
                    "PostgreSQL",
                    "Supabase",
                    "Git",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 px-5 py-3 text-sm text-white/60 transition duration-300 hover:border-[#c6ff4d] hover:text-[#c6ff4d]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          <div className="mt-24 flex flex-col justify-between gap-5 border-t border-white/10 pt-8 md:flex-row">
            <span className="text-sm text-white/30">
              Curiosity drives everything I build.
            </span>

            <span className="text-sm font-medium text-[#c6ff4d]">
              ALWAYS LEARNING. ALWAYS BUILDING.
            </span>
          </div>

        </Reveal>
      </section>
            {/* EXPERIENCE SECTION */}
      <section
        id="experience"
        className="relative z-10 border-t border-white/10 px-6 py-32 md:px-12"
      >
        <Reveal className="mx-auto max-w-[1400px]">

          <div className="mb-16 flex items-center gap-4">
            <span className="h-px w-12 bg-[#c6ff4d]" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c6ff4d]">
              02 / My Journey
            </span>
          </div>

          <div className="mb-20 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              THE PATH
              <br />
              <span className="text-[#c6ff4d]">SO FAR.</span>
            </h2>

            <p className="max-w-md text-base leading-8 text-white/40">
              Every project is an opportunity to learn something
              new. Here's what I'm exploring, building and
              developing along the way.
            </p>
          </div>

          <div className="relative">

            <div className="absolute bottom-0 left-[7px] top-0 w-px bg-white/10 md:left-[11px]" />

            <div className="space-y-16">

              {/* JOURNEY 01 */}
              <div className="relative grid gap-6 pl-12 md:grid-cols-[220px_1fr] md:gap-12">

                <span className="absolute left-0 top-1 h-4 w-4 rounded-full border-4 border-[#090b0a] bg-[#c6ff4d] md:h-6 md:w-6" />

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-[#c6ff4d]">
                    The Foundation
                  </p>
                  <p className="mt-2 text-xs text-white/30">
                    Learning & Exploration
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    Learning to Build
                  </h3>

                  <p className="mt-5 max-w-2xl text-base leading-8 text-white/40">
                    Developing a strong foundation in programming,
                    web technologies and problem-solving while
                    exploring how great digital products are made.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {["JavaScript", "React", "HTML", "CSS", "Java"].map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* JOURNEY 02 */}
              <div className="relative grid gap-6 pl-12 md:grid-cols-[220px_1fr] md:gap-12">

                <span className="absolute left-0 top-1 h-4 w-4 rounded-full border-4 border-[#090b0a] bg-[#c6ff4d] md:h-6 md:w-6" />

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-[#c6ff4d]">
                    Building Products
                  </p>
                  <p className="mt-2 text-xs text-white/30">
                    Personal Projects
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    Turning Ideas Into Applications
                  </h3>

                  <p className="mt-5 max-w-2xl text-base leading-8 text-white/40">
                    Exploring full-stack development through
                    practical projects, learning to connect
                    interfaces, application logic and databases
                    into working products.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"].map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* JOURNEY 03 */}
              <div className="relative grid gap-6 pl-12 md:grid-cols-[220px_1fr] md:gap-12">

                <span className="absolute left-0 top-1 h-4 w-4 rounded-full border-4 border-[#090b0a] bg-[#c6ff4d] md:h-6 md:w-6" />

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-[#c6ff4d]">
                    What's Next
                  </p>
                  <p className="mt-2 text-xs text-white/30">
                    Continuous Growth
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    Exploring What's Possible
                  </h3>

                  <p className="mt-5 max-w-2xl text-base leading-8 text-white/40">
                    Expanding into AI-powered applications,
                    workflow automation and more ambitious
                    products while sharpening my development skills.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {["AI", "Automation", "n8n", "Product Development"].map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </Reveal>
      </section>
            {/* PROJECTS SECTION */}
      <section
        id="projects"
        className="relative z-10 border-t border-white/10 px-6 py-32 md:px-12"
      >
        <Reveal className="mx-auto max-w-[1400px]">

          <div className="mb-16 flex items-center gap-4">
            <span className="h-px w-12 bg-[#c6ff4d]" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c6ff4d]">
              03 / Selected Work
            </span>
          </div>

          <div className="mb-20 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              IDEAS INTO
              <br />
              <span className="text-[#c6ff4d]">REALITY.</span>
            </h2>

            <p className="max-w-md text-base leading-8 text-white/40">
              A collection of experiments, ideas and products.
              Each project is an opportunity to create something
              meaningful.
            </p>
          </div>

          {/* FEATURED PROJECT */}
          <TiltCard>
            <article className="group overflow-hidden rounded-3xl border border-white/10 bg-[#111411] transition duration-500 hover:border-[#c6ff4d]/40">
            {/* PROJECT VISUAL */}
            <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-[#171d13] px-6 py-20 md:min-h-[480px]">

              <div className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "radial-gradient(#c6ff4d 1px, transparent 1px)",
                  backgroundSize: "35px 35px",
                }}
              />

              <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#c6ff4d]/10 blur-[100px]" />

              <div className="relative text-center transition-transform duration-700 group-hover:scale-105">
                <span className="block text-xs font-semibold uppercase tracking-[0.5em] text-[#c6ff4d]">
                  Featured Project
                </span>

                <h3 className="mt-6 text-6xl font-black tracking-[-0.07em] text-white md:text-9xl">
                  CAMPUS
                  <span className="text-[#c6ff4d]">CLOSET.</span>
                </h3>

                <p className="mt-5 text-sm uppercase tracking-[0.3em] text-white/40">
                  A new project in the making
                </p>
              </div>

              <span className="absolute bottom-6 right-6 rounded-full border border-[#c6ff4d]/30 px-4 py-2 text-xs text-[#c6ff4d]">
                IN DEVELOPMENT
              </span>
            </div>

            {/* PROJECT INFORMATION */}
            <div className="grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-center md:p-12">

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c6ff4d]">
                  01 — Featured Work
                </p>

                <h3 className="mt-4 text-3xl font-bold tracking-tight text-white">
                  CampusCloset
                </h3>

                <p className="mt-5 max-w-2xl text-base leading-8 text-white/40">
                  An upcoming project that will be developed
                  and showcased here as a real, working product.
                  More details and features will be revealed
                  as development progresses.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="group/badge flex items-center gap-2 rounded-full border border-[#c6ff4d]/20 bg-[#c6ff4d]/5 px-5 py-3 text-sm text-[#c6ff4d]/70 transition-all duration-300 hover:border-[#c6ff4d]/60 hover:bg-[#c6ff4d]/10 hover:text-[#c6ff4d]">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#c6ff4d]" />
                   Coming Soon
                  </span>
              </div>

            </div>
          </article>
        </TiltCard>

          <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-8">
            <p className="text-sm text-white/30">
              More projects are on the way.
            </p>

            <span className="text-sm font-medium text-[#c6ff4d]">
              THE JOURNEY CONTINUES ↗
            </span>
          </div>

        </Reveal>
      </section>
            {/* CONTACT SECTION */}
      <section
        id="contact"
        className="relative z-10 overflow-hidden border-t border-white/10 px-6 py-32 md:px-12"
      >
        <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-[#c6ff4d]/10 blur-[130px]" />

        <Reveal className="relative mx-auto max-w-[1400px]">

          <div className="mb-16 flex items-center gap-4">
            <span className="h-px w-12 bg-[#c6ff4d]" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c6ff4d]">
              04 / Get In Touch
            </span>
          </div>

          <p className="mb-8 text-sm font-medium uppercase tracking-[0.3em] text-white/40">
            Have an idea? Let's make it happen.
          </p>

          <h2 className="max-w-5xl text-6xl font-black leading-[0.95] tracking-[-0.06em] md:text-8xl lg:text-[110px]">
            LET'S BUILD
            <br />
            SOMETHING
            <br />
            <span className="text-[#c6ff4d]">GREAT.</span>
          </h2>

          <div className="mt-16 flex flex-col justify-between gap-10 border-b border-white/10 pb-16 md:flex-row md:items-end">

            <div className="w-full max-w-xl">
  <p className="mb-8 max-w-lg text-base leading-8 text-white/40">
    Have a project, an interesting idea or an opportunity
    to collaborate? I'd love to hear about it.
  </p>

  <form onSubmit={handleSubmit} className="space-y-6">
    <input
  type="text"
  name="website"
  tabIndex={-1}
  autoComplete="off"
  aria-hidden="true"
  className="hidden"
/>
    <div>
      <label className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
        Your Name
      </label>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        required
        className="w-full border-b border-white/15 bg-transparent py-4 text-white outline-none transition placeholder:text-white/20 focus:border-[#c6ff4d]"
      />
    </div>

    <div>
      <label className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
        Email Address
      </label>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        required
        className="w-full border-b border-white/15 bg-transparent py-4 text-white outline-none transition placeholder:text-white/20 focus:border-[#c6ff4d]"
      />
    </div>

    <div>
      <label className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
        Subject
      </label>
      <input
        type="text"
        name="subject"
        placeholder="What is this regarding?"
        required
        className="w-full border-b border-white/15 bg-transparent py-4 text-white outline-none transition placeholder:text-white/20 focus:border-[#c6ff4d]"
      />
    </div>

    <div>
      <label className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
        Message
      </label>
      <textarea
        name="message"
        rows={4}
        placeholder="Tell me about your project..."
        required
        className="w-full resize-none border-b border-white/15 bg-transparent py-4 text-white outline-none transition placeholder:text-white/20 focus:border-[#c6ff4d]"
      />
    </div>

   <button
  type="submit"
  disabled={isSubmitting}
  className="group inline-flex items-center gap-4 rounded-full bg-[#c6ff4d] px-8 py-5 text-sm font-bold text-black transition duration-300 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
>
  {isSubmitting ? "SENDING..." : "SEND MESSAGE"}

  <span className="text-xl transition-transform group-hover:translate-x-2">
    ↗
  </span>
</button>

{formStatus && (
  <p className="mt-4 text-sm text-[#c6ff4d]" role="status">
    {formStatus}
  </p>
)}
  </form>
</div>

            <div className="space-y-4 text-sm text-white/40">
              <p className="uppercase tracking-[0.2em] text-white/20">
                Connect with me
              </p>

              <a
                href="https://github.com/15ashish-codes"
                target="_blank"
                rel="noreferrer"
                className="block transition hover:text-[#c6ff4d]"
              >
                GitHub ↗
              </a>

              <a
              href="https://www.linkedin.com/in/ashishpchoudhary/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition hover:text-[#c6ff4d]"
              >
                LinkedIn ↗
              </a>
            </div>

          </div>

          <footer className="flex flex-col justify-between gap-4 pt-8 text-xs uppercase tracking-[0.15em] text-white/25 md:flex-row">
            <p>© 2026 Ashish Choudhary</p>
            <p>Designed & Built with Passion.</p>
            <a href="#home" className="transition hover:text-[#c6ff4d]">
              Back to top ↑
            </a>
          </footer>

        </Reveal>
      </section>
    </main>
  );
}