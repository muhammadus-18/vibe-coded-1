export const projects = [
  {
    id: 'ethereal-spaces',
    title: 'Ethereal Spaces',
    description: 'Immersive 3D gallery experience.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&h=900&fit=crop',
    tags: ['WebGL', 'Three.js', 'React'],
    links: { live: '#', repo: '#' },
    outcomes: ['High framerate 3D', 'Immersive storytelling'],
    caseStudy: {
      role: 'Creative Developer',
      timeline: '4 weeks',
      responsibilities: ['3D Modeling', 'Shader Programming', 'UX Design'],
      stack: ['Three.js', 'React', 'GSAP'],
      metrics: [],
      screens: [],
    },
  },
  {
    id: 'brutal-commerce',
    title: 'Brutal Commerce',
    description: 'Editorial shopping platform.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop',
    tags: ['Next.js', 'Shopify', 'Editorial'],
    links: { live: '#', repo: '#' },
    outcomes: ['Increased AOV', 'Design award winner'],
    caseStudy: {
      role: 'Frontend Engineering',
      timeline: '6 weeks',
      responsibilities: ['E-commerce integration', 'UI/UX layout'],
      stack: ['Next.js', 'Tailwind', 'Shopify'],
      metrics: [],
      screens: [],
    },
  },
  {
    id: 'analog-signals',
    title: 'Analog Signals',
    description: 'Identity for a synth manufacturer.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&h=900&fit=crop',
    tags: ['Branding', 'Web Design', 'Motion'],
    links: { live: '#', repo: '#' },
    outcomes: ['Brand repositioning', 'New digital identity'],
    caseStudy: {
      role: 'Designer & Developer',
      timeline: '3 weeks',
      responsibilities: ['Brand identity', 'Web implementation'],
      stack: ['Figma', 'React', 'GSAP'],
      metrics: [],
      screens: [],
    },
  },
  {
    id: 'type-and-tension',
    title: 'Type & Tension',
    description: 'Experimental typographic journal.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&h=900&fit=crop',
    tags: ['Typography', 'Editorial', 'CSS'],
    links: { live: '#', repo: '#' },
    outcomes: ['Typographic excellence', 'Creative coding'],
    caseStudy: {
      role: 'Creator',
      timeline: '5 weeks',
      responsibilities: ['Type curation', 'Layout design'],
      stack: ['HTML', 'CSS', 'Vanilla JS'],
      metrics: [],
      screens: [],
    },
  },
];

export function getProject(slug) {
  const p = projects.find((x) => x.id === slug);
  if (!p) throw new Error(`Project not found: ${slug}`);
  return p;
}

export function getNextProject(currentSlug) {
  const index = projects.findIndex((x) => x.id === currentSlug);
  const nextIndex = (index + 1) % projects.length;
  return projects[nextIndex];
}

