'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function DesignPhilosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Vertical accent line draws down
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );

      // Heading reveals word-by-word feel
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      // Body text fades in
      gsap.fromTo(
        bodyRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
          },
        }
      );

      // Image parallax on scroll
      gsap.fromTo(
        imageRef.current,
        { y: 80, scale: 1.08 },
        {
          y: -80,
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#090909] overflow-hidden"
    >
      {/* Subtle grid texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-32 md:py-44">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text content */}
          <div className="relative">
            {/* Gold accent line */}
            <div
              ref={lineRef}
              className="absolute -left-6 top-0 w-[2px] h-24 bg-accent origin-top"
              style={{ transformOrigin: 'top' }}
            />

            <span className="uppercase tracking-[0.35em] text-[11px] text-accent font-medium mb-8 block">
              Design Philosophy
            </span>

            <h2
              ref={headingRef}
              className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-light leading-[1.1] mb-8 uppercase tracking-wide"
            >
              Form defined
              <br />
              by{' '}
              <span className="italic font-normal text-white/70">
                raw elegance
              </span>
            </h2>

            <div ref={bodyRef}>
              <p className="text-white/50 text-base md:text-lg leading-relaxed mb-8 max-w-md font-light">
                We believe that true luxury lives in the interplay of raw
                materials and meticulous design. Spaces engineered not just for
                living, but for experiencing the sublime convergence of nature
                and architecture.
              </p>

              <div className="flex items-center gap-8">
                <div>
                  <span className="text-3xl md:text-4xl font-light text-white">
                    200
                    <span className="text-accent">+</span>
                  </span>
                  <p className="text-white/40 text-xs uppercase tracking-widest mt-1">
                    Estates Curated
                  </p>
                </div>
                <div className="w-[1px] h-12 bg-white/10" />
                <div>
                  <span className="text-3xl md:text-4xl font-light text-white">
                    14
                  </span>
                  <p className="text-white/40 text-xs uppercase tracking-widest mt-1">
                    Countries
                  </p>
                </div>
                <div className="w-[1px] h-12 bg-white/10" />
                <div>
                  <span className="text-3xl md:text-4xl font-light text-white">
                    $2.4
                    <span className="text-accent">B</span>
                  </span>
                  <p className="text-white/40 text-xs uppercase tracking-widest mt-1">
                    Portfolio Value
                  </p>
                </div>
              </div>

              <button className="mt-12 group flex items-center gap-4 text-sm uppercase tracking-[0.2em] text-white/80 hover:text-accent transition-colors duration-500">
                <span className="w-10 h-[1px] bg-accent group-hover:w-16 transition-all duration-500" />
                Explore the Vision
              </button>
            </div>
          </div>

          {/* Right: Moody architectural image */}
          <div className="relative h-[500px] md:h-[650px] lg:h-[750px] overflow-hidden">
            <div ref={imageRef} className="absolute inset-0">
              <Image 
                src="/images/property-1.png" 
                alt="Brutalist architecture" 
                fill 
                className="object-cover opacity-40 mix-blend-luminosity"
              />
            </div>
            {/* Dark gradient overlay bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-transparent" />
            {/* Corner accent */}
            <div className="absolute bottom-8 right-8 flex items-center gap-3 z-10">
              <span className="w-3 h-3 border border-accent rotate-45" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">
                Est. 2018
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
