\> \*\*Goal:\*\* Transform a generic Next.js + Tailwind site into a
publishing‑worthy, animation‑rich portfolio using \*\*Windsurf AI\*\* as
the primary coding agent.

\-\--

\## 📦 Tech Stack

\| Layer \| Technology \| \| :\-\-\-\-\-\-\-\-\-\-\-\-- \|
:\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-- \|
\| Framework \| Next.js 14 (App Router) \| \| Styling \| Tailwind CSS \|
\| Animations \| GSAP (GreenSock) + \@gsap/react \| \| Smooth Scroll \|
Lenis (@studio‑freight/lenis) \| \| Content \| MDX for blog, static for
pages \| \| Deployment \| Vercel / Netlify \|

\-\--

\## 🧠 Windsurf Workflow Principles

\- \*\*Use Write Mode\*\* for scaffolding entire components or files. -
\*\*Use Chat Mode\*\* for explanations, debugging, and small targeted
edits. - \*\*Use Inline Edit (Cmd+I)\*\* for precise, single‑component
changes. - \*\*Commit often\*\* -- Git is your safety net for AI‑driven
experiments.

\-\--

\## 🚀 Phase 1: Project Genesis (Scaffolding)

\*\*Prompt for Windsurf Cascade (Write Mode):\*\*

\`\`\` Create a Next.js 14 project using the App Router. Set up Tailwind
CSS. Install: gsap, \@gsap/react, clsx, \@studio-freight/lenis,
gray-matter, \@next/mdx.

Folder structure: - app/  - layout.js  - page.js (Home)  - work/  -
page.js  - \[slug\]/page.js  - blog/  - page.js  - \[slug\]/page.js  -
about/page.js  - lab/page.js  - services/page.js - components/  -
Navbar.jsx  - Footer.jsx  - SmoothScroll.jsx - lib/posts.js (for MDX) -
posts/ (sample .mdx files)

In layout.js, import GSAP and register ScrollTrigger. \`\`\`

\-\--

\## 🎨 Phase 2: The Vibe Reset (Global Styling)

\*\*Prompt for Cascade Chat:\*\*

\`\`\` Update tailwind.config.js and globals.css to implement a dark,
brutalist-adjacent theme. Background: #0D0D0D Text: #F2F2F2 Fonts:
\'Geist Sans\' (primary), \'Geist Mono\' (monospace)

Add a noise texture overlay to body using a CSS background-image (base64
SVG or data URI). Add a custom animation class in Tailwind config called
\'float\' (moves element up/down 10px over 6s infinite). \`\`\`

\-\--

\## 🧩 Phase 3: Global Smooth Scroll (Lenis + GSAP)

\*\*Create \`components/SmoothScroll.jsx\` with this exact
implementation:\*\*

\`\`\`jsx \'use client\'; import { useEffect, useRef } from \'react\';
import Lenis from \'@studio-freight/lenis\'; import { usePathname } from
\'next/navigation\'; import gsap from \'gsap\'; import { ScrollTrigger }
from \'gsap/ScrollTrigger\';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }) { const lenisRef =
useRef(null); const pathname = usePathname();

useEffect(() =\> { const lenis = new Lenis({ duration: 1.2, easing: (t)
=\> Math.min(1, 1.001 - Math.pow(2, -10 \* t)), smoothWheel: true,
smoothTouch: false, });

lenisRef.current = lenis;

// RAF loop function raf(time) { lenis.raf(time);
requestAnimationFrame(raf); } requestAnimationFrame(raf);

// Sync with GSAP ScrollTrigger lenis.on(\'scroll\',
ScrollTrigger.update); gsap.ticker.add((time) =\> lenis.raf(time \*
1000)); gsap.ticker.lagSmoothing(0);

// Reset scroll position on route change lenis.scrollTo(0, { immediate:
true });

return () =\> { lenis.off(\'scroll\', ScrollTrigger.update);
gsap.ticker.remove(lenis.raf); lenis.destroy(); }; }, \[pathname\]);

return \<\>{children}\</\>; } \`\`\`

\*\*Wrap children in \`app/layout.js\` with this component.\*\*

\-\--

\## ✨ Phase 4: Page‑Specific Animation Prompts

\### 🏠 Homepage Hero

\*\*Select \`app/page.js\` → Inline Edit (Cmd+I)\*\*

\`\`\` Replace the hero section with: - Full‑screen flex container. -
Left column: h1, p tag, button. - Right column: div with id
\'hero-visual\'.

Inside useGSAP hook: 1. Stagger the h1, p, and button from y:50 to y:0
with opacity. 2. Add a magnetic effect to the button (gsap.quickTo). 3.
For #hero-visual, create a morphing blob using a timeline that cycles
border-radius values infinitely. \`\`\`

\### 💼 Work Page (Horizontal Scroll Carousel)

\*\*Select \`app/work/page.js\` → Inline Edit\*\*

\`\`\` Create a new component HorizontalScrollCarousel (in components/).
It accepts an array of projects (image, title, category). Use CSS flex
with width: 400vw. Use GSAP ScrollTrigger to pin the section and animate
xPercent from 0 to -75 on scroll. Add image scale parallax (scale 1 →
1.2) as cards enter view. Pass dummy data with placeholder images from
picsum.photos. \`\`\`

\### 📝 Blog Page (MDX + Active TOC)

\*\*Prompt for Cascade Chat:\*\*

\`\`\` Set up MDX support (@next/mdx, gray-matter). Create a posts/
folder with 3 sample .mdx files (frontmatter: title, date, excerpt,
coverImage). Create lib/posts.js to fetch and parse posts. In
app/blog/page.js, display posts in a grid with hover animation. In
app/blog/\[slug\]/page.js: - Render MDX content with Tailwind
Typography. - Add a Table of Contents component that highlights the
active section using Intersection Observer (NOT ScrollTrigger). \`\`\`

\*\*TOC Hook (\`hooks/useActiveHeading.js\`):\*\*

\`\`\`js import { useState, useEffect } from \'react\';

export const useActiveHeading = (headingIds) =\> { const \[activeId,
setActiveId\] = useState(\'\'); useEffect(() =\> { const observers =
headingIds.map(id =\> { const el = document.getElementById(id); if (!el)
return null; const observer = new IntersectionObserver( (\[entry\]) =\>
{ if (entry.isIntersecting) setActiveId(id); }, { rootMargin: \'-20% 0px
-60% 0px\', threshold: 0 } ); observer.observe(el); return observer;
}).filter(Boolean); return () =\> observers.forEach(obs =\>
obs?.disconnect()); }, \[headingIds\]); return activeId; }; \`\`\`

\### 🛠️ Services Page (Parallax Without Hijacking)

\*\*Select \`app/services/page.js\` → Inline Edit\*\*

\`\`\` Rewrite the parallax section to use passive ScrollTriggers (NO
pin). For each image, use gsap.fromTo with yPercent: 20 → -20, ease:
\'none\', scrollTrigger: { trigger: container, start: \'top bottom\',
end: \'bottom top\' }. Add will-change-transform class to images. Remove
any pin: true or pinSpacing: false. \`\`\`

\### 🧪 Lab Page (Interactive Experiments)

\*\*Select \`app/lab/page.js\` → Inline Edit\*\*

\`\`\` Add two demos: 1. Tilt Card: rotates in 3D toward mouse cursor
(max 15deg) using mousemove + gsap.to. 2. Custom Cursor toggle:
enables/disables a div cursor that follows mouse with gsap lag. Use
Tailwind for layout. \`\`\`

\-\--

\## 🩺 Phase 5: Performance & Bug Fixes (Common Issues)

\### 🔴 Scroll Hijacking / Slow Scroll / Won\'t Stop

\*\*Diagnostic Prompt:\*\*

\`\`\` Temporarily disable Lenis and all ScrollTriggers to confirm
native scroll works. In SmoothScroll.jsx, comment out Lenis init and
return only children. In layout.js, comment out SmoothScroll wrapper. In
globals.css, add: html, body { overflow: auto !important; height: auto
!important; } Test. If scroll is normal, problem is Lenis/ScrollTrigger
misconfiguration. \`\`\`

\*\*Permanent Fix Checklist:\*\* - Every \`pin: true\` must have
\`pinSpacing: true\`. - No duplicate Lenis instances (search \`new
Lenis(\`). - No \`overflow-hidden\` on \`html\`, \`body\`, or
\`h-screen\` containers. - ScrollTrigger.refresh() not called inside
animation loops. - Cleanup functions in all useGSAP hooks.

\### 🟡 Micro‑Stutter on Blog TOC

\*\*Fix:\*\* Replace ScrollTrigger‑based TOC spy with Intersection
Observer (see hook above). Animate the highlight indicator only when
\`activeId\` changes, not on every scroll tick.

\### 🟢 Images Causing Layout Shift / Jank

\*\*Fix:\*\* Add \`transform-gpu\` class to animated images. Use
\`will-change: transform\` only on the moving container, not globally.

\-\--

\## 🚢 Phase 6: Publishing‑Worthy Polish

Run these prompts in Cascade Chat to add the final layer of
professionalism.

\### 1. SEO & Sitemap

\`\`\` Add sitemap.ts and robots.ts to the app directory using Next.js
conventions. Dynamically include all blog posts and work projects.
\`\`\`

\### 2. Command Palette (Cmd+K)

\`\`\` Install cmdk. Create components/CommandMenu.jsx. Populate with
links to all pages, theme toggle, and search. Add global keyboard
listener (Ctrl+K / Cmd+K). \`\`\`

\### 3. Analytics

\`\`\` Add \@vercel/analytics and \@vercel/speed-insights. Wrap layout
with providers. \`\`\`

\### 4. Custom Page Transitions

\`\`\` Install framer-motion. Wrap children in AnimatePresence
mode=\'wait\'. Create PageTransition.jsx (full‑screen curtain slide).
Use Next.js usePathname to trigger on route change. \`\`\`

\### 5. Magnetic Social Links

\`\`\` Create MagneticButton component. On mousemove, calculate distance
from center and move button with gsap.quickTo (max 20px). On mouseleave,
animate back to 0,0 with elastic ease. \`\`\`

\-\--

\## ✅ Pre‑Launch Checklist

\- \[ \] All pages have unique, descriptive \`\<title\>\` and meta
descriptions. - \[ \] Images have alt text and proper sizing. - \[ \]
Lenis and GSAP cleanup confirmed (no memory leaks on route change). - \[
\] Scroll performance tested on mobile (Lenis \`smoothTouch: false\`
recommended). - \[ \] Dark theme contrast meets accessibility
standards. - \[ \] Site deployed and tested on Vercel/Netlify. - \[ \]
README.md includes setup instructions and credits. - \[ \] A
\`vibe-log.md\` file capturing interesting AI prompts used during
development.
