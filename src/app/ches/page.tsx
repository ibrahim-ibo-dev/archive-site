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
              <span className="text-gradient">Erbil Chess Academy</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent-light">Building Digital Presence for Kurdistan&apos;s Chess Community</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="mt-4 sm:mt-6 text-sm sm:text-base text-muted max-w-2xl mx-auto leading-relaxed px-2">
              The official Erbil branch of the Asia Chess Federation had no online presence. I built them a full RTL Kurdish website with an activities system and admin panel—proving that local organizations deserve professional digital tools.
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

        <motion.section {...fadeUp} className="border-y border-border bg-surface/40 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {[
              { label: "Timeline", value: "2 Weeks" },
              { label: "Organization", value: "Asia Chess Federation" },
              { label: "Language", value: "Kurdish RTL" },
              { label: "Status", value: "Live" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-base sm:text-xl md:text-2xl font-bold text-gradient">{stat.value}</p>
                <p className="overline text-subtle mt-1 sm:mt-2 text-[9px] sm:text-[11px]">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <section className="py-16 sm:py-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[200px] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.div {...fadeUp} className="text-center mb-10 sm:mb-14">
              <span className="overline text-accent/60">01 &mdash; The Problem</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 sm:mt-4 text-gradient">
                No Digital Presence
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mx-auto mt-4" />
            </motion.div>

            <motion.div {...fadeUp} className="prose prose-invert prose-sm sm:prose-base max-w-none">
              <p className="text-muted leading-relaxed">
                Erbil Chess Academy is the official Erbil branch of the <strong className="text-white/90">Asia Chess Federation</strong>—a 
                legitimate, internationally recognized organization. But they had no website.
              </p>
              <p className="text-muted leading-relaxed mt-4">
                Members couldn't find tournament schedules online. Parents couldn't see results. New participants had no way to 
                learn about the academy or contact them. Everything was shared through <strong className="text-white/90">Facebook posts</strong> 
                and word of mouth.
              </p>
              <p className="text-muted leading-relaxed mt-4">
                They needed a professional website in <strong className="text-white/90">Kurdish (Sorani)</strong> with proper RTL layout, 
                an activities system for posting tournament results and announcements, and an admin panel so they could manage 
                content themselves.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 sm:py-24 border-t border-border bg-surface/20 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-light/[0.03] rounded-full blur-[180px] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.div {...fadeUp} className="text-center mb-10 sm:mb-14">
              <span className="overline text-accent/60">02 &mdash; The Approach</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 sm:mt-4 text-gradient">
                Simple, Functional, Kurdish
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mx-auto mt-4" />
            </motion.div>

            <motion.div {...fadeUp} className="prose prose-invert prose-sm sm:prose-base max-w-none">
              <p className="text-muted leading-relaxed">
                I kept the stack simple: <strong className="text-white/90">HTML, CSS, and vanilla JavaScript</strong>. No frameworks, 
                no build tools—just clean, maintainable code that anyone could host and update.
              </p>
              <p className="text-muted leading-relaxed mt-4">
                The entire site is <strong className="text-white/90">RTL (right-to-left)</strong> for Kurdish. Every element—navigation, 
                typography, layout—flows naturally for Kurdish readers. This wasn't an afterthought; it was the foundation.
              </p>
              <p className="text-muted leading-relaxed mt-4">
                I built a dynamic activities system that loads data via JavaScript, with live search and filtering. The admin panel 
                is password-protected and lets academy staff add tournament results, events, and announcements without touching code.
              </p>
              <p className="text-muted leading-relaxed mt-4">
                The goal: <strong className="text-white/90">give them independence</strong>. They shouldn't need a developer to update 
                their own website.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 sm:py-24 border-t border-border relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.04] rounded-full blur-[220px] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.div {...fadeUp} className="text-center mb-10 sm:mb-14">
              <span className="overline text-accent/60">03 &mdash; The Solution</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 sm:mt-4 text-gradient">
                A Professional Kurdish Website
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mx-auto mt-4" />
            </motion.div>

            <motion.div {...fadeUp} className="prose prose-invert prose-sm sm:prose-base max-w-none">
              <p className="text-muted leading-relaxed">
                The site has three main pages: a <strong className="text-white/90">homepage</strong> with hero section, about info, 
                recent activities preview, and contact details; an <strong className="text-white/90">activities page</strong> with 
                live search/filter and a chess knight loading animation; and a <strong className="text-white/90">password-protected 
                admin panel</strong> for content management.
              </p>
              <p className="text-muted leading-relaxed mt-4">
                Everything is in Kurdish (Sorani) with proper RTL layout. The activities system loads data dynamically and supports 
                tournament results, events, and announcements. The admin panel is simple enough for non-technical staff to use.
              </p>
              <p className="text-muted leading-relaxed mt-4">
                Contact information—email, phone, location, social media—is prominently displayed. The design is clean, professional, 
                and reflects the academy's status as an official Asia Chess Federation branch.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 sm:py-24 border-t border-border bg-surface/20 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[200px] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.div {...fadeUp} className="text-center mb-10 sm:mb-14">
              <span className="overline text-accent/60">04 &mdash; Inside the Build</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 sm:mt-4 text-gradient">
                Key Features
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mx-auto mt-4" />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {[
                { title: "Full RTL Kurdish UI", desc: "Complete right-to-left layout for Kurdish (Sorani) with proper typography, navigation, and content structure." },
                { title: "Activities System", desc: "Dynamic activities page with live search/filter, loading states, and JavaScript data loading for tournament results and events." },
                { title: "Admin Panel", desc: "Password-protected dashboard for managing content, adding activities, and updating academy information without code." },
                { title: "Homepage", desc: "Hero section, about the academy, recent activities preview, and contact info with email, phone, location, and social links." },
                { title: "Responsive Design", desc: "Mobile-first layout that works on all devices with proper RTL support and Kurdish typography at every breakpoint." },
                { title: "Simple Stack", desc: "HTML5, CSS3, vanilla JavaScript, and Font Awesome icons. No frameworks, no build tools—just clean, maintainable code." },
              ].map((feature) => (
                <motion.div
                  key={feature.title}
                  {...fadeUp}
                  className="rounded-2xl sm:rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-5 sm:p-6 shadow-card hover:shadow-card-hover hover:border-accent/15 transition-all duration-500 ease-premium"
                >
                  <h3 className="text-sm sm:text-base font-semibold text-white/90 mb-2 sm:mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 border-t border-border relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent-light/[0.03] rounded-full blur-[200px] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.div {...fadeUp} className="text-center mb-10 sm:mb-14">
              <span className="overline text-accent/60">05 &mdash; The Result</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 sm:mt-4 text-gradient">
                A Digital Home for Kurdistan&apos;s Chess Community
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mx-auto mt-4" />
            </motion.div>

            <motion.div {...fadeUp} className="prose prose-invert prose-sm sm:prose-base max-w-none">
              <p className="text-muted leading-relaxed">
                The site launched in <strong className="text-white/90">2 weeks</strong> and gave the academy a professional online presence. 
                Members can now find tournament schedules, parents can check results, and new participants can learn about the academy 
                and contact them—all in Kurdish.
              </p>
              <p className="text-muted leading-relaxed mt-4">
                The admin panel works exactly as intended: academy staff update content themselves without needing a developer. 
                The activities system handles tournament results, events, and announcements with live search and filtering.
              </p>
              <p className="text-muted leading-relaxed mt-4">
                This project proved that <strong className="text-white/90">local organizations deserve professional digital tools</strong>. 
                You don't need a massive budget or complex infrastructure—just clean code, proper RTL support, and a focus on what matters.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 sm:py-24 border-t border-border bg-surface/20 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[180px] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.div {...fadeUp} className="text-center mb-10 sm:mb-14">
              <span className="overline text-accent/60">06 &mdash; Lessons Learned</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 sm:mt-4 text-gradient">
                What I'd Do Differently
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mx-auto mt-4" />
            </motion.div>

            <motion.div {...fadeUp} className="space-y-6 sm:space-y-8">
              <div className="rounded-2xl sm:rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-6 sm:p-8">
                <h3 className="text-base sm:text-lg font-semibold text-white/90 mb-3">Simplicity is a Feature</h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  Using vanilla JavaScript instead of a framework made the site easier to maintain and host. Sometimes the simplest 
                  solution is the right one—especially for clients who need independence, not complexity.
                </p>
              </div>

              <div className="rounded-2xl sm:rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-6 sm:p-8">
                <h3 className="text-base sm:text-lg font-semibold text-white/90 mb-3">RTL Support is Non-Negotiable</h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  Building RTL support from the start—not as an afterthought—made the entire site feel natural for Kurdish readers. 
                  Language support isn't a feature; it's respect.
                </p>
              </div>

              <div className="rounded-2xl sm:rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-6 sm:p-8">
                <h3 className="text-base sm:text-lg font-semibold text-white/90 mb-3">Local Organizations Matter</h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  This wasn't a high-budget project, but it mattered. Giving a local chess academy a professional digital presence 
                  helps them serve their community better. Not every project needs to be a startup—some just need to work.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-12 sm:py-16 border-t border-border bg-surface/30 relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">

            <motion.div {...fadeUp} className="rounded-2xl sm:rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-6 sm:p-8 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-white/90">Client Information</h3>
                  <p className="text-xs text-accent/60">Erbil Chess Academy</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pl-0 sm:pl-13">
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

        <motion.section {...fadeUp} className="border-t border-border py-16 sm:py-24 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-[220px] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-4">
                Need a Kurdish website?
              </h2>
              <p className="text-muted text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                I've built multiple RTL Kurdish websites for real clients. If you need a professional digital presence 
                for your organization, let's talk.
              </p>
            </motion.div>
            <motion.div {...fadeUp} className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-8 sm:mt-10">
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
            </motion.div>
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
