"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

/* ══════════════════════════════════════════════
   Ashti Library Case Study — case-study.ibrahim-eng.dev/ashti-library
   Built for Ashti Bookstore, Erbil — a real client project
   ══════════════════════════════════════════════ */

const techStack = [
  "PHP",
  "MySQL",
  "Gemini 2.0 Flash",
  "SEO / Schema.org",
  "RTL Kurdish",
  "WhatsApp API",
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
};

export default function AshtiLibraryCaseStudy() {
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
            href="https://ashtilibrary.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-semibold tracking-wide bg-gradient-to-r from-accent to-accent-light text-primary shadow-glow-sm hover:shadow-glow transition-all duration-400 ease-premium"
          >
            <span>Visit ashtilibrary.com</span>
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
              {"// Client Project / 2025"}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mt-4 sm:mt-6"
            >
              <span className="text-gradient">
                Ashti Library
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent-light">
                Kurdish Digital Bookstore
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-4 sm:mt-6 text-sm sm:text-base text-muted max-w-2xl mx-auto leading-relaxed px-2"
            >
              A full-featured Kurdish bookstore website built for a real client
              in Erbil. AI chatbot powered by Gemini 2.0 Flash for book
              recommendations, full admin dashboard, SEO optimization, and
              WhatsApp ordering — all in RTL Kurdish.
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
                    <span className="text-[8px] sm:text-[10px] font-mono text-subtle">ashtilibrary.com</span>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image src="/images/projects/ashti-library.jpg" alt="Ashti Library — screenshot" fill className="object-cover object-top" sizes="(max-width:768px) 100vw,800px" priority />
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
              { label: "Client", value: "Ashti Books" },
              { label: "Location", value: "Erbil, Kurdistan" },
              { label: "Domain", value: "ashtilibrary.com" },
              { label: "Type", value: "Client Project" },
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

        {/* ── About the Client ── */}
        <section className="py-12 sm:py-20 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[180px] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.div {...fadeUp} className="rounded-2xl sm:rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-5 sm:p-8 shadow-card">
              <span className="overline text-accent/60 text-[9px] sm:text-[11px]">01 — The Client</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-3 sm:mt-4 text-gradient">
                Ashti Bookstore, Erbil
              </h2>
              <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mt-3 sm:mt-4 mb-4 sm:mb-6" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3 text-xs sm:text-sm text-muted leading-relaxed">
                  <p>
                    <strong className="text-white/80">Ashti Bookstore</strong> is a well-known bookshop in downtown Erbil
                    (2nd floor). It has a large collection of Kurdish books — novels, stories, poetry,
                    history, philosophy, and science.
                  </p>
                  <p>
                    The owner requested a website where books could be showcased,
                    customers could browse and place orders via WhatsApp.
                    They also requested an AI chatbot to help visitors find and discover books.
                  </p>
                </div>
                <div className="space-y-2">
                  {[
                    { label: "📍 Address", value: "Erbil — Downtown, 2nd Floor" },
                    { label: "⏰ Hours", value: "9:00 AM – 8:00 PM (Every day)" },
                    { label: "📞 Phone", value: "+964 750 386 6000" },
                    { label: "🌐 Domain", value: "ashtilibrary.com" },
                  ].map((info) => (
                    <div key={info.label} className="flex items-start gap-2 text-xs sm:text-sm">
                      <span className="shrink-0 text-accent/70 font-medium">{info.label}</span>
                      <span className="text-muted">{info.value}</span>
                    </div>
                  ))}
                  <div className="flex gap-2 mt-3 pt-3 border-t border-border">
                    {[
                      { name: "Facebook", url: "https://www.facebook.com/ktebxany.ashti" },
                      { name: "Instagram", url: "https://www.instagram.com/ktebxanay.ashti/" },
                      { name: "Telegram", url: "https://t.me/ktebxanai1ashti" },
                    ].map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 text-[9px] font-mono uppercase tracking-wider rounded-full bg-accent/10 text-accent/70 border border-accent/10 hover:bg-accent/20 transition-colors"
                      >
                        {social.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="py-12 sm:py-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent-light/[0.03] rounded-full blur-[200px] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.div {...fadeUp} className="text-center mb-8 sm:mb-12">
              <span className="overline text-accent/60">02 — What I Built</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-3 sm:mt-4 text-gradient">
                Features &amp; Technical Details
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mx-auto mt-4" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
              {/* AI Chatbot */}
              <motion.div {...fadeUp} className="rounded-2xl sm:rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-5 sm:p-8 shadow-card hover:shadow-card-hover hover:border-accent/15 transition-all duration-500 ease-premium">
                <span className="overline text-accent/60 text-[9px] sm:text-[11px]">AI Chatbot</span>
                <h3 className="text-lg sm:text-xl font-bold mt-2 mb-3 text-white/90">Gemini 2.0 Flash Book Assistant</h3>
                <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mb-4" />
                <div className="space-y-3 text-xs sm:text-sm text-muted leading-relaxed">
                  <p>
                    An AI chatbot powered by <strong className="text-white/80">Google Gemini 2.0 Flash</strong> that
                    knows every book in the store&apos;s catalog. Users can ask about any genre
                    and the AI recommends available books with full pricing and details.
                  </p>
                  <p>
                    It also provides store information (address, hours, phone) and a Google Maps link on request.
                  </p>
                </div>
              </motion.div>

              {/* Book Catalog */}
              <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }} className="rounded-2xl sm:rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-5 sm:p-8 shadow-card hover:shadow-card-hover hover:border-accent/15 transition-all duration-500 ease-premium">
                <span className="overline text-accent/60 text-[9px] sm:text-[11px]">Book Catalog</span>
                <h3 className="text-lg sm:text-xl font-bold mt-2 mb-3 text-white/90">Full Browsing &amp; Search</h3>
                <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mb-4" />
                <div className="space-y-3 text-xs sm:text-sm text-muted leading-relaxed">
                  <p>
                    A full <strong className="text-white/80">book catalog page</strong> with category filtering,
                    search by book title/author/translator. Categories include: novels, stories, poetry, philosophy, history, religion, science, and more.
                  </p>
                  <p>
                    Homepage sections: latest books, bestsellers, featured, and discounted books.
                    Uses <strong className="text-white/80">infinite scroll</strong> for smooth browsing.
                  </p>
                </div>
              </motion.div>

              {/* Admin Dashboard */}
              <motion.div {...fadeUp} className="rounded-2xl sm:rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-5 sm:p-8 shadow-card hover:shadow-card-hover hover:border-accent/15 transition-all duration-500 ease-premium">
                <span className="overline text-accent/60 text-[9px] sm:text-[11px]">Admin Panel</span>
                <h3 className="text-lg sm:text-xl font-bold mt-2 mb-3 text-white/90">Dashboard &amp; Content Management</h3>
                <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mb-4" />
                <div className="space-y-3 text-xs sm:text-sm text-muted leading-relaxed">
                  <p>
                    Admin dashboard for <strong className="text-white/80">full book management</strong>:
                    add, edit, delete books. Categories with full CRUD. Stats overview:
                    total books, bestsellers, featured counts.
                  </p>
                  <p>
                    Discount management, multi-admin support,
                    and viewing AI chatbot conversation history.
                  </p>
                </div>
              </motion.div>

              {/* SEO */}
              <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }} className="rounded-2xl sm:rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-5 sm:p-8 shadow-card hover:shadow-card-hover hover:border-accent/15 transition-all duration-500 ease-premium">
                <span className="overline text-accent/60 text-[9px] sm:text-[11px]">SEO &amp; Discovery</span>
                <h3 className="text-lg sm:text-xl font-bold mt-2 mb-3 text-white/90">Kurdish SEO Optimization</h3>
                <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mb-4" />
                <div className="space-y-3 text-xs sm:text-sm text-muted leading-relaxed">
                  <p>
                    Full Kurdish-language SEO: <strong className="text-white/80">Schema.org BookStore</strong> structured data,
                    Open Graph, Twitter Cards, and Geo tags for the physical store location in Erbil.
                  </p>
                  <p>
                    Custom <strong className="text-white/80">Kurdish slug generator</strong> that converts Kurdish characters
                    to Latin for SEO-friendly URLs. Also includes sitemap.xml and canonical URLs.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* More features */}
            <motion.div {...fadeUp} className="mt-10 sm:mt-16">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {[
                  {
                    title: "WhatsApp Ordering",
                    desc: "Customers can order books directly via WhatsApp. An order button links straight to the bookstore's WhatsApp with the book details pre-filled.",
                  },
                  {
                    title: "Book Details Page",
                    desc: "Dedicated page for each book: cover image, price, author, translator, category, description, view count, and related books from the same category.",
                  },
                  {
                    title: "Discount System",
                    desc: "Admins can set discounts on any book. Customers see both the original and discounted price with a clear visual indicator.",
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

        {/* ── Bottom CTA ── */}
        <motion.section
          {...fadeUp}
          className="border-t border-border py-14 sm:py-20 relative overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-accent/[0.04] rounded-full blur-[200px] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient">
              Visit Ashti Library
            </h2>
            <p className="text-muted mt-2 sm:mt-3 text-xs sm:text-sm max-w-md mx-auto">
              The bookstore website is live with its own domain. Browse Kurdish
              books and try the AI chatbot.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-8 sm:mt-10">
              <a
                href="https://ashtilibrary.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm font-semibold bg-gradient-to-r from-accent to-accent-light text-primary shadow-glow-sm hover:shadow-glow transition-all duration-400 ease-premium"
              >
                Visit ashtilibrary.com
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
            &copy; {new Date().getFullYear()} Ibrahim Hussein &middot; Ashti Library Case Study
          </p>
        </div>
      </footer>
    </div>
  );
}
