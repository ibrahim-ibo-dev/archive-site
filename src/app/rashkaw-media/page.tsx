"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import CaseNavigation from "@/components/CaseNavigation";
import Image from "next/image";

/* ══════════════════════════════════════════════
   Rashkaw Media Case Study — case-study.ibrahim-eng.dev/rashkaw-media
   Full Kurdish news & media platform — private client codebase
   ══════════════════════════════════════════════ */

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Express",
  "MongoDB",
  "REST API",
  "Trilingual i18n",
  "RTL Kurdish",
];

const fadeUp = {
  initial: false as const,
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

const sections = [
  { name: "سەرەکی", en: "Home", desc: "Editorial homepage — lead story, featured grid, latest by category, and a live breaking-news ticker" },
  { name: "خۆیی", en: "Local", desc: "Kurdistan-region news: cities, politics, community and daily affairs" },
  { name: "جیهانی", en: "International", desc: "World coverage — politics, conflict, diplomacy, and global analysis" },
  { name: "وەرزش", en: "Sports", desc: "Sports news plus live coverage — league standings, fixtures, and results across major competitions" },
  { name: "چیرۆکەکان", en: "Stories", desc: "Long-form human stories and narrative journalism" },
  { name: "کۆوار", en: "Opinions", desc: "Op-ed columns, analysis pieces, and guest writers" },
  { name: "دەنگدان", en: "Polls", desc: "Anonymous public polls with anti-repeat voting and live results" },
  { name: "بۆرسە", en: "Market", desc: "Currency & gold prices — USD, EUR, GBP, TRY, JOD, IQD with daily charts and a converter" },
  { name: "کەشوهەوا", en: "Weather", desc: "Kurdistan weather — 25 cities, hourly strip, 7-day forecast, powered by the Kurdistan Weather project" },
  { name: "دەربارە", en: "About", desc: "About the outlet, its mission, and contact" },
];

const features = [
  { name: "دەقی زیندوو", en: "Breaking Ticker", desc: "A live ticker strip surfaces breaking headlines above the fold, switchable on demand", iconId: "bolt" },
  { name: "سێ زمان", en: "Trilingual", desc: "Full Kurdish Sorani, Arabic, and English editions with correct RTL/LTR per language and translated-article linking", iconId: "lang" },
  { name: "بۆرسەی زیندوو", en: "Live Market", desc: "Daily exchange rates and gold prices across eight currencies with charts, history ranges, and a two-way converter", iconId: "chart" },
  { name: "کەشوهەوای کوردستان", en: "Weather", desc: "Integrated Kurdistan weather pages with per-city detail, hourly forecast, and weekly outlook", iconId: "cloud" },
  { name: "دەنگدانی گشتی", en: "Public Polls", desc: "Anonymous voting protected against repeat ballots, with results revealed to voters", iconId: "poll" },
  { name: "گەڕان و فلتەر", en: "Search & Tags", desc: "Full-text search, category pages, tag archives, and author pages across all editions", iconId: "search" },
  { name: "لایڤی وەرزش", en: "Sports Live", desc: "Live match center with league tables, fixtures, and results — La Liga, Premier League, Bundesliga, Serie A, Ligue 1, Champions League", iconId: "trophy" },
  { name: "لایڤی هەواڵ", en: "News Live", desc: "Rolling live coverage — editors publish a running feed of updates for breaking events", iconId: "live" },
  { name: "ڕاپرسی", en: "Surveys", desc: "Editorial surveys and reader polls embedded across the site for audience engagement", iconId: "survey" },
];

function FeatureIcon({ id }: { id: string }) {
  const common = { className: "w-6 h-6 sm:w-7 sm:h-7 text-accent", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.8 } as const;
  switch (id) {
    case "bolt":
      return <svg {...common}><path strokeLinecap="round" strokeLinejoin="round" d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" /></svg>;
    case "lang":
      return <svg {...common}><circle cx="12" cy="12" r="8" /><path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16M12 4c2.5 2.5 3.5 5.5 3.5 8s-1 5.5-3.5 8c-2.5-2.5-3.5-5.5-3.5-8s1-5.5 3.5-8z" /></svg>;
    case "chart":
      return <svg {...common}><path strokeLinecap="round" strokeLinejoin="round" d="M4 19h16M4 19V9m0 10l5-6 4 3 7-9" /></svg>;
    case "cloud":
      return <svg {...common}><path strokeLinecap="round" strokeLinejoin="round" d="M17.5 17a4.5 4.5 0 100-9 6 6 0 00-11.4 1.5A4 4 0 007 17h10.5z" /></svg>;
    case "poll":
      return <svg {...common}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M5 5h14a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1z" /></svg>;
    case "search":
      return <svg {...common}><circle cx="11" cy="11" r="6" /><path strokeLinecap="round" strokeLinejoin="round" d="M20 20l-4.5-4.5" /></svg>;
    case "trophy":
      return <svg {...common}><path strokeLinecap="round" strokeLinejoin="round" d="M8 4h8v5a4 4 0 01-8 0V4zM8 5H5a1 1 0 00-1 1c0 2 1.5 3.5 4 3.5M16 5h3a1 1 0 011 1c0 2-1.5 3.5-4 3.5M12 13v3m-3 3h6m-4-3h2v3h-2v-3z" /></svg>;
    case "live":
      return <svg {...common}><circle cx="12" cy="12" r="2.5" /><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5a6.5 6.5 0 000 9M16.5 7.5a6.5 6.5 0 010 9M4.5 4.5a11 11 0 000 15M19.5 4.5a11 11 0 010 15" /></svg>;
    case "survey":
      return <svg {...common}><path strokeLinecap="round" strokeLinejoin="round" d="M4 19V10m6 9V5m6 14v-7M3 21h18" /></svg>;
    default:
      return null;
  }
}

export default function RashkawMediaCaseStudy() {
  return (
    <div className="editorial-case min-h-screen bg-primary text-white selection:bg-accent/30 selection:text-white">
      {/* ── Nav ── */}
      <CaseNavigation>
          <a
            href="https://rashkaw.news"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-semibold tracking-wide bg-gradient-to-r from-accent to-accent-light text-primary shadow-glow-sm hover:shadow-glow transition-all duration-400 ease-premium"
          >
            <span>Visit Live Site</span>
            <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
      </CaseNavigation>

      <main id="case-content">
        {/* ── Hero ── */}
        <section className="editorial-hero relative py-16 sm:py-24 md:py-32 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-accent/[0.05] rounded-full blur-[200px] sm:blur-[250px] pointer-events-none" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <motion.span
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="overline text-accent/70"
            >
              {"// Client Project / Media Platform / 2026"}
            </motion.span>

            <motion.div
              initial={false}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-4 sm:mt-6 flex justify-center"
            >
              <div className="relative rounded-2xl border border-border bg-surface/40 backdrop-blur-sm px-6 sm:px-10 py-4 sm:py-6 shadow-card">
                <Image
                  src="/images/projects/rashkaw-logo.png"
                  alt="Rashkaw Media logo"
                  width={260}
                  height={150}
                  className="h-14 sm:h-20 w-auto object-contain"
                  priority
                />
              </div>
            </motion.div>

            <motion.h1
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mt-6 sm:mt-8"
            >
              <span className="text-gradient">Rashkaw Media</span>
            </motion.h1>

            <motion.p
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-4 sm:mt-6 text-sm sm:text-base text-muted max-w-2xl mx-auto leading-relaxed px-2"
            >
              A full multilingual news platform designed and built end-to-end for
              Rashkaw Media — custom-designed entirely around the client&apos;s own
              requirements. Ten editorial sections, live market data, Kurdistan
              weather, public polls, and a trilingual Kurdish/Arabic/English
              publishing system with a dedicated admin panel.
            </motion.p>

            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-10 px-2"
            >
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 sm:px-3 sm:py-1.5 text-[9px] sm:text-[10px] font-mono uppercase tracking-wider rounded-full bg-accent/10 text-accent/70 border border-accent/10"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Hero Screenshot ── */}
        <motion.section
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="editorial-shot px-4 sm:px-6 -mt-4 sm:-mt-8 mb-12 sm:mb-20"
        >
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-border shadow-card">
              <div className="h-8 sm:h-10 bg-surface/80 border-b border-border flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/50" />
                <div className="flex-1 ml-2 sm:ml-4">
                  <div className="max-w-[200px] sm:max-w-xs mx-auto h-4 sm:h-5 rounded-full bg-white/[0.05] border border-border flex items-center justify-center">
                    <span className="text-[8px] sm:text-[10px] font-mono text-subtle">rashkaw.news</span>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image src="/images/projects/rashkaw-media.png" alt="Rashkaw Media — homepage" fill className="object-cover object-top" sizes="(max-width:768px) 100vw,800px" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── Stats ── */}
        <motion.section
          {...fadeUp}
          className="border-y border-border bg-surface/40 backdrop-blur-sm"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {[
              { label: "Languages", value: "CKB / AR / EN" },
              { label: "Live Coverage", value: "Sports + News" },
              { label: "Engagement", value: "Polls & Surveys" },
              { label: "Domain", value: "rashkaw.news" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-base sm:text-xl md:text-2xl font-bold text-gradient">
                  {stat.value}
                </p>
                <p className="overline text-subtle mt-1 sm:mt-2 text-[9px] sm:text-[11px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── The Problem ── */}
        <section className="py-12 sm:py-20 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[180px] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.div {...fadeUp} className="case-panel rounded-2xl sm:rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-5 sm:p-8 shadow-card">
              <span className="overline text-accent/60 text-[9px] sm:text-[11px]">01 — The Brief</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-3 sm:mt-4 text-gradient">
                A Newsroom That Needed More Than a Blog
              </h2>
              <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mt-3 sm:mt-4 mb-4 sm:mb-6" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-muted leading-relaxed">
                <p>
                  Rashkaw Media is a Kurdish news outlet covering local, international,
                  sports, and opinion journalism. Off-the-shelf CMS themes couldn&apos;t
                  deliver what they wanted: a custom editorial layout, live market and
                  weather data baked into the site, public polls, and three language
                  editions — all in a design they could call their own.
                </p>
                <p>
                  The platform had to be <strong className="text-white/80">designed
                  from scratch around their editorial workflow</strong> — not a theme,
                  not a template. Every section, every data module, and the admin
                  panel were specified by the client and built to match, with the
                  codebase remaining private to them.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Sections Map ── */}
        <section className="py-12 sm:py-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent-light/[0.03] rounded-full blur-[200px] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.div {...fadeUp} className="text-center mb-8 sm:mb-12">
              <span className="overline text-accent/60">02 — What I Built</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-3 sm:mt-4 text-gradient">
                Ten Sections, One Platform
              </h2>
              <p className="text-sm text-muted mt-3 max-w-lg mx-auto">
                Every section of rashkaw.news — from the front page to the market desk.
              </p>
              <div className="w-16 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mx-auto mt-4" />
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4">
              {sections.map((s, i) => (
                <motion.div
                  key={s.en}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.05 }}
                  className="rounded-xl sm:rounded-2xl border border-border bg-surface/40 backdrop-blur-sm p-3 sm:p-4 shadow-card hover:shadow-card-hover hover:border-accent/15 transition-all duration-500 ease-premium"
                >
                  <h3 className="text-xs sm:text-sm font-semibold text-white/90 mb-0.5" dir="rtl">{s.name}</h3>
                  <p className="text-[9px] font-mono uppercase tracking-wider text-accent/60 mb-1.5">{s.en}</p>
                  <p className="text-[10px] sm:text-xs text-muted leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Feature Cards ── */}
        <section className="py-12 sm:py-20 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[200px] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.div {...fadeUp} className="text-center mb-8 sm:mb-12">
              <span className="overline text-accent/60">03 — Signature Features</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-3 sm:mt-4 text-gradient">
                Beyond a News Feed
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mx-auto mt-4" />
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.en}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                  className="rounded-2xl border border-border bg-surface/40 backdrop-blur-sm p-4 sm:p-5 text-center shadow-card hover:shadow-card-hover hover:border-accent/15 transition-all duration-500 ease-premium"
                >
                  <div className="flex items-center justify-center mb-2"><FeatureIcon id={f.iconId} /></div>
                  <h3 className="text-sm font-semibold text-white/90 mb-1" dir="rtl">{f.name}</h3>
                  <p className="text-[10px] sm:text-xs text-muted leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Screenshots ── */}
        <motion.section {...fadeUp} className="py-12 sm:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                { src: "/images/projects/rashkaw-media-sports.png", alt: "Rashkaw Media — sports leagues & standings", label: "وەرزش — خول و خشتەکان" },
                { src: "/images/projects/rashkaw-media-borsa.png", alt: "Rashkaw Media — currency & gold market", label: "بۆرسە — نرخی دراو و زێڕ" },
                { src: "/images/projects/rashkaw-media-weather.png", alt: "Rashkaw Media — Kurdistan weather", label: "کەشوهەوای کوردستان" },
              ].map((shot) => (
                <figure key={shot.src} className="rounded-2xl overflow-hidden border border-border shadow-card">
                  <div className="relative aspect-[16/9]">
                    <Image src={shot.src} alt={shot.alt} fill className="object-cover object-top" sizes="(max-width:768px) 100vw,480px" />
                  </div>
                  <figcaption className="px-4 py-3 text-[10px] sm:text-xs text-subtle font-mono text-center" dir="rtl">{shot.label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── Technical Deep Dive ── */}
        <section className="py-12 sm:py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-light/[0.03] rounded-full blur-[200px] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.div {...fadeUp} className="text-center mb-8 sm:mb-12">
              <span className="overline text-accent/60">04 — Technical Overview</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-3 sm:mt-4 text-gradient">
                Full-Stack, Client-Owned
              </h2>
              <p className="text-sm text-muted mt-3 max-w-lg mx-auto">
                The codebase is private and owned by Rashkaw Media — this overview covers the public architecture, not internals.
              </p>
              <div className="w-16 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mx-auto mt-4" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
              <motion.div {...fadeUp} className="case-panel rounded-2xl sm:rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-5 sm:p-8 shadow-card hover:shadow-card-hover hover:border-accent/15 transition-all duration-500 ease-premium">
                <span className="overline text-accent/60 text-[9px] sm:text-[11px]">Architecture</span>
                <h3 className="text-lg sm:text-xl font-bold mt-2 mb-3 text-white/90">Separate Public Site, API &amp; Admin</h3>
                <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mb-4" />
                <div className="space-y-3 text-xs sm:text-sm text-muted leading-relaxed">
                  <p>
                    The platform is split into three deployables: a
                    <strong className="text-white/80"> Next.js public frontend</strong>, a dedicated
                    REST API backend, and a standalone
                    <strong className="text-white/80"> React admin panel</strong> where editors manage
                    articles, categories, polls, editions, and market data.
                  </p>
                  <p>
                    Editorial content flows through the API to the public site with
                    server-side rendering and short-lived caching — fresh enough for a
                    newsroom, cheap enough to scale.
                  </p>
                </div>
              </motion.div>

              <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }} className="case-panel rounded-2xl sm:rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-5 sm:p-8 shadow-card hover:shadow-card-hover hover:border-accent/15 transition-all duration-500 ease-premium">
                <span className="overline text-accent/60 text-[9px] sm:text-[11px]">Localization</span>
                <h3 className="text-lg sm:text-xl font-bold mt-2 mb-3 text-white/90">Three Editions, Correctly Routed</h3>
                <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mb-4" />
                <div className="space-y-3 text-xs sm:text-sm text-muted leading-relaxed">
                  <p>
                    Kurdish Sorani is the default at the root URL;
                    <strong className="text-white/80"> /ar</strong> and
                    <strong className="text-white/80"> /en</strong> serve the Arabic and English editions.
                    Each page renders the correct <code className="text-accent/70">lang</code> and
                    <code className="text-accent/70">dir</code> server-side, and articles link to their
                    translations via hreflang.
                  </p>
                  <p>
                    Untranslated articles are excluded from other-language sitemaps
                    rather than silently showing Kurdish content under a foreign
                    URL — keeping each edition&apos;s index clean.
                  </p>
                </div>
              </motion.div>

              <motion.div {...fadeUp} className="case-panel rounded-2xl sm:rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-5 sm:p-8 shadow-card hover:shadow-card-hover hover:border-accent/15 transition-all duration-500 ease-premium">
                <span className="overline text-accent/60 text-[9px] sm:text-[11px]">Search Presence</span>
                <h3 className="text-lg sm:text-xl font-bold mt-2 mb-3 text-white/90">Indexing &amp; Discoverability</h3>
                <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mb-4" />
                <div className="space-y-3 text-xs sm:text-sm text-muted leading-relaxed">
                  <p>
                    Every article, category, tag, author page, poll, and section is
                    crawlable with <strong className="text-white/80">per-page metadata, hreflang
                    alternates, and a generated sitemap</strong> — over
                    <strong className="text-white/80"> 231 pages indexed on Google</strong> within the
                    first weeks of launch.
                  </p>
                  <p>
                    Market and weather pages are indexable too, turning utility
                    sections into real search entry points rather than app-only
                    widgets.
                  </p>
                </div>
              </motion.div>

              <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }} className="case-panel rounded-2xl sm:rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-5 sm:p-8 shadow-card hover:shadow-card-hover hover:border-accent/15 transition-all duration-500 ease-premium">
                <span className="overline text-accent/60 text-[9px] sm:text-[11px]">Engagement</span>
                <h3 className="text-lg sm:text-xl font-bold mt-2 mb-3 text-white/90">Live Coverage, Polls &amp; Surveys</h3>
                <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mb-4" />
                <div className="space-y-3 text-xs sm:text-sm text-muted leading-relaxed">
                  <p>
                    The newsroom runs <strong className="text-white/80">two kinds of live
                    coverage</strong>: a <strong className="text-white/80">sports live</strong> module
                    with league standings, fixtures, and results across major
                    competitions — and a <strong className="text-white/80">news live</strong> mode that
                    turns a developing story into a rolling feed of editorial
                    updates.
                  </p>
                  <p>
                    <strong className="text-white/80">Polls and editorial surveys</strong> let readers
                    vote anonymously with repeat-vote protection, giving the outlet
                    real audience signal instead of passive pageviews.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Impact ── */}
        <section className="py-12 sm:py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-light/[0.03] rounded-full blur-[180px] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.div {...fadeUp} className="rounded-2xl sm:rounded-3xl border border-accent/15 bg-accent/[0.03] p-5 sm:p-8">
              <h3 className="text-base sm:text-lg font-bold text-white/90 mb-3 flex items-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 18h6M10 21h4M12 3a6 6 0 00-4 10.5c.5.5.75 1 .75 1.5h6.5c0-.5.25-1 .75-1.5A6 6 0 0012 3z" />
                </svg>
                Impact
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                Live at <strong className="text-white/80">rashkaw.news</strong>, the platform gives a
                Kurdish newsroom a production-grade publishing system they fully own —
                trilingual editions, live utility data, and reader-engagement tools —
                with 231+ pages indexed on Google and a design built entirely to the
                client&apos;s own specification. The source code is private and remains
                the property of Rashkaw Media.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <motion.section
          {...fadeUp}
          className="border-t border-border py-14 sm:py-20 relative overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-accent/[0.04] rounded-full blur-[200px] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient">
              Read Rashkaw Media
            </h2>
            <p className="text-muted mt-2 sm:mt-3 text-xs sm:text-sm max-w-md mx-auto">
              A private, client-owned codebase — visit the live platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-8 sm:mt-10">
              <a
                href="https://rashkaw.news"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm font-semibold bg-gradient-to-r from-accent to-accent-light text-primary shadow-glow-sm hover:shadow-glow transition-all duration-400 ease-premium"
              >
                Visit rashkaw.news
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
              <Link
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm font-medium text-subtle border border-border hover:text-white hover:border-accent/20 transition-all duration-400 ease-premium"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                All Projects
              </Link>
            </div>
          </div>
        </motion.section>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-border py-6 sm:py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[10px] sm:text-xs text-subtle font-mono">
            &copy; {new Date().getFullYear()} Ibrahim Hussein &middot; Rashkaw Media Case Study
          </p>
        </div>
      </footer>
    </div>
  );
}
