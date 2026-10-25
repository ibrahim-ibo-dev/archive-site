"use client";
import { useState } from "react";
import Image from "next/image";
import { archiveProjects, type ArchiveProject } from "@/data/archive-projects";
const featuredOrder = ["/rashkaw-media", "/chat-mart", "/kurdish-chess-ai", "/attendance"];
const projects = archiveProjects.filter(p => !p.archived).sort((a, b) => {
  const rank = (p: ArchiveProject) => featuredOrder.includes(p.link) ? featuredOrder.indexOf(p.link) : 99;
  return rank(a) - rank(b);
});
const filters = [{ id: "all", label: "All projects" }, { id: "software", label: "Software & AI" }, { id: "hardware", label: "Hardware" }] as const;
type Filter = typeof filters[number]["id"];
function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d={diagonal ? "M5 19 19 5M5 5h14v14" : "M4 12h16m-6-6 6 6-6 6"} /></svg>;
}
function ProjectCard({ project, index }: { project: ArchiveProject; index: number }) {
  const isLinked = project.link !== "#";
  const content = <>
    <div className="archive-card-image">
      <Image src={project.image} alt={`${project.title} — project preview`} fill sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw" className="archive-project-image" />
      <span className="archive-card-index">{String(index + 1).padStart(2, "0")}</span>
      {isLinked && <span className="archive-card-open"><Arrow diagonal /></span>}
    </div>
    <div className="archive-card-body">
      <div className="archive-card-meta"><span>{project.category === "hardware" ? "Embedded systems" : project.madeFor.includes("Rashkaw") ? "Client platform" : "Software & AI"}</span><span>{project.year}</span></div>
      <h3>{project.title}</h3><p>{project.description}</p>
      <div className="archive-card-tech">{project.tech.slice(0, 3).map(t => <span key={t}>{t}</span>)}</div>
      <div className="archive-card-bottom"><span className={project.status === "Prototype" ? "project-status prototype" : "project-status"}><i />{project.status}</span><span>{isLinked ? "Read case study" : "Case study in preparation"}{isLinked && <Arrow />}</span></div>
    </div>
  </>;
  return <article className="archive-project-card">{isLinked ? <a href={project.link} aria-label={`Read the ${project.title} case study`}>{content}</a> : <div>{content}</div>}</article>;
}
export default function ArchivePage() {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");
  const filtered = projects.filter(p => (filter === "all" || p.category === filter) && `${p.title} ${p.description} ${p.tech.join(" ")} ${p.madeFor}`.toLowerCase().includes(query.trim().toLowerCase()));
  const reset = () => { setFilter("all"); setQuery(""); };
  return <div className="archive-page">
    <a className="archive-skip" href="#work">Skip to projects</a>
    <header className="archive-nav">
      <a className="archive-brand" href="https://ibrahim-eng.dev" aria-label="Ibrahim Hussein portfolio"><span>IH</span><div>Ibrahim Hussein<small>ENGINEER & BUILDER</small></div></a>
      <nav aria-label="Main navigation"><a href="#work">The work</a><a href="#approach">The approach</a></nav>
      <a className="archive-nav-return" href="https://ibrahim-eng.dev">Portfolio <Arrow diagonal /></a>
    </header>
    <main>
      <section className="archive-hero" aria-labelledby="archive-heading">
        <div className="archive-atmosphere" aria-hidden="true"><span /><span /><span /></div>
        <div className="archive-hero-content">
          <div className="archive-eyebrow"><span /> THE PROJECT ARCHIVE <span /></div>
          <h1 id="archive-heading">Ideas made <em>real.</em></h1>
          <p className="archive-hero-tagline">Engineering the details. Building the experience.</p>
          <p className="archive-hero-copy">A closer look at the platforms, AI systems and experiments<br className="desktop-break" /> I build — and the thinking that brings them to life.</p>
          <a className="archive-button" href="#work">Explore the work <Arrow /></a>
        </div>
        <div className="archive-hero-gallery" aria-label="A preview of selected projects">
          <a href="/cosmic-scale" className="hero-preview preview-left"><div className="preview-bar"><i /><span>EXPERIMENT / COSMIC SCALE</span><Arrow diagonal /></div><div className="preview-image"><Image src="/images/projects/cosmic-scale.jpg" alt="Cosmic Scale interactive Earth visualization" fill sizes="(max-width: 640px) 40vw, 360px" priority /></div></a>
          <a href="/rashkaw-media" className="hero-preview preview-center"><div className="preview-bar"><i /><span>CLIENT WORK / RASHKAW MEDIA</span><Arrow diagonal /></div><div className="preview-image"><Image src="/images/projects/rashkaw-media.png" alt="Rashkaw Media multilingual news platform" fill sizes="(max-width: 640px) 70vw, 500px" priority /></div></a>
          <a href="/kurdish-chess-ai" className="hero-preview preview-right"><div className="preview-bar"><i /><span>APPLIED AI / KURDISH CHESS</span><Arrow diagonal /></div><div className="preview-image"><Image src="/images/projects/kurdish-chess-ai.png" alt="Kurdish Chess AI game and coaching interface" fill sizes="(max-width: 640px) 40vw, 360px" priority /></div></a>
        </div>
        <div className="archive-hero-foot"><span>FROM KURDISTAN. BUILT TO BE USED.</span><a href="#work">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a></div>
      </section>
      <section id="work" className="archive-work archive-container" aria-labelledby="work-heading">
        <div className="archive-section-top"><div><span className="archive-kicker">01 / THE COLLECTION</span><h2 id="work-heading">The work.<br /><span>In full detail.</span></h2></div><p>From real client platforms to personal experiments. Explore the problem, the decisions and the finished experience.</p></div>
        <div className="archive-toolbar">
          <div className="archive-filters" role="group" aria-label="Filter projects">{filters.map(f => <button key={f.id} aria-pressed={filter === f.id} onClick={() => setFilter(f.id)}>{f.label}<span>{projects.filter(p => f.id === "all" || p.category === f.id).length}</span></button>)}</div>
          <label className="archive-search"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></svg><span className="sr-only">Search projects</span><input type="search" placeholder="Search projects or technologies…" value={query} onChange={e => setQuery(e.target.value)} /></label>
        </div>
        <div className="archive-results-meta"><span aria-live="polite">{String(filtered.length).padStart(2, "0")} PROJECTS{query ? ` MATCHING “${query}”` : " TO EXPLORE"}</span><span>CRAFT / CODE / CURIOSITY</span></div>
        <div className="archive-project-grid">{filtered.map(p => <ProjectCard key={p.title} project={p} index={projects.indexOf(p)} />)}</div>
        {filtered.length === 0 && <div className="archive-empty"><h3>No projects found.</h3><p>Try a different title or technology, or explore the full collection.</p><button className="archive-button" onClick={reset}>Show all projects <Arrow /></button></div>}
      </section>
      <section id="approach" className="archive-approach archive-container" aria-labelledby="approach-heading">
        <div className="archive-section-top"><div><span className="archive-kicker">02 / BEHIND THE WORK</span><h2 id="approach-heading">Different projects.<br /><span>The same care.</span></h2></div><p>Good software starts with understanding the people who will use it. The details follow from there.</p></div>
        <div className="archive-principles">
          <article><span className="principle-number">01</span><span className="archive-kicker">UNDERSTAND</span><h3>Start with a<br />real problem.</h3><p>Client workflows, local language and everyday needs shape what gets built.</p><span className="principle-detail">CONTEXT BEFORE CODE</span></article>
          <article><span className="principle-number">02</span><span className="archive-kicker">ENGINEER</span><h3>Connect the<br />whole system.</h3><p>Interfaces, data and AI work together as one experience, from the first interaction to the final result.</p><span className="principle-detail">FROM INTERFACE TO INFRASTRUCTURE</span></article>
          <article><span className="principle-number">03</span><span className="archive-kicker">REFINE</span><h3>Make the<br />details matter.</h3><p>Clear interactions, thoughtful language support and useful feedback make a system feel complete.</p><span className="principle-detail">BUILT AROUND THE USER</span></article>
        </div>
      </section>
      <section className="archive-contact archive-container"><span className="archive-kicker">HAVE SOMETHING IN MIND?</span><h2>Let&apos;s build<br /><em>what&apos;s next.</em></h2><a href="https://ibrahim-eng.dev/#contact" className="archive-button">Start a conversation <Arrow diagonal /></a></section>
    </main>
    <footer className="archive-footer archive-container"><a href="https://ibrahim-eng.dev" className="archive-footer-name">Ibrahim Hussein<span>Computer Engineer & AI Developer</span></a><div><a href="https://github.com/ibrahim-ibo-dev">GitHub <Arrow diagonal /></a><a href="https://www.linkedin.com/in/ibrahim-hussein-b080712b7/">LinkedIn <Arrow diagonal /></a><a href="#archive-heading">Back to top ↑</a></div><p>© {new Date().getFullYear()} Ibrahim Hussein <span>CRAFTED WITH PURPOSE.</span></p></footer>
  </div>;
}
