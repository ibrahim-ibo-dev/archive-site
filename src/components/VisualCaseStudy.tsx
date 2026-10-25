"use client";

import Image from "next/image";
import Link from "next/link";
import CaseNavigation from "@/components/CaseNavigation";
import { visualProjects, type VisualProject } from "@/data/visual-projects";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h16m-6-6 6 6-6 6"} /></svg>;
}

function Screenshot({ project, detail = false }: { project: VisualProject; detail?: boolean }) {
  const src = `/images/projects/${project.slug}${detail ? "-detail" : ""}.jpg`;
  return <figure className={`case-screenshot ${detail ? "case-screenshot-detail" : ""}`}>
    <div className="case-window-bar"><span className="case-window-dots" aria-hidden="true"><i /><i /><i /></span><span>{project.title} / {detail ? "Inside the experience" : "Product view"}</span><a href={src} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} screenshot at full size`}><Arrow diagonal /></a></div>
    <a className="case-image-link" href={src} target="_blank" rel="noopener noreferrer" aria-label={`Open full ${project.title} ${detail ? "detail " : ""}screenshot`}>
      <Image src={src} alt={detail ? project.detailAlt : project.imageAlt} width={1600} height={1000} sizes="(max-width: 768px) 100vw, 1200px" priority={!detail} className="case-product-image" />
    </a>
    <figcaption><span>{detail ? "02" : "01"} /</span>{detail ? project.detailCaption : project.imageCaption}</figcaption>
  </figure>;
}

export default function VisualCaseStudy({ slug }: { slug: string }) {
  const project = visualProjects.find((item) => item.slug === slug)!;
  const next = visualProjects[(visualProjects.indexOf(project) + 1) % visualProjects.length];
  return <div className="visual-case">
    <CaseNavigation />
    <main id="case-content">
      <section className="case-hero case-container">
        <div className="case-eyebrow"><span>{project.number} — {project.category}</span><span className={`case-status ${project.status === "Prototype" ? "is-prototype" : ""}`}><i />{project.status}</span></div>
        <div className="case-hero-grid"><div><h1>{project.title}</h1>{project.localTitle && <p className="case-local-title" lang="ckb" dir="rtl">{project.localTitle}</p>}</div><div className="case-intro"><p className="case-tagline">{project.tagline}</p><p>{project.description}</p><div className="case-actions"><a href="#the-story" className="case-text-link">Explore the project <span aria-hidden="true">↓</span></a>{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="case-live-link">Open live app <Arrow diagonal /></a>}</div></div></div>
        <div className="case-tech">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
      </section>
      <div className="case-container"><Screenshot project={project} /></div>
      <section className="case-container case-metrics" aria-label="Project at a glance">{project.metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</section>
      <section id="the-story" className="case-container case-section case-story"><div className="case-section-heading"><span className="case-label">01 / The idea</span><h2>A reason to build.</h2></div><div className="case-story-copy"><div><h3>The challenge</h3><p>{project.challenge}</p></div><div><h3>The approach</h3><p>{project.approach}</p></div></div></section>
      <section className="case-container case-section"><div className="case-section-heading"><span className="case-label">02 / The experience</span><h2>Made to be explored.</h2></div><div className="case-features">{project.features.map((feature, index) => <article key={feature.title}><span className="case-feature-number">0{index + 1}</span><h3>{feature.title}</h3><p>{feature.body}</p></article>)}</div><Screenshot project={project} detail /></section>
      <section className="case-container case-section case-engineering"><div className="case-section-heading"><span className="case-label">03 / Under the surface</span><h2>The thinking behind<br />the interface.</h2><p>Design choices become useful when the system underneath supports them.</p></div><div>{project.engineering.map((item, index) => <article key={item.title}><span>0{index + 1}</span><div><h3>{item.title}</h3><p>{item.body}</p></div></article>)}</div></section>
      <aside className="case-container"><div className="case-note"><span className="case-label">{project.status === "Prototype" ? "Research notes" : "Project notes"}</span><div><h2>{project.noteTitle}</h2><p>{project.note}</p>{project.sourceUrl && <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="case-text-link">Explore the source <Arrow diagonal /></a>}</div></div></aside>
      <section className="case-container case-next"><span className="case-label">Keep exploring / Next project</span><Link href={`/${next.slug}`}><div><span>{next.category}</span><h2>{next.title}</h2></div><Arrow /></Link></section>
    </main>
    <footer className="case-footer case-container"><span>© {new Date().getFullYear()} Ibrahim Hussein</span><Link href="/">View all projects <span aria-hidden="true">↗</span></Link></footer>
  </div>;
}
