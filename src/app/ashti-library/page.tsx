"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

/* ══════════════════════════════════════════════
   Ashti Library — case-study.ibrahim-eng.dev/ashti-library
   Bringing a Kurdish bookstore online for the first time.
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
  "Gemini 2.0 Flash",
  "Schema.org BookStore",
  "RTL Kurdish",
  "WhatsApp API",
];

const stats = [
  { label: "Client", value: "Ashti Books" },
  { label: "Location", value: "Erbil, Kurdistan" },
  { label: "Live Domain", value: "ashtilibrary.com" },
  { label: "Ordering", value: "WhatsApp" },
];

const principles = [
  {
    step: "Principle 01",
    title: "Kurdish-first, not Kurdish-translated",
    desc: "RTL, Kurdish slugs, Kurdish SEO, Kurdish AI replies. The site reads like it was made here, not localized from elsewhere.",
  },
  {
    step: "Principle 02",
    title: "Order through what customers already use",
    desc: "Nobody downloads a bookstore app. Buyers tap a book, then tap WhatsApp — the shop already lives there.",
  },
  {
    step: "Principle 03",
    title: "AI replaces the staff member who knows the catalog",
    desc: "Most discovery in a bookstore happens because a staff member recommends. The AI plays that role 24/7, in Kurdish.",
  },
];

const buildItems = [
  {
    tag: "Discovery",
    title: "Gemini 2.0 Flash book assistant",
    challenge: "Customers don't know what they want — they walk in and ask the staff. Online, that conversation has to still happen.",
    decision: "Built an AI chatbot wired to the live catalog: it knows every book, current price, discounts, and stock. Recommends in Kurdish, in genre, with a one-tap order link.",
  },
  {
    tag: "URLs",
    title: "Kurdish slug generator",
    challenge: "Search engines and shareable links don't handle Kurdish characters cleanly — books would have unreadable URLs.",
    decision: "Wrote a custom Kurdish-to-Latin transliteration layer that produces clean SEO-friendly slugs from book titles, while keeping the displayed title in Kurdish.",
  },
  {
    tag: "Ordering",
    title: "WhatsApp-first ordering flow",
    challenge: "A full e-commerce checkout would have meant cards, shipping rules, and friction nobody wanted.",
    decision: "Each book has a one-tap WhatsApp order button that opens a chat to the bookstore with the title, price, and link pre-filled. The order conversation stays where the shop already runs.",
  },
  {
    tag: "Discovery",
    title: "Schema.org + Kurdish SEO",
    challenge: "Even the perfect bookstore is invisible if it doesn't show up in Kurdish searches.",
    decision: "Implemented BookStore + Book structured data, geo-tags for Erbil, Kurdish meta tags, sitemap.xml, and canonical URLs — so Google understands both the shop and every book.",
  },
  {
    tag: "Operations",
    title: "Owner-first admin panel",
    challenge: "The owner runs a real bookstore — they can't spend an hour to add a book. The dashboard had to be fast.",
    decision: "Built a streamlined admin: add/edit/delete books in seconds, set discounts, mark featured/bestseller, manage categories, and review AI chat history — all from the phone.",
  },
  {
    tag: "Performance",
    title: "Infinite scroll catalog",
    challenge: "Pagination breaks the browsing feel of an actual bookstore — customers scan shelves, not page numbers.",
    decision: "Replaced pagination with infinite scroll for the main catalog, with category filters and search by title, author, and translator working on top of it.",
  },
];

const lessons = [
  {
    title: "Kurdish content needs Kurdish infrastructure, not just translation",
    desc: "RTL was the easy part. The hard part was slug generation, schema markup, and an AI that actually understood Sorani phrasing — none of which off-the-shelf platforms handle.",
  },
  {
    title: "Don't fight where customers already are",
    desc: "Designing a fancy checkout would have lost orders. The shop already had a WhatsApp number; the site's job was to send qualified leads to that number with the right context.",
  },
  {
    title: "An AI catalog assistant is the new staff member",
    desc: "What used to be a 'feature' (chatbot) is actually the digital version of the staff member who recommends books. Designing it that way changed how it spoke and what it knew.",
  },
];

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
              {"// Case Study · 2025 · Client Project"}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mt-4 sm:mt-6"
            >
              <span className="text-gradient">Bringing a Kurdish bookstore</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent-light">
                online for the first time
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-4 sm:mt-6 text-sm sm:text-base text-muted max-w-2xl mx-auto leading-relaxed px-2"
            >
              Ashti Bookstore is a long-running Kurdish bookshop in downtown Erbil.
              Until 2025, every order happened in person. I built them a
              <span className="text-white/90"> fully RTL Kurdish website with an AI book assistant and one-tap WhatsApp ordering</span>
              {" "}— so readers can discover, browse, and order books in their own language without ever leaving home.
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
                <Image src="/images/projects/ashti-library.jpg" alt="Ashti Library — production screenshot" fill className="object-cover object-top" sizes="(max-width:768px) 100vw,800px" priority />
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
                A bookstore full of Kurdish readers couldn&apos;t reach the readers who weren&apos;t in the shop.
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mt-5" />
            </motion.div>

            <motion.div {...fadeUp} className="space-y-4 sm:space-y-5 text-sm sm:text-base text-muted leading-relaxed">
              <p>
                Ashti is a respected bookshop in <span className="text-white/90">downtown Erbil</span> with one of the
                largest Kurdish-language collections in the city &mdash; novels, poetry, history, philosophy, science.
                But every sale required walking up to the second floor and asking the staff.
              </p>
              <p>
                <span className="text-white/90">Customers outside Erbil had no way to browse the catalog.</span> Customers inside Erbil
                couldn&apos;t check availability before driving over. There was no Kurdish-language bookstore website to fall back on,
                because <span className="text-white/90">Kurdish e-commerce barely exists</span> &mdash; the off-the-shelf platforms don&apos;t handle RTL,
                Kurdish slugs, Kurdish SEO, or AI that understands the language.
              </p>
              <p>
                The owner asked for a website. What they actually needed was a way to <span className="text-white/90">turn a physical
                Kurdish bookstore into a discoverable digital one</span> &mdash; without losing the human touch their regular customers came back for.
              </p>
            </motion.div>

            <motion.div {...fadeUp} className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {[
                { label: "0", desc: "Online discovery — readers couldn&apos;t search the catalog before visiting" },
                { label: "0 platforms", desc: "Off-the-shelf e-commerce that handled Kurdish RTL, slugs, and SEO" },
                { label: "1 channel", desc: "Sales — in-person only, walk-in to a 2nd-floor shop" },
              ].map((p) => (
                <div key={p.label} className="rounded-2xl border border-border bg-surface/40 backdrop-blur-sm p-4 sm:p-5">
                  <p className="text-lg sm:text-xl font-bold text-accent/90">{p.label}</p>
                  <p className="text-xs sm:text-sm text-muted mt-1.5 leading-relaxed" dangerouslySetInnerHTML={{ __html: p.desc }} />
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
                Don&apos;t build an e-commerce store. Build a digital staff member that knows the catalog.
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mt-5" />
            </motion.div>

            <motion.p {...fadeUp} className="text-sm sm:text-base text-muted leading-relaxed">
              The temptation was to build a typical online shop with carts, payments, and shipping. I rejected that.
              Kurdish readers buy books the way they ask staff for recommendations &mdash;
              <span className="text-white/90"> through conversation, in their own language, with quick follow-ups</span>.
              The site was redesigned around three commitments:
            </motion.p>

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

        {/* ── 03 · The Solution / About the Client ── */}
        <section className="py-14 sm:py-24 relative overflow-hidden border-t border-border">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.div {...fadeUp} className="text-center mb-10 sm:mb-12">
              <span className="overline text-accent/60">03 — The Solution</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 sm:mt-4 text-gradient leading-tight">
                A real Kurdish bookstore, online and discoverable
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mx-auto mt-5" />
            </motion.div>

            <motion.div {...fadeUp} className="rounded-2xl sm:rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-5 sm:p-8 shadow-card">
              <span className="overline text-accent/60 text-[9px] sm:text-[11px]">The Client</span>
              <h3 className="text-xl sm:text-2xl font-bold mt-2 text-gradient">Ashti Bookstore, Erbil</h3>
              <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mt-3 mb-5" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3 text-xs sm:text-sm text-muted leading-relaxed">
                  <p>
                    <strong className="text-white/80">Ashti Bookstore</strong> is a well-known Kurdish bookshop in downtown
                    Erbil (2nd floor), specializing in novels, stories, poetry, history, philosophy, and science.
                  </p>
                  <p>
                    The owner needed a way to showcase the full catalog online, let customers browse and order via WhatsApp,
                    and offer an AI assistant that helps visitors discover books &mdash; all in Kurdish.
                  </p>
                </div>
                <div className="space-y-2">
                  {[
                    { label: "📍 Address", value: "Erbil — Downtown, 2nd Floor" },
                    { label: "⏰ Hours", value: "9:00 AM – 8:00 PM (Daily)" },
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

        {/* ── 04 · Inside the Build ── */}
        <section className="py-14 sm:py-24 relative overflow-hidden border-t border-border">
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[200px] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.div {...fadeUp} className="text-center mb-10 sm:mb-14">
              <span className="overline text-accent/60">04 — Inside the Build</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 sm:mt-4 text-gradient">
                Engineering decisions, not feature lists
              </h2>
              <p className="text-sm text-muted mt-3 max-w-2xl mx-auto leading-relaxed">
                Each of these solved a concrete problem the bookstore was facing &mdash; not a checklist of generic e-commerce features.
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
          </div>
        </section>

        {/* ── 05 · The Result ── */}
        <section className="py-14 sm:py-24 relative overflow-hidden border-t border-border">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-[200px] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.div {...fadeUp} className="text-center mb-10">
              <span className="overline text-accent-light/80">05 — The Result</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 sm:mt-4 text-gradient leading-tight">
                Live at ashtilibrary.com &mdash; and ordering happens digitally
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mx-auto mt-5" />
            </motion.div>

            <motion.div {...fadeUp} className="rounded-2xl sm:rounded-3xl border border-accent/20 bg-accent/[0.04] p-6 sm:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-center">
                <div>
                  <p className="text-base sm:text-lg text-white/90 leading-relaxed font-medium">
                    Ashti Library is in production at{" "}
                    <a href="https://ashtilibrary.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-light underline-offset-4 hover:underline">
                      ashtilibrary.com
                    </a>
                    {" "}&mdash; the first production Kurdish bookstore platform with an AI book assistant.
                  </p>
                  <p className="text-sm text-muted mt-4 leading-relaxed">
                    Readers from outside Erbil can now discover the catalog. Inside Erbil, they can check availability before driving over.
                    Orders flow straight into the shop&apos;s existing WhatsApp number with full context, so the staff still close every sale &mdash;
                    just faster, and from more places.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {[
                    { label: "AI", value: "Gemini 2.0" },
                    { label: "Ordering", value: "WhatsApp" },
                    { label: "Language", value: "Kurdish RTL" },
                    { label: "Status", value: "Live" },
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
                What this project taught me
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

        {/* ── Bottom CTA ── */}
        <motion.section {...fadeUp} className="border-t border-border py-14 sm:py-20 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-accent/[0.04] rounded-full blur-[200px] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient">See it live</h2>
            <p className="text-muted mt-2 sm:mt-3 text-xs sm:text-sm max-w-md mx-auto">
              Browse the Kurdish catalog, ask the AI for recommendations, and order via WhatsApp.
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
            &copy; {new Date().getFullYear()} Ibrahim Hussein &middot; Ashti Library Case Study
          </p>
        </div>
      </footer>
    </div>
  );
}
