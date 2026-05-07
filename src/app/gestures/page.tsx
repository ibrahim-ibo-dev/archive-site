"use client";

import { motion } from "framer-motion";
import Link from "next/link";

/* ══════════════════════════════════════════════
   Gesture Recognition Engine Case Study
   ══════════════════════════════════════════════ */

const techStack = [
  "Python",
  "MediaPipe",
  "OpenCV",
  "KNN Classifier",
  "scikit-learn",
  "Tkinter / ttkbootstrap",
  "NumPy",
  "Pickle",
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
};

export default function GesturesCaseStudy() {
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
          <Link href="/attendance" className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-semibold tracking-wide bg-gradient-to-r from-accent to-accent-light text-primary shadow-glow-sm hover:shadow-glow transition-all duration-400 ease-premium">
            <span>See Face Track Pro</span>
            <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </Link>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-accent/[0.05] rounded-full blur-[200px] sm:blur-[250px] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="overline text-accent/70">
              {"// Case Study / 2025"}
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }} className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mt-4 sm:mt-6">
              <span className="text-gradient">Gesture Recognition</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent-light">ML Engine</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="mt-4 sm:mt-6 text-sm sm:text-base text-muted max-w-2xl mx-auto leading-relaxed px-2">
              A real-time gesture recognition system using MediaPipe body tracking (hands, face mesh, pose) combined with a custom-trained KNN model. Features incremental learning, data augmentation, and temporal dynamics analysis.
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
                <span className="ml-3 text-[9px] sm:text-[10px] font-mono text-subtle">Gesture Recognition Engine — Desktop App</span>
              </div>
              <div className="relative aspect-[16/9] bg-gradient-to-br from-accent/[0.08] via-surface/60 to-accent-light/[0.05] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-accent/15 border border-accent/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-accent/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
                    </svg>
                  </div>
                  <p className="text-[10px] sm:text-xs text-subtle font-mono">Real-time Hand + Body Gesture Recognizer</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Stats */}
        <motion.section {...fadeUp} className="border-y border-border bg-surface/40 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {[
              { label: "Tracking points", value: "Hands + Face + Pose" },
              { label: "ML Model", value: "KNN (k=3)" },
              { label: "Learning", value: "Incremental" },
              { label: "Status", value: "Completed" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-base sm:text-xl md:text-2xl font-bold text-gradient">{stat.value}</p>
                <p className="overline text-subtle mt-1 sm:mt-2 text-[9px] sm:text-[11px]">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Content */}
        <section className="py-12 sm:py-20 md:py-28 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[200px] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
              {/* Problem */}
              <motion.div {...fadeUp} className="rounded-2xl sm:rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-5 sm:p-8 shadow-card hover:shadow-card-hover hover:border-accent/15 transition-all duration-500 ease-premium">
                <span className="overline text-accent/60 text-[9px] sm:text-[11px]">01 — The Problem</span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-3 sm:mt-4 leading-snug text-gradient">Why I Built This</h2>
                <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mt-3 sm:mt-4 mb-4 sm:mb-6" />
                <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-muted leading-relaxed">
                  <p>Approximately 250,000 people in Kurdistan and Iraq live with hearing or speech difficulties. Most communication tools for this community require expensive hardware or specialized gloves.</p>
                  <p>This project explores a software-only approach — using a standard webcam to recognize sign language gestures in real time, making accessibility tools available without any special hardware.</p>
                </div>
              </motion.div>

              {/* Architecture */}
              <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }} className="rounded-2xl sm:rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-5 sm:p-8 shadow-card hover:shadow-card-hover hover:border-accent/15 transition-all duration-500 ease-premium">
                <span className="overline text-accent/60 text-[9px] sm:text-[11px]">02 — Architecture</span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-3 sm:mt-4 leading-snug text-gradient">System Design</h2>
                <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mt-3 sm:mt-4 mb-4 sm:mb-6" />
                <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-muted leading-relaxed">
                  <p><strong className="text-white/80">Tracking:</strong> MediaPipe Hands (21 landmarks × 2), Face Mesh (468 points), and Pose estimation (33 joints) — combined into a unified feature vector per frame.</p>
                  <p><strong className="text-white/80">Temporal Engine:</strong> 15-frame sliding window analyzes velocity, acceleration, trajectory, and periodicity of hand/nose movements for dynamic gesture detection.</p>
                  <p><strong className="text-white/80">ML Model:</strong> KNN (k=3, distance-weighted) with StandardScaler — trained incrementally with 3× augmentation (noise, drift, occlusion simulation).</p>
                </div>
              </motion.div>
            </div>

            {/* Key Features */}
            <motion.div {...fadeUp} className="mt-10 sm:mt-16">
              <div className="text-center mb-6 sm:mb-10">
                <span className="overline text-accent/60">03 — Engineering Highlights</span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-3 sm:mt-4 leading-snug text-gradient">Technical Deep Dive</h2>
                <div className="w-16 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mx-auto mt-3 sm:mt-4" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {[
                  { title: "Incremental Learning", desc: "The model trains on newly recorded gestures without retraining from scratch. Quality scoring and outlier filtering ensure bad samples don't degrade accuracy." },
                  { title: "Confusion Analysis", desc: "Tracks commonly mixed-up gesture pairs after every training session. Cross-validation scores and a confusion matrix guide which gestures need more samples." },
                  { title: "Multi-Strategy Augmentation", desc: "Each gesture sample is augmented 3× using noise injection, temporal drift simulation, and occlusion masking — expanding small datasets without real data collection." },
                ].map((f) => (
                  <div key={f.title} className="rounded-2xl sm:rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-5 sm:p-6 shadow-card hover:shadow-card-hover hover:border-accent/15 transition-all duration-500 ease-premium">
                    <h3 className="text-sm sm:text-base font-semibold text-white/90 mb-2 sm:mb-3">{f.title}</h3>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Feature vector breakdown */}
            <motion.div {...fadeUp} className="mt-10 sm:mt-14 rounded-2xl sm:rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-5 sm:p-8 shadow-card">
              <span className="overline text-accent/60 text-[9px] sm:text-[11px]">04 — Feature Vector</span>
              <h2 className="text-xl sm:text-2xl font-bold mt-3 sm:mt-4 leading-snug text-gradient">Temporal Descriptor</h2>
              <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full mt-3 mb-5" />
              <div className="grid grid-cols-2 sm:grid-cols-6 gap-3">
                {["Velocity L/R", "Acceleration L/R", "Nose Velocity", "Trajectory L/R", "Periodicity", "Δt Stats"].map((feat) => (
                  <div key={feat} className="px-3 py-2.5 rounded-xl bg-accent/[0.06] border border-accent/10 text-center">
                    <span className="text-[10px] sm:text-xs font-mono text-accent/80">{feat}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <motion.section {...fadeUp} className="border-t border-border py-14 sm:py-20 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-[200px] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient">Explore Related Projects</h2>
            <p className="text-muted mt-2 sm:mt-3 text-xs sm:text-sm max-w-md mx-auto">
              Face Track Pro uses the same CV/AI stack for automated attendance — real-time face recognition across full classrooms.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-8 sm:mt-10">
              <a href="https://github.com/ibrahim-ibo-dev/AI-Sign-Language" target="_blank" rel="noopener noreferrer" className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm font-semibold bg-gradient-to-r from-accent to-accent-light text-primary shadow-glow-sm hover:shadow-glow transition-all duration-400 ease-premium">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                View on GitHub
              </a>
              <Link href="/attendance" className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm font-medium text-subtle border border-border hover:text-white hover:border-accent/20 transition-all duration-400 ease-premium">
                Face Track Pro
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
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-border py-6 sm:py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[10px] sm:text-xs text-subtle font-mono">
            &copy; {new Date().getFullYear()} Ibrahim Hussein &middot; Gesture Recognition Case Study
          </p>
        </div>
      </footer>
    </div>
  );
}
