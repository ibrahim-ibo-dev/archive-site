import Link from "next/link";
import type { ReactNode } from "react";

export default function CaseNavigation({ children }: { children?: ReactNode }) {
  return <>
    <a className="case-skip" href="#case-content">Skip to case study</a>
    <header className="detail-nav">
      <nav className="detail-nav-inner" aria-label="Case study navigation">
        <Link href="/" className="detail-back"><span aria-hidden="true">↖</span> All projects</Link>
        <a className="detail-brand" href="https://ibrahim-eng.dev" aria-label="Ibrahim Hussein — main portfolio"><span>IBRAHIM<span className="detail-brand-dot">.</span></span><small>ENGINEER & CREATIVE DEVELOPER</small></a>
        <div className="detail-nav-actions">{children || <a href="https://ibrahim-eng.dev" className="detail-portfolio">Portfolio <span aria-hidden="true">↗</span></a>}</div>
      </nav>
    </header>
  </>;
}
