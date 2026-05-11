"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

/* ══════════════════════════════════════════════
   Chat Mart Case Study — case-study.ibrahim-eng.dev/chat-mart
   The story of an AI customer agent built for the Kurdish market.
   Structure: Hero → Stats → Problem → Approach → Solution
              → The Build → Result → Lessons → CTA
   ══════════════════════════════════════════════ */

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
};

const techStack = [
  "PHP",
  "MySQL",
  "Gemini API",
  "WhatsApp Cloud API",
  "Telegram Bot API",
  "Instagram Graph API",
  "Kurdish TTS (1000+ voices)",
  "PWA",
];

const stats = [
  { label: "Reply Time", value: "<30s", note: "from hours" },
  { label: "Active Channels", value: "7", note: "simultaneously" },
  { label: "Languages", value: "KU · AR · EN", note: "auto-detected" },
  { label: "Live Domain", value: "chat-mart.com", note: "in production" },
];

const channels = [
  { name: "WhatsApp", desc: "Meta Cloud API — text + Kurdish voice replies", icon: "💬", type: "Bot" },
  { name: "Instagram", desc: "DM bot — automatic AI replies", icon: "📸", type: "Bot" },
  { name: "Messenger", desc: "Facebook Messenger bot", icon: "💭", type: "Bot" },
  { name: "Viber", desc: "Viber bot — same AI, real-time", icon: "📱", type: "Bot" },
  { name: "Telegram", desc: "Telegram bot — dedicated API", icon: "✈️", type: "Bot" },
  { name: "Web Chat", desc: "Built-in widget on the marketplace", icon: "🌐", type: "Built-in" },
  { name: "External API", desc: "Embed on any third-party website", icon: "🔗", type: "API" },
];

const beforeAfter = [
  { before: "One chatbot, one company", after: "Multi-tenant SaaS marketplace" },
  { before: "Web chat only", after: "7 channels active simultaneously" },
  { before: "Kurdish hardcoded", after: "Auto-detect KU · AR · EN per message" },
  { before: "Flat admin login", after: "RBAC with 17+ granular permissions" },
  { before: "Free for everyone", after: "Token-based subscriptions with auto-expiry" },
  { before: "Text replies only", after: "Replies in 1000+ Kurdish TTS voices" },
  { before: "Single-purpose CSS", after: "Silk Design System (5 modular layers)" },
  { before: "Desktop-only", after: "Installable PWA, offline-ready" },
];

export default function ChatMartCaseStudy() {
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
          <a
            href="https://chat-mart.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-semibold tracking-wide bg-gradient-to-r from-accent to-accent-light text-primary shadow-glow-sm hover:shadow-glow transition-all duration-400 ease-premium"
          >
            <span>Visit Chat Mart</span>
            <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
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
              {"// Case Study · 2025 · SaaS"}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mt-4 sm:mt-6"
            >
              <span className="text-gradient">Cutting customer reply time</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent-light">
                from hours to under 30 seconds
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-4 sm:mt-6 text-sm sm:text-base text-muted max-w-2xl mx-auto leading-relaxed px-2"
            >
              Chat Mart is a multi-tenant AI customer agent for Kurdish and regional
              businesses. One signup gives a company an AI that replies on
              <span className="text-white/90"> WhatsApp, Instagram, Messenger, Viber, Telegram</span>,
              their own website, and the marketplace &mdash; in
              <span className="text-white/90"> Kurdish, Arabic, and English</span>, 24/7.
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
                    <span className="text-[8px] sm:text-[10px] font-mono text-subtle">chat-mart.com</span>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image src="/images/projects/chat-mart.png" alt="Chat Mart — production screenshot" fill className="object-cover object-top" sizes="(max-width:768px) 100vw,800px" priority />
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
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-base sm:text-xl md:text-2xl font-bold text-gradient">
                  {stat.value}
                </p>
                <p className="overline text-subtle mt-1 sm:mt-2 text-[9px] sm:text-[11px]">
                  {stat.label}
                </p>
                {stat.note && (
                  <p className="text-[9px] sm:text-[10px] text-subtle/70 mt-1 italic">
                    {stat.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── 01 · The Problem ── */}
        <section className="py-14 sm:py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[180px] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.div {...fadeUp} className="mb-8 sm:mb-10">
              <span className="overline text-accent/60">01 — The Problem</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 sm:mt-4 text-gradient leading-tight">
                Local businesses were drowning in messages they couldn&apos;t reply to fast enough.
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mt-5" />
            </motion.div>

            <motion.div {...fadeUp} className="space-y-4 sm:space-y-5 text-sm sm:text-base text-muted leading-relaxed">
              <p>
                In Kurdistan, the way customers actually buy is on <span className="text-white/90">WhatsApp and Instagram DMs</span> &mdash; not e-commerce sites.
                A single shop can get hundreds of messages a day asking the same questions: <span className="text-white/80">price, availability, delivery, address</span>.
              </p>
              <p>
                Most of those businesses are answering with <span className="text-white/90">one or two staff phones</span>, often after hours, and almost always in
                <span className="text-white/90"> Kurdish</span> &mdash; a language ignored by every off-the-shelf chatbot platform.
                The cost was real: <span className="text-white/90">customers waited hours, gave up, and bought from a competitor who replied first</span>.
              </p>
              <p>
                The first version &mdash; <Link href="/csai" className="text-accent/90 hover:text-accent underline-offset-4 hover:underline">CSAI</Link> &mdash; proved an AI agent <em>could</em> handle these conversations in Kurdish.
                But it only worked for one company on one website. The real problem was bigger: <span className="text-white/90">every shop, restaurant, and clinic needed this, on every channel where customers actually wrote</span>.
              </p>
            </motion.div>

            {/* Pain bullets */}
            <motion.div {...fadeUp} className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {[
                { label: "Hours", desc: "Average customer reply time during busy periods" },
                { label: "5 channels", desc: "Where conversations actually happen — none unified" },
                { label: "0 platforms", desc: "Off-the-shelf tools that understood Kurdish dialects" },
              ].map((p) => (
                <div key={p.label} className="rounded-2xl border border-border bg-surface/40 backdrop-blur-sm p-4 sm:p-5">
                  <p className="text-lg sm:text-xl font-bold text-accent/90">{p.label}</p>
                  <p className="text-xs sm:text-sm text-muted mt-1.5 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── 02 · My Approach ── */}
        <section className="py-14 sm:py-24 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-light/[0.03] rounded-full blur-[180px] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.div {...fadeUp} className="mb-8 sm:mb-10">
              <span className="overline text-accent/60">02 — My Approach</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 sm:mt-4 text-gradient leading-tight">
                Stop building a chatbot. Start building the layer that sits between every business and every customer.
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mt-5" />
            </motion.div>

            <motion.div {...fadeUp} className="space-y-4 sm:space-y-5 text-sm sm:text-base text-muted leading-relaxed">
              <p>
                The first instinct was to <span className="text-white/80">scale up CSAI</span> &mdash; make it support more companies. I rejected that.
                A multi-tenant chatbot still leaves the customer pinging <span className="text-white/80">five separate apps</span> to reach a business.
                The real shift had to be <span className="text-white/90">channel-side, not platform-side</span>.
              </p>
              <p>
                I redesigned the system around three non-negotiables:
              </p>
            </motion.div>

            <motion.div {...fadeUp} className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  step: "Principle 01",
                  title: "Meet customers where they already are",
                  desc: "If 90% of inquiries come from WhatsApp and Instagram, the AI lives there — not on a website nobody opens.",
                },
                {
                  step: "Principle 02",
                  title: "Speak the customer's language, not English",
                  desc: "Auto-detect Sorani, Kurmanji, Badini, Arabic, English per message — and reply in the exact same dialect.",
                },
                {
                  step: "Principle 03",
                  title: "Multi-tenant from day one",
                  desc: "Each business gets its own catalog, AI personality, and dashboard. Onboarding a new shop should take minutes, not weeks.",
                },
              ].map((p) => (
                <div
                  key={p.step}
                  className="rounded-2xl border border-border bg-surface/40 backdrop-blur-sm p-5 hover:border-accent/15 transition-all duration-500"
                >
                  <span className="text-[10px] font-mono uppercase tracking-widest text-accent/70">{p.step}</span>
                  <h3 className="text-base font-semibold text-white/90 mt-2 mb-2 leading-snug">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── 03 · The Solution / Channels ── */}
        <section className="py-14 sm:py-24 relative overflow-hidden border-t border-border">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent-light/[0.03] rounded-full blur-[200px] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.div {...fadeUp} className="text-center mb-10 sm:mb-14">
              <span className="overline text-accent/60">03 — The Solution</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 sm:mt-4 text-gradient">
                One AI agent, seven channels, zero extra work
              </h2>
              <p className="text-sm sm:text-base text-muted mt-4 max-w-2xl mx-auto leading-relaxed">
                The moment a business signs up, their AI is live everywhere customers actually message.
                No bot per channel. No swivel-chair admin. One unified inbox.
              </p>
              <div className="w-16 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mx-auto mt-5" />
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {channels.map((ch, i) => (
                <motion.div
                  key={ch.name}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.06 }}
                  className="rounded-2xl border border-border bg-surface/40 backdrop-blur-sm p-4 sm:p-5 text-center shadow-card hover:shadow-card-hover hover:border-accent/15 transition-all duration-500 ease-premium"
                >
                  <div className="text-2xl sm:text-3xl mb-2">{ch.icon}</div>
                  <span className="inline-block px-2 py-0.5 text-[8px] font-mono uppercase tracking-wider rounded-full bg-accent/10 text-accent/60 border border-accent/10 mb-2">{ch.type}</span>
                  <h3 className="text-sm font-semibold text-white/90 mb-1">{ch.name}</h3>
                  <p className="text-[10px] sm:text-xs text-muted leading-relaxed">{ch.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Customer journey callout */}
            <motion.div {...fadeUp} className="mt-10 rounded-2xl sm:rounded-3xl border border-accent/15 bg-accent/[0.03] p-5 sm:p-8">
              <h3 className="text-base sm:text-lg font-bold text-white/90 mb-3">
                What this looks like for one customer
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                A customer in Erbil sees a product on Instagram, sends a DM in Sorani: <em>&quot;ئەمە چەندە؟&quot;</em>.
                Within seconds, the AI replies in Sorani with the price, availability, and a follow-up question about delivery.
                If she switches to WhatsApp later that day, the next reply uses her preferred channel &mdash; same business, same context, same dashboard on the owner&apos;s side.
                The owner only ever sees the conversation when the AI hands off.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── 04 · Inside the Build (Technical decisions) ── */}
        <section className="py-14 sm:py-24 relative overflow-hidden border-t border-border">
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[200px] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.div {...fadeUp} className="text-center mb-10 sm:mb-14">
              <span className="overline text-accent/60">04 — Inside the Build</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 sm:mt-4 text-gradient">
                Engineering decisions, not feature lists
              </h2>
              <p className="text-sm text-muted mt-3 max-w-2xl mx-auto leading-relaxed">
                Each of these wasn&apos;t a feature on a backlog &mdash; it was a problem I had to solve before the system would work for a real business.
              </p>
              <div className="w-16 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mx-auto mt-4" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {[
                {
                  tag: "Voice",
                  title: "1000+ Kurdish TTS voices",
                  challenge: "Customers reading replies on the bus or while cooking can&apos;t always read text.",
                  decision: "Integrated a Kurdish TTS API with 500+ Sorani and 500+ Kurmanji voices. Each business picks a male/female voice profile, and the AI sends both text and audio.",
                },
                {
                  tag: "Access Control",
                  title: "RBAC with 17+ permissions",
                  challenge: "A shop owner shouldn&apos;t be able to see the developer settings; an employee shouldn&apos;t be able to delete products.",
                  decision: "Built a role-based system with primary/limited admins per company, granular per-feature permissions, full audit logging, and a global super-admin tier.",
                },
                {
                  tag: "Monetization",
                  title: "Token-based subscriptions",
                  challenge: "AI calls cost money — businesses need predictable monthly cost, not per-message billing they can&apos;t track.",
                  decision: "Each plan grants a monthly token allotment. Tokens auto-expire, refill on payment, and every consumption is logged. Supports USD and IQD.",
                },
                {
                  tag: "Language",
                  title: "Multi-dialect Kurdish AI",
                  challenge: "Sorani and Kurmanji are both \"Kurdish\" but read like different languages. A reply in the wrong dialect kills trust.",
                  decision: "The AI detects Sorani / Kurmanji / Badini / Arabic / English per message and replies in the same dialect. Each business also picks one of 4 personalities — aggressive seller, consultative guide, formal receptionist, casual buddy.",
                },
                {
                  tag: "Scale",
                  title: "Multi-tenant from day one",
                  challenge: "A SaaS that bolts on multi-tenancy later always leaks. Shops needed full isolation: catalogs, conversations, branding, billing.",
                  decision: "Designed the schema and admin around a company_id boundary from the first commit. Onboarding a new business is a registration flow, not a deploy.",
                },
                {
                  tag: "Mobile",
                  title: "PWA + offline fallback",
                  challenge: "Owners run their business from their phone. They open the dashboard during deliveries, on bad networks, in stockrooms.",
                  decision: "Built it as an installable Progressive Web App with service worker, manifest, and an offline fallback page so they always see something.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: (i % 2) * 0.08 }}
                  className="rounded-2xl sm:rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-5 sm:p-6 shadow-card hover:shadow-card-hover hover:border-accent/15 transition-all duration-500 ease-premium"
                >
                  <span className="overline text-accent/60 text-[9px] sm:text-[11px]">{item.tag}</span>
                  <h3 className="text-base sm:text-lg font-bold mt-2 mb-3 text-white/90 leading-snug">{item.title}</h3>
                  <div className="w-10 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mb-4" />
                  <div className="space-y-2.5 text-xs sm:text-sm leading-relaxed">
                    <p>
                      <span className="font-mono uppercase tracking-wider text-[10px] text-accent/70">Challenge</span>
                      <br />
                      <span className="text-muted" dangerouslySetInnerHTML={{ __html: item.challenge }} />
                    </p>
                    <p>
                      <span className="font-mono uppercase tracking-wider text-[10px] text-accent-light/80">Decision</span>
                      <br />
                      <span className="text-white/80" dangerouslySetInnerHTML={{ __html: item.decision }} />
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Before/After */}
            <motion.div {...fadeUp} className="mt-12 rounded-2xl sm:rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-5 sm:p-8 shadow-card">
              <span className="overline text-accent/60">From CSAI to Chat Mart</span>
              <h3 className="text-lg sm:text-xl font-bold text-white/90 mt-2 mb-5">What actually changed</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {beforeAfter.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm">
                    <span className="shrink-0 mt-0.5 w-4 h-4 rounded-full bg-accent/15 flex items-center justify-center text-[8px] text-accent font-bold">→</span>
                    <div>
                      <span className="text-gray-500 line-through">{item.before}</span>
                      <br />
                      <span className="text-white/80">{item.after}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── 05 · The Result ── */}
        <section className="py-14 sm:py-24 relative overflow-hidden border-t border-border">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-[200px] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.div {...fadeUp} className="text-center mb-10">
              <span className="overline text-accent-light/80">05 — The Result</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 sm:mt-4 text-gradient leading-tight">
                A live SaaS, with its own domain, serving real businesses
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mx-auto mt-5" />
            </motion.div>

            <motion.div {...fadeUp} className="rounded-2xl sm:rounded-3xl border border-accent/20 bg-accent/[0.04] p-6 sm:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-center">
                <div>
                  <p className="text-base sm:text-lg text-white/90 leading-relaxed font-medium">
                    Chat Mart is in production at{" "}
                    <a
                      href="https://chat-mart.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent-light underline-offset-4 hover:underline"
                    >
                      chat-mart.com
                    </a>
                    {" "}&mdash; serving multiple companies with AI customer service across 7 channels in 3 languages.
                  </p>
                  <p className="text-sm text-muted mt-4 leading-relaxed">
                    Replies that used to take hours now happen in under 30 seconds, regardless of which app the customer wrote from.
                    Owners check a single dashboard instead of juggling five phones. The system runs 24/7 without staff.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {[
                    { label: "Reply time", value: "<30s" },
                    { label: "Channels", value: "7 live" },
                    { label: "Languages", value: "KU · AR · EN" },
                    { label: "Uptime", value: "24/7" },
                  ].map((m) => (
                    <div key={m.label} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-center">
                      <p className="text-base sm:text-lg font-bold text-gradient">{m.value}</p>
                      <p className="text-[10px] font-mono uppercase tracking-wider text-subtle mt-1">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── 06 · Lessons Learned ── */}
        <section className="py-14 sm:py-24 relative overflow-hidden border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.div {...fadeUp} className="mb-8 sm:mb-10">
              <span className="overline text-accent/60">06 — Lessons</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 sm:mt-4 text-gradient leading-tight">
                What I&apos;d tell anyone building for the local market
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mt-5" />
            </motion.div>

            <div className="space-y-4 sm:space-y-5">
              {[
                {
                  title: "Don't translate Western SaaS — rebuild for the channel",
                  desc: "Customers here don't open dashboards. They open WhatsApp. Building a beautiful admin panel without solving the channel problem is solving the wrong half.",
                },
                {
                  title: "Kurdish is not one language",
                  desc: "Sorani, Kurmanji, and Badini are different enough that a reply in the wrong dialect destroys trust instantly. Auto-detection per message had to be the default, not a setting.",
                },
                {
                  title: "Multi-tenant cannot be retrofitted",
                  desc: "CSAI was single-tenant. Trying to bolt multi-tenancy on later would have meant rewriting the database. Designing for it from the schema up was non-negotiable.",
                },
                {
                  title: "Owners want fewer screens, not more features",
                  desc: "Every feature added to the admin made it less likely shop owners would actually log in. The dashboard kept getting simpler, not richer — and adoption went up.",
                },
              ].map((lesson) => (
                <motion.div
                  key={lesson.title}
                  {...fadeUp}
                  className="rounded-2xl border border-border bg-surface/40 backdrop-blur-sm p-5 sm:p-6 hover:border-accent/15 transition-all duration-500"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-white/90 mb-2 leading-snug">
                    {lesson.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {lesson.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── See Also: CSAI ── */}
        <motion.section {...fadeUp} className="border-t border-border bg-surface/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
            <div className="rounded-2xl sm:rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-5 sm:p-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-accent/10 border border-accent/15 flex items-center justify-center">
                <span className="text-lg sm:text-xl font-bold text-accent">V1</span>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-base sm:text-lg font-bold text-white/90">Where it started: CSAI</h3>
                <p className="text-xs sm:text-sm text-muted mt-1">
                  The original single-company AI chatbot showcased at HITEX 2025 &mdash; the experiment that proved the demand was real.
                  <span className="text-gray-500"> ⚠️ No longer live (domain shut down).</span>
                </p>
              </div>
              <Link
                href="/csai"
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold border border-accent/20 bg-accent/[0.04] text-accent/90 hover:text-accent hover:border-accent/40 transition-all duration-400 ease-premium"
              >
                View CSAI Case Study
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </Link>
            </div>
          </div>
        </motion.section>

        {/* ── Bottom CTA ── */}
        <motion.section
          {...fadeUp}
          className="border-t border-border py-14 sm:py-20 relative overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-accent/[0.04] rounded-full blur-[200px] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient">
              See the system live
            </h2>
            <p className="text-muted mt-2 sm:mt-3 text-xs sm:text-sm max-w-md mx-auto">
              Chat Mart runs in production today. Visit the marketplace,
              try the AI in your own language, and see how the channels stitch together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-8 sm:mt-10">
              <a
                href="https://chat-mart.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm font-semibold bg-gradient-to-r from-accent to-accent-light text-primary shadow-glow-sm hover:shadow-glow transition-all duration-400 ease-premium"
              >
                Visit chat-mart.com
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
                All Case Studies
              </Link>
            </div>
          </div>
        </motion.section>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-border py-6 sm:py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[10px] sm:text-xs text-subtle font-mono">
            &copy; {new Date().getFullYear()} Ibrahim Hussein &middot; Chat Mart Case Study
          </p>
        </div>
      </footer>
    </div>
  );
}
