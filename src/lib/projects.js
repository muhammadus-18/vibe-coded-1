export const projects = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description:
      'A modern e-commerce build with real-time inventory, fast product discovery, and a frictionless checkout.',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&h=900&fit=crop',
    tags: ['Next.js', 'Stripe', 'Postgres'],
    links: {
      live: 'https://example.com',
      repo: 'https://github.com/yourname/ecommerce-platform',
    },
    outcomes: ['Improved conversion funnel UX', 'Faster LCP through image strategy', 'Accessible checkout states'],
    caseStudy: {
      role: 'Design + Frontend Engineering',
      timeline: '4 weeks',
      responsibilities: [
        'Information architecture + UX flows',
        'Component system + UI states',
        'Motion design and interaction polish',
        'Performance tuning (images, hydration, animation)',
      ],
      stack: ['Next.js', 'TypeScript', 'Tailwind', 'GSAP', 'Stripe', 'Postgres'],
      metrics: [
        { label: 'Checkout completion', value: '+12%', note: 'Template metric (replace with real data)' },
        { label: 'LCP', value: '1.9s', note: 'Template metric (replace with real data)' },
        { label: 'Accessibility', value: 'AA', note: 'Template metric (replace with real data)' },
      ],
      screens: [
        { src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&h=900&fit=crop', caption: 'Home + product discovery (placeholder).' },
        { src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&h=900&fit=crop', caption: 'Checkout flow (placeholder).' },
      ],
    },
  },
  {
    id: 'saas-dashboard',
    title: 'SaaS Analytics Dashboard',
    description:
      'A metrics-first dashboard with streaming updates, role-based access, and polished data viz.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop',
    tags: ['React', 'D3', 'Design Systems'],
    links: {
      live: 'https://example.com',
      repo: 'https://github.com/yourname/saas-dashboard',
    },
    outcomes: ['Clear information hierarchy', 'Responsive data viz patterns', 'Role-based UI states'],
    caseStudy: {
      role: 'Frontend Engineering',
      timeline: '6 weeks',
      responsibilities: [
        'Dashboard layout and navigation',
        'Data viz primitives and empty/loading/error states',
        'Interaction design for filters + drilldowns',
        'Performance profiling for large datasets',
      ],
      stack: ['React', 'TypeScript', 'D3', 'Tailwind', 'GSAP (micro-interactions)'],
      metrics: [
        { label: 'Time to insight', value: '-30%', note: 'Template metric' },
        { label: 'Median interaction latency', value: '<50ms', note: 'Template metric' },
        { label: 'Adoption', value: '+18%', note: 'Template metric' },
      ],
      screens: [
        { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop', caption: 'Overview dashboard (placeholder).' },
        { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop', caption: 'Drilldown view (placeholder).' },
      ],
    },
  },
  {
    id: 'mobile-banking',
    title: 'Mobile Banking Experience',
    description:
      'A secure, accessible banking UI with clear information hierarchy and delightful micro-interactions.',
    image:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&h=900&fit=crop',
    tags: ['TypeScript', 'Accessibility', 'Motion'],
    links: {
      live: 'https://example.com',
      repo: 'https://github.com/yourname/mobile-banking',
    },
    outcomes: ['Reduced-motion friendly interactions', 'Keyboard-first flows', 'High-contrast UI tokens'],
    caseStudy: {
      role: 'UX + UI Engineering',
      timeline: '3 weeks',
      responsibilities: [
        'Accessible interaction patterns',
        'Motion system with reduced-motion support',
        'Component library scaffolding',
        'Design tokens and contrast validation',
      ],
      stack: ['TypeScript', 'React', 'Tailwind', 'GSAP'],
      metrics: [
        { label: 'Task success', value: '+9%', note: 'Template metric' },
        { label: 'Support tickets', value: '-14%', note: 'Template metric' },
        { label: 'WCAG', value: 'AA', note: 'Template metric' },
      ],
      screens: [
        { src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&h=900&fit=crop', caption: 'Accounts overview (placeholder).' },
        { src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&h=900&fit=crop', caption: 'Transfers + confirmations (placeholder).' },
      ],
    },
  },
  {
    id: 'ai-content',
    title: 'AI Content Studio',
    description:
      'A content workflow tool that turns rough inputs into structured drafts with review-friendly diffs.',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&h=900&fit=crop',
    tags: ['Next.js', 'LLMs', 'UX'],
    links: {
      live: 'https://example.com',
      repo: 'https://github.com/yourname/ai-content-studio',
    },
    outcomes: ['Better drafting workflow UX', 'Streaming states with clear feedback', 'Delightful micro-interactions'],
    caseStudy: {
      role: 'Product Engineering',
      timeline: '5 weeks',
      responsibilities: [
        'Prompt + UX iteration loops',
        'Streaming UI states and guardrails',
        'Editor experience (diff-friendly)',
        'Latency masking and performance polish',
      ],
      stack: ['Next.js', 'React', 'Tailwind', 'GSAP', 'LLMs'],
      metrics: [
        { label: 'Draft time', value: '-40%', note: 'Template metric' },
        { label: 'Edits per draft', value: '-22%', note: 'Template metric' },
        { label: 'Retention', value: '+10%', note: 'Template metric' },
      ],
      screens: [
        { src: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&h=900&fit=crop', caption: 'Studio workspace (placeholder).' },
        { src: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&h=900&fit=crop', caption: 'Review + export (placeholder).' },
      ],
    },
  },
];

export function getProject(slug) {
  const p = projects.find((x) => x.id === slug);
  if (!p) throw new Error(`Project not found: ${slug}`);
  return p;
}

