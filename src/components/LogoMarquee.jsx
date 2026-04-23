'use client';

const logos = [
  'Linear', 'Stripe', 'Bloom', 'Vesper', 'Shopify', 
  'Loom', 'Arc', 'Framer', 'Vercel', 'NextJS'
];

export default function LogoMarquee() {
  return (
    <section className="py-20 border-y border-white/5 overflow-hidden">
      <div className="container-page mb-12">
        <h2 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.4em] text-center">
          Trusted by Innovative Teams
        </h2>
      </div>
      
      <div className="flex w-full relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>
        
        <div className="flex animate-marquee-infinite whitespace-nowrap w-max hover:[animation-play-state:paused]">
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex items-center px-8 md:px-16">
              <span className="text-2xl md:text-4xl font-black text-white/20 uppercase tracking-tighter hover:text-accent-500 transition-colors duration-500 select-none">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee-infinite {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
