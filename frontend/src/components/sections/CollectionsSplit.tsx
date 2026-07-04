'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const collections = [
  {
    id: 'coastal',
    label: 'Cliffside Villa',
    subtitle: 'Mediterranean Coast — Pure Bliss.',
    image: '/images/property-4.png',
    stats: { beds: 6, baths: 8, sqft: '12,400', price: '$28.5M' },
  },
  {
    id: 'forest',
    label: 'Glass Pavilion',
    subtitle: 'Minimalist Retreat — Tranquility.',
    image: '/images/property-3.png',
    stats: { beds: 4, baths: 5, sqft: '8,200', price: '$14.5M' },
  },
];

export default function CollectionsSplit() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Panels slide in from sides
      gsap.fromTo(
        leftRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      gsap.fromTo(
        rightRef.current,
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      // Center divider draws in
      gsap.fromTo(
        dividerRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1,
          delay: 0.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0d0d0d] overflow-hidden"
    >
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-32 md:pt-44 pb-16">
        <span className="uppercase tracking-[0.35em] text-[11px] text-accent font-medium mb-6 block">
          Property Collections
        </span>
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-light uppercase tracking-wide">
          Two worlds.{' '}
          <span className="italic font-normal text-white/50">One standard.</span>
        </h2>
      </div>

      {/* Split panels */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pb-32 md:pb-44">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative">
          {/* Center divider (desktop) */}
          <div
            ref={dividerRef}
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 origin-top z-10"
          />

          {/* Left panel — Coastal */}
          <div ref={leftRef} className="group relative lg:pr-12 pb-12 lg:pb-0">
            <div className="relative h-[420px] md:h-[520px] overflow-hidden mb-8">
              <img
                src={collections[0].image}
                alt={collections[0].label}
                className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-105"
              />
              {/* Dark vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              {/* Label overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-heading text-2xl md:text-3xl text-white uppercase tracking-wide mb-1">
                  {collections[0].label}
                </h3>
                <p className="text-white/60 text-sm tracking-wide">
                  {collections[0].subtitle}
                </p>
              </div>
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-6 mb-6">
              {Object.entries(collections[0].stats).map(([key, val]) => (
                <div key={key}>
                  <span className="text-white text-lg font-light">{val}</span>
                  <p className="text-white/30 text-[10px] uppercase tracking-widest mt-0.5">
                    {key}
                  </p>
                </div>
              ))}
            </div>

            <button className="group/btn flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/70 hover:text-accent transition-colors duration-500">
              <span className="w-8 h-[1px] bg-accent group-hover/btn:w-14 transition-all duration-500" />
              View Estate
            </button>
          </div>

          {/* Right panel — Forest */}
          <div ref={rightRef} className="group relative lg:pl-12">
            <div className="relative h-[420px] md:h-[520px] overflow-hidden mb-8">
              <img
                src={collections[1].image}
                alt={collections[1].label}
                className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-heading text-2xl md:text-3xl text-white uppercase tracking-wide mb-1">
                  {collections[1].label}
                </h3>
                <p className="text-white/60 text-sm tracking-wide">
                  {collections[1].subtitle}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 mb-6">
              {Object.entries(collections[1].stats).map(([key, val]) => (
                <div key={key}>
                  <span className="text-white text-lg font-light">{val}</span>
                  <p className="text-white/30 text-[10px] uppercase tracking-widest mt-0.5">
                    {key}
                  </p>
                </div>
              ))}
            </div>

            <button className="group/btn flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/70 hover:text-accent transition-colors duration-500">
              <span className="w-8 h-[1px] bg-accent group-hover/btn:w-14 transition-all duration-500" />
              View Estate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
