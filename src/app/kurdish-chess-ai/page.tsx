"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

/* ══════════════════════════════════════════════
   Kurdish Chess AI Case Study — case-study.ibrahim-eng.dev/kurdish-chess-ai
   Full Kurdish-language chess platform with a custom AI engine + Gemini coach
   ══════════════════════════════════════════════ */

const techStack = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "chess.js",
  "react-chessboard",
  "Gemini 2.5 Flash",
  "Zustand",
  "Tailwind CSS",
  "RTL Kurdish",
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

const features = [
  { name: "یاری لەگەڵ AI", desc: "Play against the custom minimax engine across 7 difficulty levels, from Beginner to Unlimited", iconId: "play", href: "/play" },
  { name: "ڕاهێنەری AI", desc: "Gemini-powered coach that questions your thinking and teaches strategy move by move", iconId: "coach", href: "/coach" },
  { name: "خوێندنەوەی مێشک", desc: "Mind-reading feature — predicts the opponent's intent, threats, and traps with probability scores", iconId: "brain", href: "/mind-reading" },
  { name: "یاری لەگەڵ Gemini", desc: "Play directly against Google Gemini 2.5 Flash as a live AI opponent", iconId: "swords", href: "/play-with-ai" },
  { name: "شیکاری", desc: "Post-game analysis of accuracy, mistakes, and better alternative moves in Kurdish", iconId: "chart", href: "/analysis" },
  { name: "ڕاهێنان", desc: "Daily puzzles and training drills to sharpen tactics", iconId: "target", href: "/training" },
];

function FeatureIcon({ id }: { id: string }) {
  const common = { className: "w-6 h-6 sm:w-7 sm:h-7 text-accent", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.8 } as const;
  switch (id) {
    case "play":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3l14 9-14 9V3z" />
        </svg>
      );
    case "coach":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 9v6a9 3 0 0018 0V9" />
        </svg>
      );
    case "brain":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 4a3 3 0 00-3 3v.2A3 3 0 004.5 10v1a3 3 0 001 2.24V15a3 3 0 003 3h1M14.5 4a3 3 0 013 3v.2a3 3 0 012 2.8v1a3 3 0 01-1 2.24V15a3 3 0 01-3 3h-1M9.5 4v14M14.5 4v14" />
        </svg>
      );
    case "swords":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 20l6-6M20 4l-6 6M9 9L4 4m11 11l5 5M10 14l-1.5 1.5M14 10l1.5-1.5" />
        </svg>
      );
    case "chart":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
        </svg>
      );
    case "target":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" strokeLinecap="round" />
          <circle cx="12" cy="12" r="4" strokeLinecap="round" />
          <circle cx="12" cy="12" r="0.5" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

const difficultyLevels = [
  { name: "Beginner", depth: "Depth 1", note: "80% random moves, prefers captures" },
  { name: "Easy", depth: "Depth 1", note: "Minimax + 40% randomness" },
  { name: "Normal", depth: "Depth 2", note: "Minimax + 15% randomness" },
  { name: "Hard", depth: "Depth 3", note: "Minimax + 5% randomness" },
  { name: "Expert", depth: "Depth 4", note: "Full minimax, no randomness" },
  { name: "Master", depth: "Depth 5", note: "Full minimax, no randomness" },
  { name: "Unlimited", depth: "Depth 6", note: "Deepest search, no randomness" },
];

export default function KurdishChessAICaseStudy() {
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
              href="https://github.com/ibrahim-ibo-dev/kurdish-chess-AI"
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
              href="https://chess-ai.ibrahim-eng.dev"
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
                Kurdish Chess AI
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent-light" dir="rtl">
                شەترەنجی کوردی
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-4 sm:mt-6 text-sm sm:text-base text-muted max-w-2xl mx-auto leading-relaxed px-2"
            >
              A full Kurdish-language chess platform built from scratch with a custom
              minimax + alpha-beta AI engine, a Google Gemini 2.5 Flash coach, a
              mind-reading opponent-intent predictor, post-game analysis, and daily
              puzzle training — every screen fully localized in RTL Kurdish Sorani.
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
                    <span className="text-[8px] sm:text-[10px] font-mono text-subtle">chess-ai.ibrahim-eng.dev</span>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image src="/images/projects/kurdish-chess-ai.png" alt="Kurdish Chess AI — screenshot" fill className="object-cover object-top" sizes="(max-width:768px) 100vw,800px" priority />
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
              { label: "AI Engine", value: "Minimax + Gemini 2.5" },
              { label: "Difficulty Levels", value: "7" },
              { label: "Language", value: "Kurdish Sorani (RTL)" },
              { label: "Domain", value: "chess-ai.ibrahim-eng.dev" },
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
                No Chess Platform in Kurdish
              </h2>
              <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mt-3 sm:mt-4 mb-4 sm:mb-6" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-muted leading-relaxed">
                <p>
                  Kurdish speakers who want to learn or practice chess have no dedicated
                  platform in their own language — every serious chess site is in English
                  or Arabic, which is a real barrier for beginners in Kurdistan.
                </p>
                <p>
                  Beyond translation, beginners also lack an accessible way to get
                  <strong className="text-white/80"> move-by-move coaching</strong>, understand their opponent&apos;s
                  intent, or review their own mistakes after a game — the tools serious
                  players rely on simply didn&apos;t exist for Kurdish speakers.
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
                Every feature is reachable from the homepage and fully localized in Kurdish Sorani, right-to-left.
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
              {/* Custom Minimax Engine */}
              <motion.div {...fadeUp} className="rounded-2xl sm:rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-5 sm:p-8 shadow-card hover:shadow-card-hover hover:border-accent/15 transition-all duration-500 ease-premium">
                <span className="overline text-accent/60 text-[9px] sm:text-[11px]">Chess Engine</span>
                <h3 className="text-lg sm:text-xl font-bold mt-2 mb-3 text-white/90">Custom Minimax + Alpha-Beta Pruning</h3>
                <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mb-4" />
                <div className="space-y-3 text-xs sm:text-sm text-muted leading-relaxed">
                  <p>
                    The AI opponent is built entirely from scratch using <strong className="text-white/80">chess.js</strong> for
                    move generation and a hand-written <strong className="text-white/80">minimax algorithm with alpha-beta pruning</strong>.
                    The board is evaluated using classic material values (pawn=100 … queen=900)
                    combined with per-piece <strong className="text-white/80">piece-square tables</strong> that reward good positioning
                    (e.g. knights in the center, pawns advancing, king safety in the opening).
                  </p>
                  <p>
                    Search depth scales with difficulty — from 1 ply at Beginner up to 6 plies
                    at Unlimited — with alpha-beta pruning cutting off branches that can&apos;t
                    improve the result, keeping even the deepest search fast in the browser.
                  </p>
                </div>
              </motion.div>

              {/* Difficulty System */}
              <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }} className="rounded-2xl sm:rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-5 sm:p-8 shadow-card hover:shadow-card-hover hover:border-accent/15 transition-all duration-500 ease-premium">
                <span className="overline text-accent/60 text-[9px] sm:text-[11px]">Difficulty Curve</span>
                <h3 className="text-lg sm:text-xl font-bold mt-2 mb-3 text-white/90">7 Difficulty Levels</h3>
                <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mb-4" />
                <div className="space-y-1.5">
                  {difficultyLevels.map((d) => (
                    <div key={d.name} className="flex items-center justify-between text-[11px] sm:text-xs gap-2 py-1 border-b border-border/60 last:border-0">
                      <span className="text-white/80 font-medium shrink-0">{d.name}</span>
                      <span className="text-accent/60 font-mono shrink-0">{d.depth}</span>
                      <span className="text-muted text-right">{d.note}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Gemini Coach & Analysis */}
              <motion.div {...fadeUp} className="rounded-2xl sm:rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-5 sm:p-8 shadow-card hover:shadow-card-hover hover:border-accent/15 transition-all duration-500 ease-premium">
                <span className="overline text-accent/60 text-[9px] sm:text-[11px]">Gemini AI</span>
                <h3 className="text-lg sm:text-xl font-bold mt-2 mb-3 text-white/90">Gemini 2.5 Flash Coach &amp; Analysis</h3>
                <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mb-4" />
                <div className="space-y-3 text-xs sm:text-sm text-muted leading-relaxed">
                  <p>
                    Three dedicated API routes (<code className="text-accent/70">/api/chat</code>, <code className="text-accent/70">/api/analyze</code>, <code className="text-accent/70">/api/ai-move</code>)
                    send the current board state — FEN, PGN, and full move list — to
                    <strong className="text-white/80"> Google Gemini 2.5 Flash</strong> with Kurdish-only system prompts.
                  </p>
                  <p>
                    In coach mode, Gemini asks guiding questions instead of giving direct
                    answers. In analysis mode, it reviews accuracy and mistakes after the
                    game. In play-with-Gemini mode, it plays full moves directly as the
                    opponent, replying in strict <code className="text-accent/70">MOVE: / REASON:</code> format that the app parses automatically.
                  </p>
                </div>
              </motion.div>

              {/* Mind Reading */}
              <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }} className="rounded-2xl sm:rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-5 sm:p-8 shadow-card hover:shadow-card-hover hover:border-accent/15 transition-all duration-500 ease-premium">
                <span className="overline text-accent/60 text-[9px] sm:text-[11px]">Mind Reading</span>
                <h3 className="text-lg sm:text-xl font-bold mt-2 mb-3 text-white/90">Opponent-Intent Predictor</h3>
                <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mb-4" />
                <div className="space-y-3 text-xs sm:text-sm text-muted leading-relaxed">
                  <p>
                    A dedicated <code className="text-accent/70">mindReading</code> mode prompts Gemini to act as a
                    chess psychologist: given the current FEN/PGN, it predicts the
                    opponent&apos;s primary intention, any attack being prepared, and traps
                    being set — each with a <strong className="text-white/80">probability score</strong>.
                  </p>
                  <p>
                    The response is returned as structured JSON
                    (<code className="text-accent/70">intention</code>, <code className="text-accent/70">probability</code>, <code className="text-accent/70">alternatives</code>, <code className="text-accent/70">explanation</code>)
                    so the UI can render it as a ranked list of predicted threats.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* More technical notes */}
            <motion.div {...fadeUp} className="mt-10 sm:mt-16">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {[
                  {
                    title: "State Management",
                    desc: "Zustand stores manage game state, move history, and settings without prop drilling across the board, sidebar, and chat panels.",
                  },
                  {
                    title: "Board & Rules Engine",
                    desc: "react-chessboard renders the interactive board; chess.js validates every move, detects check/checkmate/stalemate/draws, and generates legal move lists for the AI.",
                  },
                  {
                    title: "Full RTL Localization",
                    desc: "Every route — home, play, coach, analysis, mind-reading, training, statistics, profile, settings — is written natively in Kurdish Sorani with RTL layout throughout.",
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
                Deployed live at <strong className="text-white/80">chess-ai.ibrahim-eng.dev</strong>, Kurdish Chess AI
                gives Kurdish speakers their first native-language chess trainer — combining
                a self-built game engine with modern generative AI for coaching, analysis,
                and psychological insight into an opponent&apos;s next move, all without ever
                leaving the Kurdish language.
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
              Play Kurdish Chess AI
            </h2>
            <p className="text-muted mt-2 sm:mt-3 text-xs sm:text-sm max-w-md mx-auto">
              Try the live app or explore the full source code on GitHub.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-8 sm:mt-10">
              <a
                href="https://chess-ai.ibrahim-eng.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm font-semibold bg-gradient-to-r from-accent to-accent-light text-primary shadow-glow-sm hover:shadow-glow transition-all duration-400 ease-premium"
              >
                Visit chess-ai.ibrahim-eng.dev
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
              <a
                href="https://github.com/ibrahim-ibo-dev/kurdish-chess-AI"
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
            &copy; {new Date().getFullYear()} Ibrahim Hussein &middot; Kurdish Chess AI Case Study
          </p>
        </div>
      </footer>
    </div>
  );
}
