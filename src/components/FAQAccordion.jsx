'use client';

import { useState, useRef } from 'react';
import gsap from 'gsap';

const faqs = [
  {
    question: 'Do you do fixed-price projects?',
    answer: 'This template supports either model. Many teams prefer fixed scope + clear milestones for small builds, and weekly for ongoing work.',
  },
  {
    question: 'Do you support reduced-motion and accessibility?',
    answer: 'Yes—motion should improve comprehension, with fallbacks for `prefers-reduced-motion` and keyboard-first interaction.',
  },
  {
    question: 'Can you work with an existing design system?',
    answer: 'Absolutely. I can extend tokens/components or help you establish conventions if you don’t have one yet.',
  },
  {
    question: 'What do you need from me to start?',
    answer: 'A goal, a target user, examples you like, and the main constraints (deadline, platform, budget).',
  },
  {
    question: 'What tech stack do you recommend?',
    answer: 'For performance and SEO, Next.js is my go-to. For styling, Tailwind CSS offers unmatched speed. For animation, GSAP is the industry standard.',
  },
];

function FAQItem({ question, answer, index }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const iconRef = useRef(null);

  const toggleAccordion = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);

    // GSAP Animation for smooth height expansion
    if (nextState) {
      gsap.to(contentRef.current, {
        height: 'auto',
        duration: 0.5,
        ease: 'power3.out',
        opacity: 1,
        marginTop: 16,
      });
      gsap.to(iconRef.current, {
        rotation: 45,
        duration: 0.4,
        ease: 'power2.out',
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        duration: 0.4,
        ease: 'power3.inOut',
        opacity: 0,
        marginTop: 0,
      });
      gsap.to(iconRef.current, {
        rotation: 0,
        duration: 0.4,
        ease: 'power2.out',
      });
    }
  };

  return (
    <div 
      className="border-b border-white/10 last:border-0 group"
      data-reveal
      data-reveal-delay={index * 0.05}
    >
      <button
        onClick={toggleAccordion}
        className="w-full py-6 flex items-center justify-between text-left transition-colors"
      >
        <span className="text-lg md:text-xl font-bold text-gray-300 group-hover:text-white transition-colors">
          {question}
        </span>
        <div 
          ref={iconRef}
          className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-accent-500/10 group-hover:border-accent-500/30 transition-all"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M1 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </button>
      
      <div 
        ref={contentRef}
        className="h-0 overflow-hidden opacity-0"
      >
        <p className="text-gray-400 text-lg leading-relaxed pb-6 max-w-3xl">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQAccordion() {
  return (
    <section className="mt-24 max-w-4xl mx-auto">
      <div className="text-center mb-12" data-reveal>
        <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tighter">
          Frequently <br /> <span className="text-gray-600">Asked Questions</span>
        </h2>
      </div>

      <div className="card p-4 md:p-8">
        {faqs.map((faq, i) => (
          <FAQItem key={i} index={i} {...faq} />
        ))}
      </div>
    </section>
  );
}
