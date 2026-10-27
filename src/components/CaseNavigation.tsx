import type { ReactNode } from "react";
import {BrandNav} from "./brand/BrandFrame";

export default function CaseNavigation({ children }: { children?: ReactNode }) {
  return <>
    <BrandNav site="archive"/>
    <div className="brand-case-nav-space"/>
    <span id="site-content" tabIndex={-1}/>
    {children&&<div className="brand-case-actions brand-container">{children}</div>}
  </>;
}
