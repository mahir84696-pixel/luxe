'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function CinematicHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const skyRef = useRef<HTMLImageElement>(null);
  const landRef = useRef<HTMLImageElement>(null);
  const blueprintRef = useRef<HTMLImageElement>(null);
  const mansionRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=400%',
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
        }
      });

      // Scene 1: Sky to Land
      tl.to(skyRef.current, { opacity: 0, scale: 1.1, duration: 1 }, 0)
        .fromTo(landRef.current, { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1, duration: 1 }, 0);

      // Scene 2: Land to Blueprint
      tl.to(landRef.current, { opacity: 0, scale: 1.1, duration: 1 }, 1)
        .fromTo(blueprintRef.current, { opacity: 0, filter: 'invert(1)' }, { opacity: 0.8, filter: 'invert(0)', duration: 1 }, 1);

      // Scene 3: Blueprint to Mansion
      tl.to(blueprintRef.current, { opacity: 0, duration: 1 }, 2)
        .fromTo(mansionRef.current, { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1, duration: 1 }, 2);

      // Scene 4: Reveal Text
      tl.to(mansionRef.current, { scale: 1.05, duration: 2 }, 3)
        .fromTo(textRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, 3);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-background">
      {/* Scene 1: Sky */}
      <Image
        ref={skyRef}
        src="/images/infinity-pool.png"
        alt="Clear sky"
        fill
        className="object-cover"
        priority
      />

      {/* Scene 2: Empty Land */}
      <Image
        ref={landRef}
        src="/images/property-4.png"
        alt="Empty land"
        fill
        className="object-cover opacity-0"
        priority
      />

      {/* Scene 3: Blueprint */}
      <Image
        ref={blueprintRef}
        src="/images/property-3.png"
        alt="Architectural Blueprint"
        fill
        className="object-cover opacity-0 mix-blend-screen"
        priority
      />

      {/* Scene 4: Mansion */}
      <Image
        ref={mansionRef}
        src="/images/property-1.png"
        alt="Luxury Mansion"
        fill
        className="object-cover opacity-0"
        priority
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      {/* Typography Reveal */}
      <div 
        ref={textRef} 
        className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 z-10 p-4"
      >
        <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl text-white tracking-tighter mb-6 font-light uppercase">
          Luxury Beyond<br />Imagination
        </h1>
        <div className="flex gap-4 opacity-0 animate-fade-in delay-1000">
          <button className="px-8 py-4 bg-white text-black text-sm uppercase tracking-widest hover:bg-accent transition-colors duration-500">
            Explore Collection
          </button>
          <button className="px-8 py-4 border border-white text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-500">
            Private Viewing
          </button>
        </div>
      </div>
    </section>
  );
}
