"use client";

import { motion } from "framer-motion";
import Link from "next/link";

/* ══════════════════════════════════════════════
   Erbil Chess Academy Case Study
   ══════════════════════════════════════════════ */

const techStack = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "RTL / Kurdish",
  "Font Awesome",
  "Admin Panel",
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
};

export default function ChesCaseStudy() {
  return (
    <div className="min-h-screen bg-primary text-white selection:bg-accent/30 selection:text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-border bg-primary/80 backdrop-blur-2xl shadow-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-subtle hover:text-white transition-all duration-400 ease-premium">
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Archive</span>
          </Link>
          <a
            href="https://www.facebook.com/erbilchessacademy/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-semibold tracking-wide bg-gradient-to-r from-accent to-accent-light text-primary shadow-glow-sm hover:shadow-glow transition-all duration-400 ease-premium"
          >
            <span>View on Facebook</span>
            <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-accent/[0.05] rounded-full blur-[200px] sm:blur-[250px] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="overline text-accent/70">
              {"// Case Study / 2024"}
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }} className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mt-4 sm:mt-6">
              <span className="text-gradient">Erbil Chess</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent-light">Academy</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="mt-4 sm:mt-6 text-sm sm:text-base text-muted max-w-2xl mx-auto leading-relaxed px-2">
              The official website for Erbil Chess Academy — the Erbil branch of the Asia Chess Federation. Full RTL Kurdish website with activities tracker, admin panel, member registration, and tournament management.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-10 px-2">
              {techStack.map((tech) => (
                <span key={tech} className="px-2.5 py-1 sm:px-3 sm:py-1.5 text-[9px] sm:text-[10px] font-mono uppercase tracking-wider rounded-full bg-accent/10 text-accent/70 border border-accent/10">{tech}</span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Mock Screenshot */}
        <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.5 }} className="px-4 sm:px-6 -mt-4 sm:-mt-8 mb-12 sm:mb-20">
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-border shadow-card">
              <div className="h-8 sm:h-10 bg-surface/80 border-b border-border flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/50" />
                <div className="flex-1 ml-2 sm:ml-4">
                  <div className="max-w-[200px] sm:max-w-xs mx-auto h-4 sm:h-5 rounded-full bg-white/[0.05] border border-border flex items-center justify-center">
                    <span className="text-[8px] sm:text-[10px] font-mono text-subtle">erbilchessacademy.com</span>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[16/9] bg-gradient-to-br from-accent/[0.08] via-surface/60 to-accent-light/[0.05] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-accent/15 border border-accent/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-accent/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                    </svg>
                  </div>
                  <p className="text-[10px] sm:text-xs text-subtle font-mono">Erbil Chess Academy — Kurdish RTL Website</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Stats */}
        <motion.section {...fadeUp} className="border-y border-border bg-surface/40 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {[
              { label: "Client", value: "Erbil Chess Academy" },
              { label: "Organization", value: "Asia Chess Federation" },
              { label: "Language", value: "Kurdish RTL" },
              { label: "Status", value: "Completed" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-base sm:text-xl md:text-2xl font-bold text-gradient">{stat.value}</p>
                <p className="overline text-subtle mt-1 sm:mt-2 text-[9px] sm:text-[11px]">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Content */}
        <section className="py-12 sm:py-20 md:py-28 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[200px] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
              {/* Problem */}
              <motion.div {...fadeUp} className="rounded-2xl sm:rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-5 sm:p-8 shadow-card hover:shadow-card-hover hover:border-accent/15 transition-all duration-500 ease-premium">
                <span className="overline text-accent/60 text-[9px] sm:text-[11px]">01 — The Problem</span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-3 sm:mt-4 leading-snug text-gradient">Why I Built This</h2>
                <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mt-3 sm:mt-4 mb-4 sm:mb-6" />
                <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-muted leading-relaxed">
                  <p>Erbil Chess Academy — the official Erbil branch of the Asia Chess Federation — had no digital presence. Members and participants had no way to find schedules, results, or contact information online.</p>
                  <p>The academy needed a professional website in Kurdish that reflected its status as an official international federation branch, with the ability to post activities and manage content through an admin panel.</p>
                </div>
              </motion.div>

              {/* Solution */}
              <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }} className="rounded-2xl sm:rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-5 sm:p-8 shadow-card hover:shadow-card-hover hover:border-accent/15 transition-all duration-500 ease-premium">
                <span className="overline text-accent/60 text-[9px] sm:text-[11px]">02 — The Solution</span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-3 sm:mt-4 leading-snug text-gradient">What Was Built</h2>
                <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mt-3 sm:mt-4 mb-4 sm:mb-6" />
                <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-muted leading-relaxed">
                  <p><strong className="text-white/80">Full RTL Kurdish UI:</strong> Complete right-to-left layout for Kurdish (Sorani) with proper typography, navigation, and content structure.</p>
                  <p><strong className="text-white/80">Activities System:</strong> Dynamic activities page with search/filter, loading states, and data loaded via JavaScript — supporting tournament results, events, and announcements.</p>
                  <p><strong className="text-white/80">Admin Panel:</strong> Password-protected admin dashboard for managing content, adding activities, and updating academy information.</p>
                </div>
              </motion.div>
            </div>

            {/* Pages */}
            <motion.div {...fadeUp} className="mt-10 sm:mt-16">
              <div className="text-center mb-6 sm:mb-10">
                <span className="overline text-accent/60">03 — Site Structure</span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-3 sm:mt-4 leading-snug text-gradient">Pages & Features</h2>
                <div className="w-16 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mx-auto mt-3 sm:mt-4" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {[
                  { title: "Homepage (index.html)", desc: "Hero section, about the academy, recent activities preview, contact info with email, phone, location, and social media links." },
                  { title: "Activities (activities.html)", desc: "Complete activities archive with live search filter. Loads all data dynamically via JavaScript. Chess knight animated loading spinner." },
                  { title: "Admin Panel", desc: "Password-protected admin login page with a management dashboard for adding and editing academy activities and content." },
                ].map((p) => (
                  <div key={p.title} className="rounded-2xl sm:rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-5 sm:p-6 shadow-card hover:shadow-card-hover hover:border-accent/15 transition-all duration-500 ease-premium">
                    <h3 className="text-sm sm:text-base font-semibold text-white/90 mb-2 sm:mb-3">{p.title}</h3>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Details */}
            <motion.div {...fadeUp} className="mt-10 sm:mt-14 rounded-2xl sm:rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-5 sm:p-8 shadow-card">
              <span className="overline text-accent/60 text-[9px] sm:text-[11px]">04 — Client Info</span>
              <h2 className="text-xl sm:text-2xl font-bold mt-3 sm:mt-4 leading-snug text-gradient">Erbil Chess Academy</h2>
              <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mt-3 mb-5" />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: "Email", value: "erbilchessacademy@gmail.com" },
                  { label: "Phone", value: "+964 750 832 5657" },
                  { label: "Location", value: "Erbil, Kurdistan Region" },
                ].map((info) => (
                  <div key={info.label} className="px-4 py-3 rounded-xl bg-accent/[0.06] border border-accent/10">
                    <p className="text-[10px] font-mono text-accent/60 uppercase tracking-wider mb-1">{info.label}</p>
                    <p className="text-xs sm:text-sm text-white/80">{info.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <motion.section {...fadeUp} className="border-t border-border py-14 sm:py-20 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-[200px] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient">See More Projects</h2>
            <p className="text-muted mt-2 sm:mt-3 text-xs sm:text-sm max-w-md mx-auto">
              Ashti Library is another Kurdish website built for a real client — with AI recommendations, RTL support, and WhatsApp ordering.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-8 sm:mt-10">
              <Link href="/ashti-library" className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm font-semibold bg-gradient-to-r from-accent to-accent-light text-primary shadow-glow-sm hover:shadow-glow transition-all duration-400 ease-premium">
                View Ashti Library
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </Link>
              <Link href="/" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm font-medium text-subtle border border-border hover:text-white hover:border-accent/20 transition-all duration-400 ease-premium">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                All Projects
              </Link>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-border py-6 sm:py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[10px] sm:text-xs text-subtle font-mono">
            &copy; {new Date().getFullYear()} Ibrahim Hussein &middot; Erbil Chess Academy Case Study
          </p>
        </div>
      </footer>
    </div>
  );
}
