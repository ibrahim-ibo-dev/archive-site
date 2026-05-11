"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

/* ══════════════════════════════════════════════
   Bradaran — Car Dealership Management
   Moving a Kurdish dealership off paper, onto a single RTL platform.
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
  "PDO",
  "PWA",
  "Web Push (VAPID)",
  "RBAC",
  "RTL Kurdish",
];

const stats = [
  { label: "Client", value: "Car Dealership" },
  { label: "Region", value: "Kurdistan" },
  { label: "Status", value: "Live", note: "private hosting" },
  { label: "Workflows", value: "Sales · Rental · Debt" },
];

const principles = [
  {
    step: "Principle 01",
    title: "Replace the spreadsheet, don't re-invent it",
    desc: "The dealership already had workflows that worked on paper. The system mirrors them digitally before adding anything new.",
  },
  {
    step: "Principle 02",
    title: "Built for the phone, not the desk",
    desc: "Owners walk the lot, talk to customers, and check installments from a moving car. The PWA had to feel native on mobile.",
  },
  {
    step: "Principle 03",
    title: "Money is the most important data",
    desc: "Sales, debts, installments, and rental payments all needed receipts, audit trails, and cancellation safety nets from day one.",
  },
];

const buildItems = [
  {
    tag: "Inventory",
    title: "Car lifecycle in one record",
    challenge: "A car moves between states (available → rented → sold → cancelled). Tracking that across paper records was where data went missing.",
    decision: "Each car has a single record with full history: brand, plate, purchase price, sale price, status, sale history, rental history, and document status — all in one place.",
  },
  {
    tag: "Sales",
    title: "Cash and installment as separate flows",
    challenge: "Cash sales finish in minutes. Installment sales last for years and require monthly tracking. Forcing them into one form would have broken both.",
    decision: "Two distinct sale flows: quick cash for fast transactions, and full installment with down-payment, monthly schedule, guarantor info, and per-payment history.",
  },
  {
    tag: "Rentals",
    title: "Monthly + hourly rental engine",
    challenge: "The dealership rents out cars at different rates and needs to track damage, returns, and overdue payments separately from sales.",
    decision: "Built a rental module with renter info, guarantor, monthly/hourly rates, damage fees, expected return date, condition notes on return, and printable receipts.",
  },
  {
    tag: "Finance",
    title: "Two debt systems",
    challenge: "Overdue rental debts and general business debts behave differently — one is tied to a car, the other isn't. Mixing them created reporting chaos.",
    decision: "Separated rental debts (tied to a rental record) from general debts. Each tracks borrower, guarantor, total, remaining balance, partial payments, and status — pending, partial, or paid.",
  },
  {
    tag: "Access",
    title: "Super-admin vs admin RBAC",
    challenge: "Owners shouldn't expose financial reports to every staff member. Staff still need to log sales without seeing profit.",
    decision: "Two roles: super admin (full access + financial reports) and admin (operational only). Every action is logged with timestamps and admin id for audit.",
  },
  {
    tag: "Mobile",
    title: "PWA + push notifications",
    challenge: "Owners need to know when an installment is due or a rental is overdue, without checking the dashboard every hour.",
    decision: "Built it as an installable Progressive Web App with VAPID-based web push notifications for due installments, overdue rentals, and key events.",
  },
];

const lessons = [
  {
    title: "Before automating, mirror the paper workflow exactly",
    desc: "The dealership had decades of habits encoded in their paper system. Forcing a 'cleaner' digital workflow would have broken trust on day one. The system replaced paper, then improved it.",
  },
  {
    title: "Money workflows need cancellation, not just creation",
    desc: "The most-asked-for feature post-launch was 'undo a sale'. Cars get accidentally marked sold; deposits get logged twice. Sale cancellation with full audit trail was non-negotiable.",
  },
  {
    title: "Owners measure success in receipts, not dashboards",
    desc: "Pretty charts impressed nobody. Printable, professional receipts for every payment made the system feel real to the customers buying cars and the staff handing them over.",
  },
];

export default function BradaranCaseStudy() {
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
          <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-semibold tracking-wide bg-gray-800/50 border border-gray-700 text-gray-400">
            🔒 Private Client
          </span>
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
              {"// Case Study · 2025 · Client Project"}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mt-4 sm:mt-6"
            >
              <span className="text-gradient">Moving a dealership</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent-light">
                off paper, into one platform
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-4 sm:mt-6 text-sm sm:text-base text-muted max-w-2xl mx-auto leading-relaxed px-2"
            >
              Bradaran is a complete car dealership management system built for a real Kurdish client &mdash;
              <span className="text-white/90"> inventory, cash and installment sales, rentals, debt tracking, financial reports, multi-admin RBAC, push notifications</span>,
              all in <span className="text-white/90">RTL Kurdish</span>, all in one PWA the owner can run from their phone.
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
                  <div className="max-w-[220px] sm:max-w-xs mx-auto h-4 sm:h-5 rounded-full bg-white/[0.05] border border-border flex items-center justify-center">
                    <span className="text-[8px] sm:text-[10px] font-mono text-subtle">bradaran &middot; private hosting</span>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image src="/images/projects/bradar.png" alt="Bradaran — production screenshot" fill className="object-cover object-top" sizes="(max-width:768px) 100vw,800px" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── Stats ── */}
        <motion.section {...fadeUp} className="border-y border-border bg-surface/40 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-base sm:text-xl md:text-2xl font-bold text-gradient">{stat.value}</p>
                <p className="overline text-subtle mt-1 sm:mt-2 text-[9px] sm:text-[11px]">{stat.label}</p>
                {stat.note && <p className="text-[9px] sm:text-[10px] text-subtle/70 mt-1 italic">{stat.note}</p>}
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
                A working dealership running entirely on paper, WhatsApp screenshots, and memory.
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mt-5" />
            </motion.div>

            <motion.div {...fadeUp} className="space-y-4 sm:space-y-5 text-sm sm:text-base text-muted leading-relaxed">
              <p>
                Most car dealerships in Kurdistan operate from a small office, with a notebook for cars,
                a notebook for sales, and a notebook for who owes what. Information lives across <span className="text-white/90">three or four staff phones</span>,
                a paper ledger, and a folder of WhatsApp screenshots labeled by date.
              </p>
              <p>
                That works &mdash; until two people sell the same car, or an installment payment goes missing,
                or a rental car comes back damaged and nobody knows who took it. Worst of all, <span className="text-white/90">the owner has no real-time view of the business</span>:
                cash flow, debts, monthly profit, all reconstructed manually at the end of the week.
              </p>
              <p>
                The client didn&apos;t need a fancy dashboard. They needed <span className="text-white/90">one place where every car, sale, rental, payment, and debt lives</span> &mdash;
                accessible from a phone, in Kurdish, with permissions so staff couldn&apos;t see what they shouldn&apos;t.
              </p>
            </motion.div>

            <motion.div {...fadeUp} className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {[
                { label: "3+", desc: "Notebooks per dealership — cars, sales, debts, rentals, all separate" },
                { label: "0", desc: "Real-time visibility into cash flow, profits, or outstanding debts" },
                { label: "1 phone", desc: "One staff phone usually held all customer history — and it was always with that one person" },
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
                Mirror the paper system first, then make it impossible to lose data.
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mt-5" />
            </motion.div>

            <motion.div {...fadeUp} className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              {principles.map((p) => (
                <div key={p.step} className="rounded-2xl border border-border bg-surface/40 backdrop-blur-sm p-5 hover:border-accent/15 transition-all duration-500">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-accent/70">{p.step}</span>
                  <h3 className="text-base font-semibold text-white/90 mt-2 mb-2 leading-snug">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── 03 · Inside the Build ── */}
        <section className="py-14 sm:py-24 relative overflow-hidden border-t border-border">
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[200px] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.div {...fadeUp} className="text-center mb-10 sm:mb-14">
              <span className="overline text-accent/60">03 — Inside the Build</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 sm:mt-4 text-gradient">
                Engineering decisions, not feature lists
              </h2>
              <p className="text-sm text-muted mt-3 max-w-2xl mx-auto leading-relaxed">
                Each module below replaced a specific paper workflow that used to fail every week.
              </p>
              <div className="w-16 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mx-auto mt-4" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {buildItems.map((item, i) => (
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
                      <span className="text-muted">{item.challenge}</span>
                    </p>
                    <p>
                      <span className="font-mono uppercase tracking-wider text-[10px] text-accent-light/80">Decision</span>
                      <br />
                      <span className="text-white/80">{item.decision}</span>
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Extra capabilities */}
            <motion.div {...fadeUp} className="mt-10 sm:mt-14">
              <span className="overline text-accent/60">04 — Plus</span>
              <h3 className="text-lg sm:text-xl font-bold text-white/90 mt-2 mb-5">Capabilities the system ships with</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                {[
                  { title: "Financial Reports", desc: "Super-admin-only reports with date-range filtering: total sales, rental income, installment collections, debt summaries, and profit." },
                  { title: "Activity Logging", desc: "Every action by every admin is logged with timestamp and admin id for full audit." },
                  { title: "Printable Receipts", desc: "Professional receipts for sales, installment payments, rental agreements, and debt payments." },
                  { title: "Sale Cancellation", desc: "Reverse a mistaken sale safely: car returns to available, reason logged, full audit preserved." },
                  { title: "Offline-Friendly PWA", desc: "Installable Progressive Web App with service worker. Works on bad networks, on the lot, on the go." },
                  { title: "RTL Kurdish UI", desc: "End-to-end Kurdish interface: numbers, dates, forms, error messages — all native, not translated." },
                ].map((f) => (
                  <div key={f.title} className="rounded-2xl border border-border bg-surface/40 backdrop-blur-sm p-5">
                    <h4 className="text-sm sm:text-base font-semibold text-white/90 mb-2">{f.title}</h4>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">{f.desc}</p>
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
                One platform replacing every notebook, in active client use
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mx-auto mt-5" />
            </motion.div>

            <motion.div {...fadeUp} className="rounded-2xl sm:rounded-3xl border border-accent/20 bg-accent/[0.04] p-6 sm:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-center">
                <div>
                  <p className="text-base sm:text-lg text-white/90 leading-relaxed font-medium">
                    Bradaran is in active production use by the client &mdash; managing their inventory, sales, rentals, debts,
                    and financial reporting from one PWA.
                  </p>
                  <p className="text-sm text-muted mt-4 leading-relaxed">
                    Multi-role staff each log in to their own scope. The owner sees the full picture; admins log sales and rentals without seeing profit.
                    Every payment leaves an auditable trail and a printable receipt. Push notifications fire on due installments and overdue rentals,
                    so the owner doesn&apos;t need to check anything &mdash; the system tells them.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {[
                    { label: "Workflows", value: "Sales · Rental · Debt" },
                    { label: "Roles", value: "Super + Admin" },
                    { label: "Audit", value: "Full Logging" },
                    { label: "Mobile", value: "Installable PWA" },
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

        {/* ── 06 · Lessons ── */}
        <section className="py-14 sm:py-24 relative overflow-hidden border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.div {...fadeUp} className="mb-8 sm:mb-10">
              <span className="overline text-accent/60">06 — Lessons</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 sm:mt-4 text-gradient leading-tight">
                What this project taught me about building for real businesses
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mt-5" />
            </motion.div>

            <div className="space-y-4 sm:space-y-5">
              {lessons.map((lesson) => (
                <motion.div
                  key={lesson.title}
                  {...fadeUp}
                  className="rounded-2xl border border-border bg-surface/40 backdrop-blur-sm p-5 sm:p-6 hover:border-accent/15 transition-all duration-500"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-white/90 mb-2 leading-snug">{lesson.title}</h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">{lesson.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── See Also: Dyari ── */}
        <motion.section {...fadeUp} className="border-t border-border bg-surface/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
            <div className="rounded-2xl sm:rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-5 sm:p-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-accent/10 border border-accent/15 flex items-center justify-center">
                <span className="text-lg sm:text-xl font-bold text-accent">V2</span>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-base sm:text-lg font-bold text-white/90">There&apos;s a sequel: Dyari</h3>
                <p className="text-xs sm:text-sm text-muted mt-1">
                  A larger dealership needed dual-database architecture, batch imports, and finer permissions.
                  Dyari is what Bradaran became when the requirements outgrew a single database.
                </p>
              </div>
              <Link
                href="/diari"
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold border border-accent/20 bg-accent/[0.04] text-accent/90 hover:text-accent hover:border-accent/40 transition-all duration-400 ease-premium"
              >
                View Dyari Case Study
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </Link>
            </div>
          </div>
        </motion.section>

        {/* ── Bottom CTA ── */}
        <motion.section {...fadeUp} className="border-t border-border py-14 sm:py-20 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-accent/[0.04] rounded-full blur-[200px] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700 text-gray-400 text-xs font-medium mb-6">
              <span>🔒</span>
              <span>Hosted privately for the client &mdash; no public URL</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient">Bradaran is in active use</h2>
            <p className="text-muted mt-2 sm:mt-3 text-xs sm:text-sm max-w-md mx-auto">
              The system runs the dealership&apos;s daily operations. Public domain assignment is at the client&apos;s discretion.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-8 sm:mt-10">
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
            &copy; {new Date().getFullYear()} Ibrahim Hussein &middot; Bradaran Case Study
          </p>
        </div>
      </footer>
    </div>
  );
}
