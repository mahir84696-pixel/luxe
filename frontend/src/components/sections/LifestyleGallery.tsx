'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const lifestyleItems = [
  {
    image: '/images/luxury-amenity.png',
    label: 'Gourmet Kitchen',
    span: 'col-span-1 row-span-1',
  },
  {
    image: '/images/property-2.png',
    label: 'Master Suite',
    span: 'col-span-1 row-span-1',
  },
  {
    image: '/images/infinity-pool.png',
    label: 'Infinity Pool',
    span: 'col-span-1 row-span-2 md:row-span-2',
  },
  {
    image: '/images/property-4.png',
    label: 'Modern Facade',
    span: 'col-span-1 row-span-1',
  },
  {
    image: '/images/property-1.png',
    label: 'Grand Staircase',
    span: 'col-span-1 row-span-1',
  },
  {
    image: '/images/property-3.png',
    label: 'Private Garden',
    span: 'col-span-1 row-span-1',
  },
  {
    image: '/images/luxury-amenity.png',
    label: 'Wine Cellar',
    span: 'col-span-2 row-span-1',
  },
];

export default function LifestyleGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item, i) => {
        if (!item) return;
        gsap.fromTo(
          item,
          { opacity: 0, y: 40, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            delay: i * 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 65%',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0a0a0a] overflow-hidden"
    >
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-32 md:py-44">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <span className="uppercase tracking-[0.35em] text-[11px] text-accent font-medium mb-6 block">
              The Lifestyle
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-light uppercase tracking-wide">
              Every detail,{' '}
              <span className="italic font-normal text-white/50">
                considered
              </span>
            </h2>
          </div>
          <button className="group flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/60 hover:text-accent transition-colors duration-500 self-start md:self-end">
            <span className="w-8 h-[1px] bg-accent group-hover:w-14 transition-all duration-500" />
            View All Amenities
          </button>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[240px] gap-3">
          {lifestyleItems.map((item, i) => (
            <div
              key={item.label}
              ref={(el) => {
                itemsRef.current[i] = el;
              }}
              className={`group relative overflow-hidden cursor-pointer ${item.span}`}
            >
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-110"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-700" />
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]">
                <span className="text-white text-xs uppercase tracking-[0.2em] font-medium">
                  {item.label}
                </span>
              </div>
              {/* Corner diamond */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="block w-2 h-2 border border-accent rotate-45" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
