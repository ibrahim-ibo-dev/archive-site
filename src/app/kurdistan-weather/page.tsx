"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

/* ══════════════════════════════════════════════
   Kurdistan Weather Case Study — case-study.ibrahim-eng.dev/kurdistan-weather
   Fully Kurdish (Sorani, RTL) weather platform for 25 Kurdistan cities
   ══════════════════════════════════════════════ */

const techStack = [
  "Next.js 15",
  "React 19",
  "TypeScript",
  "Tailwind CSS",
  "Open-Meteo API",
  "ISR / SSG",
  "RTL Kurdish",
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

const features = [
  { name: "کەش و هەوای ئێستا", desc: "Live conditions: temperature, feels-like, humidity, wind speed & direction, pressure, visibility, UV index, cloud cover, and rain probability", iconId: "thermo" },
  { name: "پێشبینی کاتژمێری", desc: "Next 25 hours as a horizontal strip with a temperature curve, condition icons, and rain probability per hour", iconId: "clock" },
  { name: "پێشبینی ٧ ڕۆژە", desc: "Full week forecast with min/max temperature bars, expandable daily details, sunrise and sunset times", iconId: "calendar" },
  { name: "٢٥ شار و شارۆچکە", desc: "Every supported city on one grid — Erbil, Sulaymaniyah, Duhok, Zakho, and small towns like Barzan and Mergasor", iconId: "grid" },
  { name: "گەڕان و شوێنی من", desc: "Search in Kurdish or English with spelling aliases, plus opt-in geolocation that finds your nearest city", iconId: "pin" },
  { name: "ئاسمانی زیندوو", desc: "The entire background adapts to the real weather and time — stars at night, rain, snow, fog, dust, and storm flashes", iconId: "sky" },
];

function FeatureIcon({ id }: { id: string }) {
  const common = { className: "w-6 h-6 sm:w-7 sm:h-7 text-accent", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.8 } as const;
  switch (id) {
    case "thermo":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 14.76V5a2 2 0 10-4 0v9.76a4.5 4.5 0 104 0zM12 11v4" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" strokeLinecap="round" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l2.5 2.5" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...common}>
          <rect x="4" y="5" width="16" height="15" rx="2" strokeLinecap="round" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 10h16M8 3v4M16 3v4" />
        </svg>
      );
    case "grid":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="7" height="7" rx="1.5" strokeLinecap="round" />
          <rect x="13" y="4" width="7" height="7" rx="1.5" strokeLinecap="round" />
          <rect x="4" y="13" width="7" height="7" rx="1.5" strokeLinecap="round" />
          <rect x="13" y="13" width="7" height="7" rx="1.5" strokeLinecap="round" />
        </svg>
      );
    case "pin":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-5.5-7-11a7 7 0 1114 0c0 5.5-7 11-7 11z" />
          <circle cx="12" cy="10" r="2.5" strokeLinecap="round" />
        </svg>
      );
    case "sky":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.5 15a4.5 4.5 0 100-9 6 6 0 00-11.4 1.5A4 4 0 007 15h10.5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 2v1.5M21.5 4.5L20 6M22 8h-1.5" />
        </svg>
      );
    default:
      return null;
  }
}

const skyCategories = [
  { name: "Clear", phase: "Day / Night", note: "Gradient sky + stars at night" },
  { name: "Cloudy", phase: "All phases", note: "Drifting cloud layers" },
  { name: "Rain", phase: "All phases", note: "Falling rain streaks" },
  { name: "Storm", phase: "All phases", note: "Rain + lightning flashes" },
  { name: "Snow", phase: "All phases", note: "Two-layer snowfall" },
  { name: "Fog", phase: "All phases", note: "Moving mist bands" },
  { name: "Dust", phase: "All phases", note: "Hazy dust overlay" },
];

export default function KurdistanWeatherCaseStudy() {
  return (
    <div className="min-h-screen bg-primary text-white selection:bg-accent/30 selection:text-white">
      {/* ── Nav ── */}
      <header className="sticky top-0 z-50 border-b border-border bg-primary/80 backdrop-blur-2xl shadow-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-subtle hover:text-white transition-all duration-400 ease-premium"
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Archive</span>
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://github.com/ibrahim-ibo-dev/kurdistan-weather"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-semibold tracking-wide border border-border text-subtle hover:text-white hover:border-accent/20 transition-all duration-400 ease-premium"
            >
              <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.755-1.333-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.997.108-.775.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.955-.266 1.98-.399 3-.405 1.02.006 2.045.14 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.225.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              <span>Source Code</span>
            </a>
            <a
              href="https://weather.ibrahim-eng.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-semibold tracking-wide bg-gradient-to-r from-accent to-accent-light text-primary shadow-glow-sm hover:shadow-glow transition-all duration-400 ease-premium"
            >
              <span>Visit Live Site</span>
              <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* ── Hero ── */}
        <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-accent/[0.05] rounded-full blur-[200px] sm:blur-[250px] pointer-events-none" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="overline text-accent/70"
            >
              {"// Personal R&D / 2026"}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mt-4 sm:mt-6"
            >
              <span className="text-gradient">
                Kurdistan Weather
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent-light" dir="rtl">
                کەش و هەوای کوردستان
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-4 sm:mt-6 text-sm sm:text-base text-muted max-w-2xl mx-auto leading-relaxed px-2"
            >
              A fully Kurdish-language weather platform covering 25 cities and towns
              across Kurdistan — live conditions, a 25-hour forecast strip, a 7-day
              outlook, and an atmospheric sky background that mirrors the real
              weather and time of day. Built on the keyless Open-Meteo API.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
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
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="px-4 sm:px-6 -mt-4 sm:-mt-8 mb-12 sm:mb-20"
        >
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-border shadow-card">
              <div className="h-8 sm:h-10 bg-surface/80 border-b border-border flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/50" />
                <div className="flex-1 ml-2 sm:ml-4">
                  <div className="max-w-[200px] sm:max-w-xs mx-auto h-4 sm:h-5 rounded-full bg-white/[0.05] border border-border flex items-center justify-center">
                    <span className="text-[8px] sm:text-[10px] font-mono text-subtle">weather.ibrahim-eng.dev</span>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image src="/images/projects/kurdistan-weather.png" alt="Kurdistan Weather — screenshot" fill className="object-cover object-top" sizes="(max-width:768px) 100vw,800px" priority />
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
              { label: "Locations", value: "25 Cities & Towns" },
              { label: "Weather Data", value: "Open-Meteo API" },
              { label: "Language", value: "Kurdish Sorani (RTL)" },
              { label: "Domain", value: "weather.ibrahim-eng.dev" },
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
            <motion.div {...fadeUp} className="rounded-2xl sm:rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-5 sm:p-8 shadow-card">
              <span className="overline text-accent/60 text-[9px] sm:text-[11px]">01 — The Problem</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-3 sm:mt-4 text-gradient">
                Weather Apps Ignore Kurdistan&apos;s Towns — and Its Language
              </h2>
              <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mt-3 sm:mt-4 mb-4 sm:mb-6" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-muted leading-relaxed">
                <p>
                  Every mainstream weather app is in English or Arabic. For millions of
                  Kurdish speakers — especially older people and those in smaller
                  towns — checking the weather means reading a foreign language just
                  to know if it will rain tomorrow.
                </p>
                <p>
                  Worse, global apps only cover the big cities. Towns like
                  <strong className="text-white/80"> Barzan, Penjwen, Mergasor, or Sidakan</strong> simply
                  don&apos;t exist on most platforms — yet that&apos;s where weather matters
                  most: farming, travel through mountain roads, and daily life.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Features Grid ── */}
        <section className="py-12 sm:py-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent-light/[0.03] rounded-full blur-[200px] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.div {...fadeUp} className="text-center mb-8 sm:mb-12">
              <span className="overline text-accent/60">02 — What I Built</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-3 sm:mt-4 text-gradient">
                Six Core Features
              </h2>
              <p className="text-sm text-muted mt-3 max-w-lg mx-auto">
                Every screen is natively Kurdish Sorani with a right-to-left layout and Kurdish-Indic digits throughout.
              </p>
              <div className="w-16 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mx-auto mt-4" />
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.name}
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

        {/* ── Technical Deep Dive ── */}
        <section className="py-12 sm:py-20 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[200px] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.div {...fadeUp} className="text-center mb-8 sm:mb-12">
              <span className="overline text-accent/60">03 — Technical Deep Dive</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-3 sm:mt-4 text-gradient">
                Architecture &amp; How It Works
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mx-auto mt-4" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
              {/* Open-Meteo Service Layer */}
              <motion.div {...fadeUp} className="rounded-2xl sm:rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-5 sm:p-8 shadow-card hover:shadow-card-hover hover:border-accent/15 transition-all duration-500 ease-premium">
                <span className="overline text-accent/60 text-[9px] sm:text-[11px]">Data Layer</span>
                <h3 className="text-lg sm:text-xl font-bold mt-2 mb-3 text-white/90">Open-Meteo Service Layer</h3>
                <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mb-4" />
                <div className="space-y-3 text-xs sm:text-sm text-muted leading-relaxed">
                  <p>
                    All API communication lives in a single module
                    (<code className="text-accent/70">src/lib/weather/service.ts</code>) powered by
                    <strong className="text-white/80"> Open-Meteo</strong> — a free weather API that requires
                    no API key. Raw responses are mapped into clean internal types,
                    so the UI never touches API shapes and the provider can be swapped
                    without changing a single component.
                  </p>
                  <p>
                    Requests carry a <strong className="text-white/80">9-second timeout</strong>, one automatic
                    retry, a 10-minute in-memory cache, and Next.js ISR revalidation
                    (<code className="text-accent/70">revalidate: 600</code>) — so the app stays fast under
                    load and resilient when the API hiccups.
                  </p>
                </div>
              </motion.div>

              {/* Batched Multi-City Requests */}
              <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }} className="rounded-2xl sm:rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-5 sm:p-8 shadow-card hover:shadow-card-hover hover:border-accent/15 transition-all duration-500 ease-premium">
                <span className="overline text-accent/60 text-[9px] sm:text-[11px]">Efficiency</span>
                <h3 className="text-lg sm:text-xl font-bold mt-2 mb-3 text-white/90">One Request for 25 Cities</h3>
                <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mb-4" />
                <div className="space-y-3 text-xs sm:text-sm text-muted leading-relaxed">
                  <p>
                    Instead of 25 separate calls, the cities grid uses
                    <strong className="text-white/80"> a single batched request</strong> — Open-Meteo accepts
                    comma-separated latitude/longitude lists and returns one array.
                    Every city&apos;s current temperature, condition, and rain probability
                    arrives in a single round trip.
                  </p>
                  <p>
                    Coordinates are fixed geographic points in a local dataset
                    (<code className="text-accent/70">locations.ts</code>), so city names are never sent to
                    the API — searches resolve locally, in Kurdish or English.
                  </p>
                </div>
              </motion.div>

              {/* Living Sky Engine */}
              <motion.div {...fadeUp} className="rounded-2xl sm:rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-5 sm:p-8 shadow-card hover:shadow-card-hover hover:border-accent/15 transition-all duration-500 ease-premium">
                <span className="overline text-accent/60 text-[9px] sm:text-[11px]">Atmosphere</span>
                <h3 className="text-lg sm:text-xl font-bold mt-2 mb-3 text-white/90">Weather-Driven Sky Engine</h3>
                <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mb-4" />
                <div className="space-y-3 text-xs sm:text-sm text-muted leading-relaxed">
                  <p>
                    WMO weather codes are mapped to <strong className="text-white/80">7 visual sky
                    categories</strong>, and the real sunrise/sunset times from the API
                    pick one of <strong className="text-white/80">4 phases</strong> — day, dawn, dusk, or
                    night. Dawn and dusk trigger warm palettes within a 40-minute
                    window around the actual sun times.
                  </p>
                  <p>
                    The result is a <strong className="text-white/80">pure-CSS atmosphere</strong>: stars at
                    night, drifting clouds, rain streaks, two-layer snowfall, moving
                    fog bands, dust haze, and lightning flashes — zero canvas, zero
                    images, cheap to paint on any device.
                  </p>
                </div>
              </motion.div>

              {/* Sky Categories Table */}
              <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }} className="rounded-2xl sm:rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-5 sm:p-8 shadow-card hover:shadow-card-hover hover:border-accent/15 transition-all duration-500 ease-premium">
                <span className="overline text-accent/60 text-[9px] sm:text-[11px]">Sky Categories</span>
                <h3 className="text-lg sm:text-xl font-bold mt-2 mb-3 text-white/90">7 Atmospheric States</h3>
                <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mb-4" />
                <div className="space-y-1.5">
                  {skyCategories.map((s) => (
                    <div key={s.name} className="flex items-center justify-between text-[11px] sm:text-xs gap-2 py-1 border-b border-border/60 last:border-0">
                      <span className="text-white/80 font-medium shrink-0">{s.name}</span>
                      <span className="text-muted text-right">{s.note}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* More technical notes */}
            <motion.div {...fadeUp} className="mt-10 sm:mt-16">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {[
                  {
                    title: "Full Kurdish Localization",
                    desc: "Kurdish-Indic digits (٠١٢٣٤٥٦٧٨٩), Kurdish month and weekday names, Kurdish compass directions (باکووری ڕۆژهەڵات), and human-readable relative times like \"نوێکراوەتەوە ٨ خولەک لەمەوبەر\" — all formatted by hand, no i18n library.",
                  },
                  {
                    title: "Search, Aliases & Geolocation",
                    desc: "Search resolves Kurdish, English, and alternate spellings (بەرزان/بارزان, hewler, slemany) via an alias map. Opt-in geolocation finds the nearest supported city using the Haversine formula — never overriding a manual choice.",
                  },
                  {
                    title: "Hand-Built SVG Icon System",
                    desc: "Every weather icon — sun, moon, clouds, rain, snow, storm — is a hand-drawn animated SVG. No emojis, no icon fonts, perfectly consistent with the design language.",
                  },
                ].map((feature) => (
                  <div
                    key={feature.title}
                    className="rounded-2xl sm:rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-5 sm:p-6 shadow-card hover:shadow-card-hover hover:border-accent/15 transition-all duration-500 ease-premium"
                  >
                    <h3 className="text-sm sm:text-base font-semibold text-white/90 mb-2 sm:mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* SSG + resilience notes */}
            <motion.div {...fadeUp} className="mt-6 sm:mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {[
                  {
                    title: "Static Generation + Live Data",
                    desc: "All 25 city pages are statically generated (generateStaticParams) with per-city Kurdish metadata for SEO. The server fetches weather at request time with ISR; if it fails, the client falls back to /api routes seamlessly.",
                  },
                  {
                    title: "Quiet Auto-Refresh",
                    desc: "The app silently refetches every 10 minutes and shows a live \"updated X minutes ago\" label that ticks every minute — users always know how fresh the data is without a manual reload.",
                  },
                  {
                    title: "Shareable City URLs",
                    desc: "Switching cities updates the URL via history.replaceState (/weather/erbil, /weather/halabja...) so any city's forecast can be bookmarked or shared directly.",
                  },
                ].map((feature) => (
                  <div
                    key={feature.title}
                    className="rounded-2xl sm:rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-5 sm:p-6 shadow-card hover:shadow-card-hover hover:border-accent/15 transition-all duration-500 ease-premium"
                  >
                    <h3 className="text-sm sm:text-base font-semibold text-white/90 mb-2 sm:mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
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
                Deployed live at <strong className="text-white/80">weather.ibrahim-eng.dev</strong>, Kurdistan
                Weather is the first weather experience built natively for Kurdish
                speakers — covering not just the big cities but 25 cities and towns
                across the region, with a living sky that reflects the actual weather
                outside, entirely in Kurdish Sorani.
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
              Check Kurdistan&apos;s Weather
            </h2>
            <p className="text-muted mt-2 sm:mt-3 text-xs sm:text-sm max-w-md mx-auto">
              Try the live app or explore the full source code on GitHub.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-8 sm:mt-10">
              <a
                href="https://weather.ibrahim-eng.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm font-semibold bg-gradient-to-r from-accent to-accent-light text-primary shadow-glow-sm hover:shadow-glow transition-all duration-400 ease-premium"
              >
                Visit weather.ibrahim-eng.dev
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
              <a
                href="https://github.com/ibrahim-ibo-dev/kurdistan-weather"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm font-medium border border-border text-subtle hover:text-white hover:border-accent/20 transition-all duration-400 ease-premium"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.755-1.333-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.997.108-.775.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.955-.266 1.98-.399 3-.405 1.02.006 2.045.14 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.225.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                View Source on GitHub
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
            &copy; {new Date().getFullYear()} Ibrahim Hussein &middot; Kurdistan Weather Case Study
          </p>
        </div>
      </footer>
    </div>
  );
}
