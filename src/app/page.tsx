"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

/* ══════════════════════════════════════════════
   Archive Data — case-study.ibrahim-eng.dev
   ══════════════════════════════════════════════ */

interface ArchiveProject {
  year: string;
  title: string;
  description: string;
  problem?: string;
  impact?: string;
  madeFor: string;
  tech: string[];
  image: string;
  category: "software" | "hardware";
  status: "Completed" | "Ongoing" | "Conceptualized";
  link: string;
  archived?: boolean;
}

const archiveProjects: ArchiveProject[] = [
  {
    year: "2025",
    title: "CSAI — Customer Service AI",
    description: "The first proof that a Kurdish-speaking AI agent could handle real customer questions without human help.",
    problem: "Local businesses were losing customers because nobody could reply to inquiries fast enough — and no chatbot platform understood Kurdish.",
    impact: "Showcased live at HITEX 2025; validated the demand and became the foundation for Chat Mart.",
    madeFor: "HITEX 2025",
    tech: ["Next.js", "Python", "AI"],
    image: "/images/projects/csai.jpg",
    category: "software",
    status: "Completed",
    link: "/csai",
  },
  {
    year: "2025",
    title: "Chat Mart — Omni-Channel SaaS",
    description: "Helping local businesses cut customer reply time from hours to under 30 seconds with a multilingual AI agent across 7 channels.",
    problem: "Shops drowned in WhatsApp and Instagram messages, with one staff phone replying in Kurdish hours later — customers gave up and bought from competitors.",
    impact: "Live at chat-mart.com. Multiple companies now run AI customer service on WhatsApp, IG, Telegram, Viber, Messenger, web, and an embeddable API — all from one dashboard.",
    madeFor: "Local Businesses",
    tech: ["PHP", "Gemini API", "WhatsApp", "PWA"],
    image: "/images/projects/chat-mart.png",
    category: "software",
    status: "Completed",
    link: "/chat-mart",
  },
  {
    year: "2025",
    title: "Ashti Library",
    description: "Bringing a Kurdish bookstore online for the first time — readers discover, browse, and order books in their own language via WhatsApp.",
    problem: "Kurdish bookstores had no digital presence; readers couldn’t search or order in their native language without visiting in person.",
    impact: "First production Kurdish bookstore platform with AI recommendations. Orders now happen digitally with direct WhatsApp integration for a real client in Erbil.",
    madeFor: "Ashti Books, Erbil",
    tech: ["PHP", "Gemini API", "RTL"],
    image: "/images/projects/ashti-library.jpg",
    category: "software",
    status: "Completed",
    link: "/ashti-library",
  },
  {
    year: "2025",
    title: "Bradaran — Car Dealership",
    description: "Moving a Kurdish car dealership off paper and spreadsheets onto a single RTL platform — inventory, sales, and customers in real time.",
    problem: "Dealerships tracked inventory, customers, and installment sales on paper and WhatsApp screenshots, with no centralized history.",
    impact: "Deployed for a real dealership client. Multi-role staff now manage inventory, cash and installment sales, debt tracking, and financial reports through a PWA with push notifications.",
    madeFor: "Car Dealership Client",
    tech: ["PHP", "MySQL", "PWA", "Push"],
    image: "/images/projects/bradar.png",
    category: "software",
    status: "Completed",
    link: "/xara",
  },
  {
    year: "2025",
    title: "Dyari — Advanced Car Dealership",
    description: "Scaling dealership operations for a larger client with separated operational/archival data and granular permissions per team.",
    problem: "Bradaran was single-database; a larger dealership needed isolation between live and archived data, batch car imports, and finer per-staff permissions.",
    impact: "Built for a 2025 client. Handles batch imports, gallery and individual deposits, advance payments, and automated receipts — each role only sees what they need.",
    madeFor: "Car Dealership Client",
    tech: ["PHP", "MySQL", "Dual DB", "PWA"],
    image: "/images/projects/dyari-car.png",
    category: "software",
    status: "Completed",
    link: "/diari",
  },
  { year: "2025", title: "ID Kurdm — AI Platform", description: "Comprehensive AI API integration project mastering agent orchestration and large-scale architecture.", madeFor: "Personal R&D", tech: ["Python", "AI Agents", "API"], image: "/images/projects/id-kurdm.jpg", category: "software", status: "Completed", link: "#" },
  { year: "2025", title: "AI Social Media Responder", description: "Self-trained AI that responds to customer inquiries with company profiles and pricing.", madeFor: "Small Business", tech: ["NLP", "Automation", "API"], image: "/images/projects/ai-social-responder.jpg", category: "software", status: "Conceptualized", link: "#", archived: true },
  { year: "2024", title: "Home System", description: "Smart home integrating five sensor-based mini-projects on Arduino into one comprehensive system.", madeFor: "TIU / LFU / NICER", tech: ["Arduino", "IoT", "Sensors"], image: "/images/projects/home-system.jpg", category: "hardware", status: "Completed", link: "#" },
  { year: "2024", title: "Water Level Monitoring", description: "Real-time water tank monitoring with alerts at 15% and 80% levels and progress bar display.", madeFor: "Personal Project", tech: ["Arduino", "Sensors"], image: "/images/projects/water-level.jpg", category: "hardware", status: "Completed", link: "#" },
  { year: "2024", title: "Hand Drones", description: "Drone with 1.2km+ range controlled via gyroscope instead of traditional joystick.", madeFor: "Personal R&D", tech: ["ESP", "Gyroscope", "Drone"], image: "/images/projects/hand-drones.jpg", category: "hardware", status: "Ongoing", link: "#", archived: true },
  { year: "2024", title: "Glove Talk", description: "Speech-enabled glove converting sign language to speech and text for ~250K people in Kurdistan.", madeFor: "Accessibility", tech: ["Robotics", "AI", "NLP"], image: "/images/projects/glove-talk.jpg", category: "hardware", status: "Conceptualized", link: "#", archived: true },
  { year: "2024", title: "Portfolio v2", description: "Personal portfolio website with 3D scenes, GSAP animations, and cinematic design system.", madeFor: "Personal", tech: ["Next.js", "Tailwind", "GSAP"], image: "/images/projects/portfolio-v2.jpg", category: "software", status: "Completed", link: "https://ibrahim-eng.dev", archived: true },
  { year: "2024", title: "Erbil Chess Academy", description: "Chess academy website with member registration, tournament tracking, and live game features.", madeFor: "Chess Club", tech: ["HTML", "CSS", "JS"], image: "/images/projects/erbil-chess.jpg", category: "software", status: "Completed", link: "/ches" },
  {
    year: "2025",
    title: "True Prence",
    description: "Eliminating manual attendance and proxy sign-ins — the camera marks 20 students present per frame, with full audit reports.",
    problem: "Manual attendance is slow, error-prone, and easily gamed by proxy attendance — in classrooms and workplaces alike.",
    impact: "Passive zero-interaction attendance: students are marked present simply by being visible to the camera. Exports to Excel/PDF and Matplotlib analytics.",
    madeFor: "Universities & Companies",
    tech: ["Python", "OpenCV", "face_recognition", "SQLite", "CNN"],
    image: "/images/projects/true-prence.jpg",
    category: "software",
    status: "Completed",
    link: "/attendance",
  },
  {
    year: "2025",
    title: "Signed Language",
    description: "Making sign-language communication accessible to ~250,000 Kurds with hearing or speech difficulties — using only a regular laptop camera.",
    problem: "~250,000 people in Kurdistan need accessible communication tools, but specialized hardware is costly and unavailable.",
    impact: "Software-only gesture recognition that works on any standard webcam — proves accessible communication tech doesn’t need expensive hardware.",
    madeFor: "Accessibility / R&D",
    tech: ["Python", "MediaPipe", "KNN", "OpenCV", "scikit-learn"],
    image: "/images/projects/signed-language.jpg",
    category: "software",
    status: "Completed",
    link: "/gestures",
  },
  { year: "2023", title: "Kurdistan CTF Tools", description: "Custom security tools built for CTF competitions including exploit frameworks and analysis tools.", madeFor: "CTF Competition", tech: ["Python", "Security"], image: "/images/projects/ctf-tools.jpg", category: "software", status: "Completed", link: "#", archived: true },
  { year: "2023", title: "CodeX Examination Prep", description: "National exam preparation platform with algorithmic problem solving and practice modules.", madeFor: "National Exam", tech: ["C++", "Algorithms"], image: "/images/projects/codex-prep.jpg", category: "software", status: "Completed", link: "#", archived: true },
];

const filters = ["all", "software", "hardware"] as const;
type Filter = (typeof filters)[number];

/* ── Card (matches portfolio ProjectCard) ── */

function ArchiveCard({ project, index }: { project: ArchiveProject; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      layout
    >
      {!project.archived && (
      <a
        href={project.link}
        {...(project.link.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={`block h-full ${project.link === "#" ? "pointer-events-none" : ""}`}
      >
        <div className={`relative rounded-3xl overflow-hidden group h-full border border-white/[0.05] bg-surface/60 backdrop-blur-sm shadow-card transition-all duration-500 ease-premium ${project.link !== "#" ? "cursor-pointer hover:shadow-card-hover hover:border-accent/15" : ""}`}>
          {/* Card top */}
          <div className="relative h-52 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-accent-light/15 z-10" />
            <div className="absolute inset-0 bg-[#12121A] z-0" />
            <Image
              src={project.image}
              alt={project.title}
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-50 group-hover:opacity-65 group-hover:scale-105 transition-all duration-500 z-[5]"
            />

            {/* Category badge */}
            <div className="absolute top-3 left-3 z-20">
              <span className={`px-2.5 py-1 text-[9px] font-mono uppercase tracking-wider rounded-full backdrop-blur-sm ${
                project.category === "software"
                  ? "bg-accent/20 text-accent border border-accent/20"
                  : "bg-accent-light/20 text-accent-light border border-accent-light/20"
              }`}>
                {project.category}
              </span>
            </div>

            {/* View indicator on hover — only for projects with case study */}
            {project.link !== "#" && (
              <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="px-4 py-2 rounded-full bg-[rgba(10,10,15,0.7)] backdrop-blur-xl text-xs font-medium text-white border border-white/20">
                  View Case Study &rarr;
                </span>
              </div>
            )}

            {/* Coming soon badge for projects without case study */}
            {project.link === "#" && (
              <div className="absolute bottom-3 right-3 z-20">
                <span className="px-2.5 py-1 text-[9px] font-mono uppercase tracking-wider rounded-full bg-white/[0.06] backdrop-blur-sm text-subtle border border-white/[0.08]">
                  Coming Soon
                </span>
              </div>
            )}

            {/* Corner accents */}
            <div className="absolute top-2 left-2 w-5 h-5 border-l border-t border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
            <div className="absolute bottom-2 right-2 w-5 h-5 border-r border-b border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="text-lg font-bold group-hover:text-gradient transition-all duration-300 line-clamp-1">
                {project.title}
              </h3>
              <span className={`shrink-0 px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider rounded-full border ${
                project.status === "Completed" ? "bg-green-500/10 text-green-400 border-green-500/20" :
                project.status === "Ongoing" ? "bg-accent/10 text-accent/80 border-accent/20" :
                "bg-gray-500/10 text-gray-400 border-gray-500/20"
              }`}>
                {project.status}
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-3 leading-relaxed line-clamp-3">
              {project.description}
            </p>

            {(project.problem || project.impact) && (
              <div className="space-y-2 mb-3 pl-3 border-l border-accent/20">
                {project.problem && (
                  <div className="flex gap-2 text-[11px] leading-relaxed">
                    <span className="font-mono uppercase tracking-wider text-accent/70 shrink-0">Problem</span>
                    <span className="text-gray-500 line-clamp-2">{project.problem}</span>
                  </div>
                )}
                {project.impact && (
                  <div className="flex gap-2 text-[11px] leading-relaxed">
                    <span className="font-mono uppercase tracking-wider text-accent-light/80 shrink-0">Result</span>
                    <span className="text-gray-400 line-clamp-2">{project.impact}</span>
                  </div>
                )}
              </div>
            )}

            <p className="text-[11px] text-subtle mb-4">
              Made for <span className="text-accent/70">{project.madeFor}</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider rounded-full bg-accent/10 text-accent/80 border border-accent/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </a>
      )}
    </motion.div>
  );
}

/* ══════════════════════════════════════════════
   Page
   ══════════════════════════════════════════════ */

export default function ArchivePage() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = filter === "all"
    ? archiveProjects
    : archiveProjects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-primary text-white selection:bg-accent/30 selection:text-white">
      {/* ── Nav ── */}
      <header className="sticky top-0 z-50 border-b border-border bg-primary/80 backdrop-blur-2xl shadow-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a
            href="https://ibrahim-eng.dev"
            className="inline-flex items-center gap-2 text-sm text-subtle hover:text-white transition-all duration-400 ease-premium"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            <span>Ibrahim&apos;s Portfolio</span>
          </a>
          <span className="overline text-accent/50">
            Project Archive
          </span>
        </div>
      </header>

      <main className="relative overflow-hidden">
        {/* Background effects (matching portfolio) */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-accent/[0.04] rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-accent-light/[0.03] rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/12 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-28 relative z-10">
          {/* ── Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-10"
          >
            <div className="grid lg:grid-cols-5 gap-8 items-end">
              <div className="lg:col-span-3">
                <span className="overline text-accent/70">{"// Case Studies"}</span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gradient mt-4">
                  Problems I&apos;ve Solved
                </h1>
                <p className="text-sm sm:text-base text-muted mt-4 max-w-xl leading-relaxed">
                  Each project below is a real business problem &mdash; not a demo.
                  Multilingual AI agents, RTL Kurdish operations platforms, and computer
                  vision systems shipped for real clients.
                </p>
                <div className="w-16 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mt-6" />
              </div>

              {/* Filter tabs */}
              <div className="lg:col-span-2 flex justify-start lg:justify-end">
                <div className="inline-flex gap-1.5 p-1.5 rounded-full bg-surface/60 border border-white/[0.05] backdrop-blur-sm">
                  {filters.map((f) => (
                    <button
                      key={f}
                      onClick={() => setFilter(f)}
                      className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-400 ease-premium ${
                        filter === f
                          ? "bg-accent/15 text-accent border border-accent/20 shadow-glow-sm"
                          : "text-subtle hover:text-white/70 border border-transparent"
                      }`}
                    >
                      {f === "all" ? `All (${archiveProjects.length})` : f}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Card Grid (2 cols like portfolio) ── */}
          <div className="grid md:grid-cols-2 gap-7">
            <AnimatePresence mode="popLayout">
              {filtered.filter((p) => !p.archived).map((project, i) => (
                <ArchiveCard key={project.title} project={project} index={i} />
              ))}
            </AnimatePresence>
          </div>


          {/* ── Footer ── */}
          <div className="mt-16 sm:mt-20 pt-8 border-t border-border text-center">
            <p className="text-xs text-subtle font-mono">
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
