"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const techStack = [
  "PHP",
  "MySQL",
  "Dual Database",
  "PDO",
  "PWA",
  "Push Notifications",
  "RBAC",
  "RTL Kurdish",
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
};

export default function DyariCaseStudy() {
  return (
    <div className="min-h-screen bg-primary text-white selection:bg-accent/30 selection:text-white">
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
            Domain Pending
          </span>
        </div>
      </header>

      <main>
        <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-accent/[0.05] rounded-full blur-[200px] sm:blur-[250px] pointer-events-none" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="overline text-accent/70"
            >
              {"// Client Project / 2025"}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mt-4 sm:mt-6"
            >
              <span className="text-gradient">
                Dyari
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent-light">
                When One System Isn&apos;t Enough
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-4 sm:mt-6 text-sm sm:text-base text-muted max-w-2xl mx-auto leading-relaxed px-2"
            >
              A second dealership saw Bradaran in action and wanted the same foundation—but with batch imports, 
              dual-database architecture, deposit tracking, and advance payments. I built Dyari to prove that 
              good systems can scale beyond their original scope.
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
                    <span className="text-[8px] sm:text-[10px] font-mono text-subtle">dyari &middot; private server</span>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image src="/images/projects/dyari-car.png" alt="Dyari — screenshot" fill className="object-cover object-top" sizes="(max-width:768px) 100vw,800px" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          {...fadeUp}
          className="border-y border-border bg-surface/40 backdrop-blur-sm"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {[
              { label: "Timeline", value: "3 Weeks" },
              { label: "Architecture", value: "Dual Database" },
              { label: "Status", value: "Live & Active" },
              { label: "Based On", value: "Bradaran V1" },
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

        <section className="py-16 sm:py-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[200px] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.div {...fadeUp} className="text-center mb-10 sm:mb-14">
              <span className="overline text-accent/60">01 &mdash; The Problem</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 sm:mt-4 text-gradient">
                Success Creates Demand
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mx-auto mt-4" />
            </motion.div>

            <motion.div {...fadeUp} className="prose prose-invert prose-sm sm:prose-base max-w-none">
              <p className="text-muted leading-relaxed">
                After launching Bradaran, word spread. A second car dealership reached out—they wanted the same 
                foundation but with <strong className="text-white/90">significantly more complexity</strong>.
              </p>
              <p className="text-muted leading-relaxed mt-4">
                Their business model was different: they imported cars in <strong className="text-white/90">large batches</strong>, 
                tracked deposits from individuals and other galleries, offered advance payments on sales, and needed 
                <strong className="text-white/90"> isolated data storage</strong> to keep batch operations separate from daily dealership work.
              </p>
              <p className="text-muted leading-relaxed mt-4">
                The challenge wasn't just adding features—it was <strong className="text-white/90">architectural</strong>. 
                Could I extend Bradaran's proven foundation without compromising its stability? Could I introduce 
                a dual-database system while maintaining a single authentication layer?
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
                Build on Proven Ground
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mx-auto mt-4" />
            </motion.div>

            <motion.div {...fadeUp} className="prose prose-invert prose-sm sm:prose-base max-w-none">
              <p className="text-muted leading-relaxed">
                I started with Bradaran's codebase as the foundation. Everything that worked—car inventory, sales, 
                rentals, debt tracking, RBAC, PWA features—stayed intact.
              </p>
              <p className="text-muted leading-relaxed mt-4">
                Then I introduced a <strong className="text-white/90">second MySQL database</strong> specifically for batch operations. 
                The batch database auto-creates on first access with all required tables, shares the same authentication 
                session, but keeps batch data completely isolated.
              </p>
              <p className="text-muted leading-relaxed mt-4">
                New modules were built on top: batch car imports with full metadata (chassis, customs, expenses), 
                deposit tracking for individuals and galleries, advance payment workflows, and automated receipt 
                generation for every transaction type.
              </p>
              <p className="text-muted leading-relaxed mt-4">
                The goal: <strong className="text-white/90">extend without breaking</strong>. Every new feature had to 
                integrate seamlessly while maintaining the original system's reliability.
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
                Dual-Database Architecture
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mx-auto mt-4" />
            </motion.div>

            <motion.div {...fadeUp} className="prose prose-invert prose-sm sm:prose-base max-w-none">
              <p className="text-muted leading-relaxed">
                Dyari runs on <strong className="text-white/90">two separate MySQL databases</strong>: one for core 
                dealership operations (inherited from Bradaran) and one for batch import operations (new).
              </p>
              <p className="text-muted leading-relaxed mt-4">
                The batch system handles: importing multiple cars at once with full metadata, tracking purchase costs 
                and customs fees, managing daily expenses per batch, selling batch cars with advance payment support, 
                and generating professional receipts for every transaction.
              </p>
              <p className="text-muted leading-relaxed mt-4">
                Deposit tracking was built as a dual system: <strong className="text-white/90">individual deposits</strong> 
                (money held from customers) and <strong className="text-white/90">gallery deposits</strong> (money held from 
                other dealerships). Each deposit generates an automatic receipt and triggers push notifications to admins.
              </p>
              <p className="text-muted leading-relaxed mt-4">
                All original features—car inventory, cash/installment sales, rentals, debt tracking, financial reports, 
                RBAC, PWA capabilities—remain fully functional. Dyari is Bradaran <strong className="text-white/90">plus</strong> 
                batch operations, not a replacement.
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
                Key Engineering Decisions
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mx-auto mt-4" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <motion.div {...fadeUp} className="rounded-2xl sm:rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-6 sm:p-8 shadow-card">
                <div className="flex items-start gap-3 mb-4">
                  <div className="shrink-0 w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <span className="text-accent text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white/90">Dual Database Strategy</h3>
                    <p className="text-xs text-accent/60 mt-0.5">Architecture</p>
                  </div>
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-muted leading-relaxed pl-11">
                  <p><strong className="text-white/80">Challenge:</strong> Keep batch operations isolated without duplicating authentication.</p>
                  <p><strong className="text-white/80">Decision:</strong> Created a second MySQL database that auto-initializes on first access, shares the same admin session, but keeps batch data completely separate from core dealership operations.</p>
                </div>
              </motion.div>

              <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="rounded-2xl sm:rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-6 sm:p-8 shadow-card">
                <div className="flex items-start gap-3 mb-4">
                  <div className="shrink-0 w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <span className="text-accent text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white/90">Batch Import System</h3>
                    <p className="text-xs text-accent/60 mt-0.5">Data Management</p>
                  </div>
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-muted leading-relaxed pl-11">
                  <p><strong className="text-white/80">Challenge:</strong> Import multiple cars at once with full metadata and cost tracking.</p>
                  <p><strong className="text-white/80">Decision:</strong> Built a batch module that tracks chassis numbers, purchase prices, customs fees, daily expenses, and car owners—all linked to a named batch with dedicated detail pages.</p>
                </div>
              </motion.div>

              <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} className="rounded-2xl sm:rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-6 sm:p-8 shadow-card">
                <div className="flex items-start gap-3 mb-4">
                  <div className="shrink-0 w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <span className="text-accent text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white/90">Deposit Tracking</h3>
                    <p className="text-xs text-accent/60 mt-0.5">Finance</p>
                  </div>
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-muted leading-relaxed pl-11">
                  <p><strong className="text-white/80">Challenge:</strong> Track money held from both individuals and other galleries.</p>
                  <p><strong className="text-white/80">Decision:</strong> Created dual deposit systems with automatic receipt generation and push notifications. Each deposit tracks person/gallery info, amount, date, and notes with full payment history.</p>
                </div>
              </motion.div>

              <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }} className="rounded-2xl sm:rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-6 sm:p-8 shadow-card">
                <div className="flex items-start gap-3 mb-4">
                  <div className="shrink-0 w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <span className="text-accent text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white/90">Advance Payment Workflow</h3>
                    <p className="text-xs text-accent/60 mt-0.5">Sales</p>
                  </div>
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-muted leading-relaxed pl-11">
                  <p><strong className="text-white/80">Challenge:</strong> Handle partial payments on batch car sales.</p>
                  <p><strong className="text-white/80">Decision:</strong> Built advance payment support into batch sales with automatic receipt generation for both the sale and the advance, plus full profit calculation (sale price minus costs).</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 border-t border-border relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent-light/[0.03] rounded-full blur-[200px] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.div {...fadeUp} className="text-center mb-10 sm:mb-14">
              <span className="overline text-accent/60">05 &mdash; The Result</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 sm:mt-4 text-gradient">
                A System That Scales
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mx-auto mt-4" />
            </motion.div>

            <motion.div {...fadeUp} className="prose prose-invert prose-sm sm:prose-base max-w-none">
              <p className="text-muted leading-relaxed">
                Dyari launched in <strong className="text-white/90">3 weeks</strong> and has been running smoothly 
                since deployment. The client uses it daily to manage batch imports, track deposits, and process sales 
                with advance payments.
              </p>
              <p className="text-muted leading-relaxed mt-4">
                The dual-database architecture proved its value: batch operations remain isolated, the core dealership 
                system stays stable, and both share a single authentication layer. No data conflicts, no performance issues.
              </p>
              <p className="text-muted leading-relaxed mt-4">
                All inherited features—car inventory, cash/installment sales, rentals, debt tracking, financial reports, 
                RBAC, push notifications, PWA capabilities—work exactly as they did in Bradaran. Dyari is proof that 
                <strong className="text-white/90"> good foundations can be extended</strong> without starting from scratch.
              </p>
            </motion.div>

            <motion.div {...fadeUp} className="mt-10 sm:mt-12 grid grid-cols-2 gap-4 sm:gap-6">
              <div className="rounded-2xl border border-border bg-surface/40 backdrop-blur-sm p-5 sm:p-6 text-center">
                <p className="text-2xl sm:text-3xl font-bold text-gradient">2 Databases</p>
                <p className="text-xs sm:text-sm text-muted mt-2">Isolated but integrated</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface/40 backdrop-blur-sm p-5 sm:p-6 text-center">
                <p className="text-2xl sm:text-3xl font-bold text-gradient">100% Uptime</p>
                <p className="text-xs sm:text-sm text-muted mt-2">Since launch</p>
              </div>
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
                <h3 className="text-base sm:text-lg font-semibold text-white/90 mb-3">Reusable Code Pays Off</h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  Building Bradaran with clean, modular code made Dyari possible. I didn't have to rewrite anything—just 
                  extend. If I'd cut corners on Bradaran, Dyari would have taken twice as long.
                </p>
              </div>

              <div className="rounded-2xl sm:rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-6 sm:p-8">
                <h3 className="text-base sm:text-lg font-semibold text-white/90 mb-3">Database Isolation is Powerful</h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  The dual-database approach felt risky at first, but it was the right call. Batch operations are complex 
                  enough to deserve their own space. Keeping them separate prevented any risk of breaking the core system.
                </p>
              </div>

              <div className="rounded-2xl sm:rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-6 sm:p-8">
                <h3 className="text-base sm:text-lg font-semibold text-white/90 mb-3">Client Trust Comes from Delivery</h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  This client chose me because they saw Bradaran working. They didn't need a pitch—they needed proof. 
                  Shipping real, working systems is the best marketing.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── See Also: Bradaran ── */}
        <motion.section {...fadeUp} className="border-t border-border bg-surface/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
            <div className="rounded-2xl sm:rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-5 sm:p-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-accent/10 border border-accent/15 flex items-center justify-center">
                <span className="text-lg sm:text-xl font-bold text-accent">V1</span>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-base sm:text-lg font-bold text-white/90">Looking for the original system?</h3>
                <p className="text-xs sm:text-sm text-muted mt-1">Bradaran was the first car dealership system &mdash; the foundation that Dyari was built upon.</p>
              </div>
              <Link
                href="/xara"
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold border border-accent/20 bg-accent/[0.04] text-accent/90 hover:text-accent hover:border-accent/40 transition-all duration-400 ease-premium"
              >
                View Bradaran Case Study
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </Link>
            </div>
          </div>
        </motion.section>

        <motion.section
          {...fadeUp}
          className="border-t border-border py-16 sm:py-24 relative overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-[220px] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <motion.div {...fadeUp}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/50 border border-border text-muted text-xs font-medium mb-6">
                <span>🔒</span>
                <span>Hosted on private server — domain pending</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-4">
                Interested in a custom system?
              </h2>
              <p className="text-muted text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Dyari shows what's possible when you build on proven foundations. If you need a system tailored 
                to your business, let's talk.
              </p>
            </motion.div>
            <motion.div {...fadeUp} className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-8 sm:mt-10">
              <Link
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm font-medium text-subtle border border-border hover:text-white hover:border-accent/20 transition-all duration-400 ease-premium"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                All Projects
              </Link>
              <Link
                href="/#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm font-medium bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-all duration-400 ease-premium"
              >
                Get in Touch
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-border py-6 sm:py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[10px] sm:text-xs text-subtle font-mono">
            &copy; {new Date().getFullYear()} Ibrahim Hussein &middot; Dyari Case Study
          </p>
        </div>
      </footer>
    </div>
  );
}
