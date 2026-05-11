"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

/* ══════════════════════════════════════════════
   Dyari Case Study — Advanced Car Dealership System
   Built for a real client — hosted, domain pending
   ══════════════════════════════════════════════ */

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
            Domain Pending
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
                Advanced Car Dealership
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-4 sm:mt-6 text-sm sm:text-base text-muted max-w-2xl mx-auto leading-relaxed px-2"
            >
              An advanced car dealership management system with dual-database architecture.
              Everything from the base system plus batch car imports, deposit tracking
              for individuals and galleries, advance payments on batch sales,
              and automated receipt generation &mdash; built for a second client
              who saw the first system and requested an enhanced version.
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

        {/* ── Stats ── */}
        <motion.section
          {...fadeUp}
          className="border-y border-border bg-surface/40 backdrop-blur-sm"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {[
              { label: "Client", value: "Car Dealership" },
              { label: "Architecture", value: "Dual Database" },
              { label: "Status", value: "Hosted (Domain Pending)" },
              { label: "Based On", value: "Bradaran + Extensions" },
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

        {/* ── What&apos;s New ── */}
        <section className="py-12 sm:py-20 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[180px] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.div {...fadeUp} className="text-center mb-8 sm:mb-12">
              <span className="overline text-accent/60">01 &mdash; What&apos;s New</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-3 sm:mt-4 text-gradient">
                Beyond the Base System
              </h2>
              <p className="text-sm text-muted mt-3 max-w-lg mx-auto">
                This system includes everything from the Bradaran project plus these major additions:
              </p>
              <div className="w-16 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mx-auto mt-4" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
              {/* Batch System */}
              <motion.div {...fadeUp} className="rounded-2xl sm:rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-5 sm:p-8 shadow-card hover:shadow-card-hover hover:border-accent/15 transition-all duration-500 ease-premium">
                <span className="overline text-accent/60 text-[9px] sm:text-[11px]">Batch Import</span>
                <h3 className="text-lg sm:text-xl font-bold mt-2 mb-3 text-white/90">Car Batch Management</h3>
                <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mb-4" />
                <div className="space-y-3 text-xs sm:text-sm text-muted leading-relaxed">
                  <p>
                    Import <strong className="text-white/80">multiple cars at once</strong> as a named batch.
                    Each batch tracks: purchase date, chassis numbers, car types, colors, years,
                    purchase prices, customs fees, daily expenses, and car owners.
                  </p>
                  <p>
                    Dedicated batch list, batch detail pages, and batch-level sales
                    with advance payment support. Stored in a <strong className="text-white/80">separate database</strong> for isolation.
                  </p>
                </div>
              </motion.div>

              {/* Deposits */}
              <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }} className="rounded-2xl sm:rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-5 sm:p-8 shadow-card hover:shadow-card-hover hover:border-accent/15 transition-all duration-500 ease-premium">
                <span className="overline text-accent/60 text-[9px] sm:text-[11px]">Finance</span>
                <h3 className="text-lg sm:text-xl font-bold mt-2 mb-3 text-white/90">Deposit Tracking</h3>
                <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mb-4" />
                <div className="space-y-3 text-xs sm:text-sm text-muted leading-relaxed">
                  <p>
                    Two deposit systems: <strong className="text-white/80">Individual deposits</strong> (money held from people)
                    and <strong className="text-white/80">Gallery deposits</strong> (money held from other dealerships).
                    Each tracks person/gallery name, phone, amount, date, and notes.
                  </p>
                  <p>
                    Automatic receipt generation for every deposit. Push notifications
                    alert admins on new deposits. Full payment history and balance tracking.
                  </p>
                </div>
              </motion.div>

              {/* Dual Database */}
              <motion.div {...fadeUp} className="rounded-2xl sm:rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-5 sm:p-8 shadow-card hover:shadow-card-hover hover:border-accent/15 transition-all duration-500 ease-premium">
                <span className="overline text-accent/60 text-[9px] sm:text-[11px]">Architecture</span>
                <h3 className="text-lg sm:text-xl font-bold mt-2 mb-3 text-white/90">Dual Database Architecture</h3>
                <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mb-4" />
                <div className="space-y-3 text-xs sm:text-sm text-muted leading-relaxed">
                  <p>
                    The system uses <strong className="text-white/80">two separate MySQL databases</strong>:
                    one for the core dealership (cars, sales, rentals, debts) and another for
                    the batch import system (batches, batch cars, batch sales, deposits).
                  </p>
                  <p>
                    The batch database auto-creates on first access with all required tables.
                    Both databases share the same authentication and admin session.
                  </p>
                </div>
              </motion.div>

              {/* Batch Sales */}
              <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }} className="rounded-2xl sm:rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-5 sm:p-8 shadow-card hover:shadow-card-hover hover:border-accent/15 transition-all duration-500 ease-premium">
                <span className="overline text-accent/60 text-[9px] sm:text-[11px]">Sales</span>
                <h3 className="text-lg sm:text-xl font-bold mt-2 mb-3 text-white/90">Batch Car Sales + Advances</h3>
                <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mb-4" />
                <div className="space-y-3 text-xs sm:text-sm text-muted leading-relaxed">
                  <p>
                    Sell cars from batches with <strong className="text-white/80">advance payment</strong> support.
                    Tracks buyer info, sale price, advance amount, and generates
                    professional receipts for both the sale and the advance.
                  </p>
                  <p>
                    Batch receipts are viewable, printable, and linked to the batch detail page.
                    Full profit calculation: sale price minus purchase price, customs, and expenses.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Inherited Features ── */}
        <section className="py-12 sm:py-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent-light/[0.03] rounded-full blur-[200px] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.div {...fadeUp} className="text-center mb-8 sm:mb-12">
              <span className="overline text-accent/60">02 &mdash; Full Feature Set</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-3 sm:mt-4 text-gradient">
                Everything Included
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mx-auto mt-4" />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {[
                { title: "Car Inventory", desc: "Full CRUD for cars with brand, model, year, plate, prices, images, and status tracking (available, sold, rented)." },
                { title: "Cash & Installment Sales", desc: "Two sale types with buyer/guarantor info, installment payment tracking with date, time, and notes per payment." },
                { title: "Car Rental System", desc: "Rental workflow: monthly & hourly rates, damage fees, down payment, return processing, and rental payment collection." },
                { title: "Debt Tracking", desc: "Rental debts and general debts with borrower, guarantor, partial payments, auto-status updates, and printable receipts." },
                { title: "Financial Reports", desc: "Super admin reports with date filtering: sales income, rental income, installment collections, debt summaries, profit calculations." },
                { title: "Multi-Admin RBAC", desc: "Super admin (full access + reports) and regular admin roles. Activity logging tracks every action for auditing." },
                { title: "Push Notifications", desc: "VAPID-based web push for due installments, overdue rentals, new deposits, and important events via service workers." },
                { title: "PWA + Offline", desc: "Installable Progressive Web App with service worker, manifest, offline fallback, and RTL Kurdish interface." },
                { title: "Printable Receipts", desc: "Professional receipts for sales, installments, rentals, debts, deposits, and batch transactions with full details." },
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

        {/* ── Bottom CTA ── */}
        <motion.section
          {...fadeUp}
          className="border-t border-border py-14 sm:py-20 relative overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-accent/[0.04] rounded-full blur-[200px] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700 text-gray-400 text-xs font-medium mb-6">
              <span>🔒</span>
              <span>Hosted on a private server &mdash; domain pending per client request</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient">
              Dyari Car Dealership
            </h2>
            <p className="text-muted mt-2 sm:mt-3 text-xs sm:text-sm max-w-md mx-auto">
              This system is live and in active use by the client.
              The domain will be assigned when the client is ready.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-8 sm:mt-10">
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
            &copy; {new Date().getFullYear()} Ibrahim Hussein &middot; Dyari Case Study
          </p>
        </div>
      </footer>
    </div>
  );
}
